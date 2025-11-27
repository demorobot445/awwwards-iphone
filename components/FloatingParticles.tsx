import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export default function FloatingParticles({
  count = 90,
  radius = 6,
  materialRef,
}: {
  count?: number;
  radius?: number;
  materialRef: React.RefObject<THREE.MeshStandardMaterial | null>;
}) {
  const particles = useRef<THREE.Group>(null);
  const texture = useTexture("/particle.png");
  const { camera } = useThree();

  // Make texture smooth & soft
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;

  // Pre-generate particle settings
  const data = useMemo(() => {
    return Array.from({ length: count }).map(() => {
      const r = radius + Math.random() * 0.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      return {
        position: new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        ),
        speed: new THREE.Vector3(
          0.2 + Math.random() * 0.6,
          0.1 + Math.random() * 0.5,
          0.2 + Math.random() * 0.6
        ),
        seed: Math.random() * 2000,
        baseScale: 0.2 + Math.random() * 0.5,
      };
    });
  }, [count, radius]);

  // Shared material
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        opacity: 0.1,
        color: "#ffffff",
        depthWrite: false, // avoids artifacts
      }),
    [texture]
  );

  if (materialRef) materialRef.current = material;

  useFrame(({ clock }) => {
    if (!particles.current) return;

    const t = clock.getElapsedTime();

    particles.current.children.forEach((obj, i) => {
      const mesh = obj as THREE.Mesh;
      const d = data[i];

      // Floating movement
      mesh.position.x = d.position.x + Math.sin(t * d.speed.x + d.seed) * 0.1;
      mesh.position.y = d.position.y + Math.cos(t * d.speed.y + d.seed) * 0.1;
      mesh.position.z = d.position.z + Math.sin(t * d.speed.z + d.seed) * 0.1;

      // Slight breathing scale
      const s = d.baseScale + Math.sin(t * 0.8 + d.seed) * 0.05;
      mesh.scale.setScalar(s);

      // Billboard — ALWAYS face the camera
      mesh.lookAt(camera.position);
    });
  });

  return (
    <group ref={particles}>
      {data.map((d, i) => (
        <mesh key={i} position={d.position} material={material}>
          <planeGeometry args={[0.25, 0.25]} />
        </mesh>
      ))}
    </group>
  );
}
