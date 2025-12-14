import * as THREE from "three";
import { Plane, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube010: THREE.Mesh;
    Cube010_1: THREE.Mesh;
    Cube010_2: THREE.Mesh;
    Cube010_3: THREE.Mesh;
    Cube010_4: THREE.Mesh;
    Back_glass: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cylinder_1: THREE.Mesh;
    Cylinder_2: THREE.Mesh;
    Sphere004: THREE.Mesh;
    Sphere004_1: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder002_1: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder001_1: THREE.Mesh;
    Cylinder001_2: THREE.Mesh;
    Lens001: THREE.Mesh;
    Cylinder010: THREE.Mesh;
    Cylinder010_1: THREE.Mesh;
    Cylinder009: THREE.Mesh;
    Cylinder009_1: THREE.Mesh;
    Cylinder009_2: THREE.Mesh;
    Lens002: THREE.Mesh;
    Cylinder011: THREE.Mesh;
    Cylinder011_1: THREE.Mesh;
    Sphere001: THREE.Mesh;
    Sphere001_1: THREE.Mesh;
    LED: THREE.Mesh;
    LIDAR: THREE.Mesh;
    Mic_mesh: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube004_1: THREE.Mesh;
    Cube004_2: THREE.Mesh;
    Screws: THREE.Mesh;
    Speaker_mesh: THREE.Mesh;
  };
  materials: {
    Aluminum: THREE.MeshStandardMaterial;
    ["Plastic antena"]: THREE.MeshStandardMaterial;
    ["Plastic USB port"]: THREE.MeshStandardMaterial;
    ["Camera filter"]: THREE.MeshStandardMaterial;
    LED: THREE.MeshStandardMaterial;
    ["Frosted glass"]: THREE.MeshStandardMaterial;
    Frame: THREE.MeshStandardMaterial;
    Lens: THREE.MeshStandardMaterial;
    ["Sapphire miror"]: THREE.MeshStandardMaterial;
    ["Mirror filter"]: THREE.MeshStandardMaterial;
    ["Plastic LED"]: THREE.MeshStandardMaterial;
    ["Metal Screw"]: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    Display: THREE.MeshStandardMaterial;
  };
};

export function Phone() {
  const { nodes, materials } = useGLTF(
    "/models/phone.glb"
  ) as unknown as GLTFResult;

  return (
    <group dispose={null}>
      <Plane
        position={[0, 0, -0.005]}
        rotation-y={Math.PI * 1}
        args={[0.045, 0.045]}
      >
        <meshBasicMaterial map={useTexture("/logo.png")} transparent />
      </Plane>
      {/* <mesh
          geometry={nodes.Cube004.geometry}
          material={materials.Glass}
          material-opacity={0.2}
        /> */}
      <mesh geometry={nodes.Cube004_1.geometry} material={materials.Frame} />

      <mesh
        geometry={nodes.Cube004_2.geometry}
        // material={materials.Display}
      >
        <meshStandardMaterial
          color="#fd9aa0"
          emissiveIntensity={10}
          emissive={"red"}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh geometry={nodes.Cube010.geometry} material={materials.Aluminum} />
      <mesh
        geometry={nodes.Cube010_1.geometry}
        material={materials["Plastic antena"]}
      />
      <mesh
        geometry={nodes.Cube010_2.geometry}
        material={materials["Plastic USB port"]}
      />
      <mesh
        geometry={nodes.Cube010_3.geometry}
        material={materials["Camera filter"]}
      />
      <mesh geometry={nodes.Cube010_4.geometry} material={materials.LED} />
      <mesh geometry={nodes.LED.geometry} material={materials["Plastic LED"]} />
      <mesh geometry={nodes.LIDAR.geometry} material={materials.Frame} />
      <mesh
        geometry={nodes.Mic_mesh.geometry}
        material={materials["Metal Screw"]}
      />
      <mesh
        geometry={nodes.Screws.geometry}
        material={materials["Metal Screw"]}
      />
      <mesh
        geometry={nodes.Speaker_mesh.geometry}
        material={materials["Metal Screw"]}
      />
      {/* <mesh
        geometry={nodes.Cube003.geometry}
        material={materials["Frosted glass"]}
      />
      <mesh
        geometry={nodes.Cube003_1.geometry}
        material={materials["Tint back glass"]}
      />
      <mesh geometry={nodes.Cube003_2.geometry} material={materials.Glass} /> */}
      <mesh
        geometry={nodes.Back_glass.geometry}
        material={materials["Frosted glass"]}
      />
      <mesh geometry={nodes.Cylinder.geometry} material={materials.Aluminum} />
      <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Frame} />
      <mesh
        geometry={nodes.Cylinder_2.geometry}
        material={materials["Camera filter"]}
      />
      <mesh geometry={nodes.Sphere004.geometry} material={materials.Lens} />
      <mesh
        geometry={nodes.Sphere004_1.geometry}
        material={materials["Sapphire miror"]}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={materials["Sapphire miror"]}
      />
      <mesh
        geometry={nodes.Cylinder002_1.geometry}
        material={materials["Mirror filter"]}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials.Aluminum}
      />
      <mesh
        geometry={nodes.Cylinder001_1.geometry}
        material={materials.Frame}
      />
      <mesh
        geometry={nodes.Cylinder001_2.geometry}
        material={materials["Camera filter"]}
      />
      <mesh geometry={nodes.Lens001.geometry} material={materials.Lens} />
      <mesh
        geometry={nodes.Cylinder010.geometry}
        material={materials["Sapphire miror"]}
      />
      <mesh
        geometry={nodes.Cylinder010_1.geometry}
        material={materials["Mirror filter"]}
      />
      <mesh
        geometry={nodes.Cylinder009.geometry}
        material={materials.Aluminum}
      />
      <mesh
        geometry={nodes.Cylinder009_1.geometry}
        material={materials.Frame}
      />
      <mesh
        geometry={nodes.Cylinder009_2.geometry}
        material={materials["Camera filter"]}
      />
      <mesh geometry={nodes.Lens002.geometry} material={materials.Lens} />
      <mesh
        geometry={nodes.Cylinder011.geometry}
        material={materials["Sapphire miror"]}
      />
      <mesh
        geometry={nodes.Cylinder011_1.geometry}
        material={materials["Mirror filter"]}
      />
      <mesh geometry={nodes.Sphere001.geometry} material={materials.Lens} />
      <mesh
        geometry={nodes.Sphere001_1.geometry}
        material={materials["Camera filter"]}
      />
    </group>
  );
}

useGLTF.preload("/models/phone.glb");
