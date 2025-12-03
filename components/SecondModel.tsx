import * as THREE from "three";
import { Plane, useGLTF, useTexture } from "@react-three/drei";
import { ShirtType } from "@/lib/textures";
// import { useShirtSectionTextures } from "@/lib/useTextures";
// import { createMaterials } from "@/lib/material";
import { useGSAP } from "@gsap/react";
import { RefObject, useRef } from "react";
import gsap from "gsap";
import { shirtColors } from "@/lib/colors";
import { useMediaQuery } from "react-responsive";
import { Phone } from "./Phone";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import FloatingParticles from "./FloatingParticles";
import BGLights from "./BGLights";
import Mise from "./Mise";

type GLTFResult = {
  nodes: {
    [name: string]: THREE.Mesh;
  };
};
export function SecondModel({
  shirtType,
  htmlRef,
}: {
  shirtType: ShirtType;
  htmlRef: React.RefObject<HTMLDivElement | null>;
}) {
  // const { nodes } = useGLTF(
  //   "/models/ShirtScrolling.glb"
  // ) as unknown as GLTFResult;
  const { nodes } = useGLTF("/models/scrollText.glb") as unknown as GLTFResult;
  // const stencil = useMask(1, true);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  // const textures = useShirtSectionTextures(shirtType, "second");
  // const mats = createMaterials(textures, stencil) as Record<
  //   TextureKey<typeof shirtType, "second">,
  //   THREE.MeshBasicMaterial
  // >;

  // const marqueeText1Ref = useRef<THREE.Mesh>(null);
  // const marqueeText1DupRef = useRef<THREE.Mesh>(null);
  // const marqueeText2Ref = useRef<THREE.Mesh>(null);
  // const marqueeText2DupRef = useRef<THREE.Mesh>(null);

  const groupRef = useRef<THREE.Group>(null);
  const mobileRef = useRef<THREE.Group>(null);
  const logoRef = useRef<THREE.Mesh>(null);
  const logoMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const textsRef = useRef<THREE.Group>(null);
  const boxMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);

  const getTextColor = () => shirtColors[shirtType]?.text ?? "black";
  const textsMaterial = new THREE.MeshBasicMaterial({
    color: "white",
    transparent: true,
    opacity: 1,
    // ...stencil,
  });
  // const marqueeMaterial = new THREE.MeshBasicMaterial({
  //   color: getTextColor(),
  //   transparent: true,
  //   opacity: 0,
  //   ...stencil,
  // });
  // const TOP_BOTTOM_TEXT_WIDTH = 5.7;
  // const MIDDLE_TEXT_WIDTH = 6.2;
  // const DURATION = 50;

  useGSAP(() => {
    if (!groupRef.current) return;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#second-section",
          start: "top top",
          end: "1000% top",
          scrub: 1,
          pin: true,
          // markers: true,
        },
      })
      .to(mobileRef.current!.position, { y: 0 })
      .to(mobileRef.current!.rotation, { x: 0, y: 0, z: 0 }, "<")
      .to(logoRef.current!.scale, { x: 0, y: 0, z: 0, duration: 0.2 }, "<")
      .to(logoMatRef.current, { opacity: 0, duration: 0.2 }, "<")
      .to(groupRef.current.rotation, { x: 0, duration: 0.2 }, "<")
      .to(groupRef.current.position, { y: 0.7, duration: 0.8 }, "<")
      .to(groupRef.current.rotation, { y: -Math.PI * 3, duration: 0.8 }, "<")
      .to(boxMaterialsRef.current, {
        opacity: 0,
        emissiveIntensity: 0,
        duration: 0.1,
        ease: "power2.out",
      })
      .to(groupRef.current.scale, { x: 1, y: 1, z: 1, duration: 0.1 }, "<")
      .to(particlesMaterialRef.current, { opacity: 0, duration: 0.1 }, "<")
      .to(textsMaterial, { opacity: 0, duration: 0.05 }, "<")
      // .to(marqueeMaterial, { opacity: 0.1, duration: 0.05 }, "<")
      // .to(groupRef.current.position, { y: 0.7 })

      .add(animateTexts(textsRef).duration(0.5), 0)
      .to(htmlRef.current, {
        top: -htmlRef.current!.offsetHeight + innerHeight,
      })
      .set(mobileRef.current!.scale, { x: 0, y: 0, z: 0 }, "<0.2");
  }, []);

  const particlesMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);

  const animateTexts = (textsRef: RefObject<THREE.Group | null>) => {
    if (!textsRef.current) return gsap.timeline();
    const meshes = textsRef.current.children as THREE.Mesh[];

    const tl = gsap.timeline();
    meshes.forEach((mesh, i) => {
      tl.from(
        mesh.scale,
        { x: 0, y: 0, z: 0, duration: 1, ease: "circ.out" },
        i * 0.1
      );
      tl.from(
        mesh.position,
        { y: "+=0.04", duration: 1, ease: "back.out" },
        i * 0.1
      );
    });

    return tl;
  };

  //marquee animation
  // useGSAP(() => {
  //   if (
  //     !marqueeText1Ref.current ||
  //     !marqueeText1DupRef.current ||
  //     !marqueeText2Ref.current ||
  //     !marqueeText2DupRef.current
  //   )
  //     return;

  //   gsap.to(marqueeText1Ref.current.position, {
  //     x: `-=${TOP_BOTTOM_TEXT_WIDTH}`,
  //     duration: DURATION,
  //     ease: "none",
  //     repeat: -1,
  //   });
  //   gsap.to(marqueeText1DupRef.current.position, {
  //     x: `-=${TOP_BOTTOM_TEXT_WIDTH}`,
  //     duration: DURATION,
  //     ease: "none",
  //     repeat: -1,
  //   });
  //   gsap.to(marqueeText2Ref.current.position, {
  //     x: `+=${MIDDLE_TEXT_WIDTH}`,
  //     duration: DURATION,
  //     ease: "none",
  //     repeat: -1,
  //   });
  //   gsap.to(marqueeText2DupRef.current.position, {
  //     x: `+=${MIDDLE_TEXT_WIDTH}`,
  //     duration: DURATION,
  //     ease: "none",
  //     repeat: -1,
  //   });
  // });

  return (
    <>
      <Plane ref={logoRef} position-y={0.7} scale={0.8} args={[1.5, 0.33]}>
        <meshBasicMaterial
          ref={logoMatRef}
          map={useTexture("/full-logo.png")}
          transparent
          side={THREE.DoubleSide}
        />
      </Plane>

      <group
        ref={groupRef}
        dispose={null}
        scale={isMobile ? 1.5 : 2.2}
        rotation={[Math.PI / 8, Math.PI / 3, 0]}
        position-y={-0.1}
      >
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            intensity={1}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>

        <FloatingParticles count={200} materialRef={particlesMaterialRef} />
        <BGLights boxMaterialsRef={boxMaterialsRef} />
        <Mise />

        <group
          ref={mobileRef}
          position={[0, 0.25, 0]}
          rotation={[Math.PI * 0.45, -Math.PI * 0.08, Math.PI * 0.82]}
          scale={4}
          dispose={null}
        >
          <Phone />
        </group>
        {/* <mesh geometry={nodes.Sphere_ENV.geometry}>
          <meshStandardMaterial
            side={THREE.DoubleSide}
            // map={useTexture(
            //   "/textures/sport/second/Sport_Sphere_Env_Baked_Texture.webp"
            // )}
          />
        </mesh> */}

        <group ref={textsRef}>
          {Object.entries(nodes)
            .filter(
              ([key]) =>
                key.startsWith("heading") || key.startsWith("paragraph")
            )
            .map(([key, node]) => {
              return (
                <mesh
                  key={key}
                  geometry={node.geometry}
                  material={textsMaterial}
                  position={node.position}
                  rotation={node.rotation}
                  scale={node.scale}
                />
              );
            })}
        </group>
        {/* <mesh
        ref={marqueeText1Ref}
        geometry={nodes.Marquee_Top_Bottom.geometry}
        material={marqueeMaterial}
        position={[0, 0, 0]}
      />
      <mesh
        ref={marqueeText1DupRef}
        geometry={nodes.Marquee_Top_Bottom.geometry}
        material={marqueeMaterial}
        position={[TOP_BOTTOM_TEXT_WIDTH, 0, 0]}
      />
      <mesh
        ref={marqueeText2Ref}
        geometry={nodes.Marquee_Middle.geometry}
        material={marqueeMaterial}
        position={[0, 0, 0]}
      />
      <mesh
        ref={marqueeText2DupRef}
        geometry={nodes.Marquee_Middle.geometry}
        material={marqueeMaterial}
        position={[-MIDDLE_TEXT_WIDTH, 0, 0]}
      /> */}
      </group>
    </>
  );
}
