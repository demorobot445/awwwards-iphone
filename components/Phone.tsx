import * as THREE from "three";
import React from "react";
import { Plane, useGLTF, useMask, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube010: THREE.Mesh;
    Cube010_1: THREE.Mesh;
    Cube010_2: THREE.Mesh;
    Cube010_3: THREE.Mesh;
    Cube010_4: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube003_1: THREE.Mesh;
    Cube003_2: THREE.Mesh;
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
    ["Tint back glass"]: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    Frame: THREE.MeshStandardMaterial;
    Lens: THREE.MeshStandardMaterial;
    ["Sapphire miror"]: THREE.MeshStandardMaterial;
    ["Mirror filter"]: THREE.MeshStandardMaterial;
    ["Plastic LED"]: THREE.MeshStandardMaterial;
    ["Metal Screw"]: THREE.MeshStandardMaterial;
    Display: THREE.MeshStandardMaterial;
  };
};

export function Phone({ stencilIndex }: { stencilIndex: number }) {
  const { nodes, materials } = useGLTF(
    "/models/phone.glb"
  ) as unknown as GLTFResult;

  const stencil = useMask(stencilIndex);

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
      {/* Mark the display for bloom */}

      <mesh
        geometry={nodes.Cube004_2.geometry}
        material={materials.Display}
        material-emissive={"red"}
        material-emissiveIntensity={10}
        material-color={"red"}
      />

      {/* Bloom only applies to selected meshes */}

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
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials["Frosted glass"]}
      />
      <mesh
        geometry={nodes.Cube003_1.geometry}
        material={materials["Tint back glass"]}
      />
      <mesh geometry={nodes.Cube003_2.geometry} material={materials.Glass} />
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

// <mesh geometry={nodes.Cube010.geometry}>
//   <meshBasicMaterial
//     map={materials.Aluminum.map}
//     color={materials.Aluminum.color}
//     side={materials.Aluminum.side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cube010_1.geometry}>
//   <meshBasicMaterial
//     map={materials["Plastic antena"].map}
//     color={materials["Plastic antena"].color}
//     side={materials["Plastic antena"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cube010_2.geometry}>
//   <meshBasicMaterial
//     map={materials["Plastic USB port"].map}
//     color={materials["Plastic USB port"].color}
//     side={materials["Plastic USB port"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cube010_3.geometry}>
//   <meshBasicMaterial
//     map={materials["Camera filter"].map}
//     color={materials["Camera filter"].color}
//     side={materials["Camera filter"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cube010_4.geometry}>
//   <meshBasicMaterial
//     map={materials.LED.map}
//     color={materials.LED.color}
//     side={materials.LED.side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.LED.geometry}>
//   <meshBasicMaterial
//     map={materials["Plastic LED"].map}
//     color={materials["Plastic LED"].color}
//     side={materials["Plastic LED"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.LIDAR.geometry}>
//   <meshBasicMaterial
//     map={materials.Frame.map}
//     color={materials.Frame.color}
//     side={materials.Frame.side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Mic_mesh.geometry}>
//   <meshBasicMaterial
//     map={materials["Metal Screw"].map}
//     color={materials["Metal Screw"].color}
//     side={materials["Metal Screw"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Screws.geometry}>
//   <meshBasicMaterial
//     map={materials["Metal Screw"].map}
//     color={materials["Metal Screw"].color}
//     side={materials["Metal Screw"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Speaker_mesh.geometry}>
//   <meshBasicMaterial
//     map={materials["Metal Screw"].map}
//     color={materials["Metal Screw"].color}
//     side={materials["Metal Screw"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cube003.geometry}>
//   <meshBasicMaterial
//     map={materials["Frosted glass"].map}
//     color={materials["Frosted glass"].color}
//     side={materials["Frosted glass"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cube003_1.geometry}>
//   <meshBasicMaterial
//     map={materials["Tint back glass"].map}
//     color={materials["Tint back glass"].color}
//     side={materials["Tint back glass"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cube003_2.geometry}>
//   <meshBasicMaterial
//     map={materials.Glass.map}
//     color={materials.Glass.color}
//     side={materials.Glass.side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cylinder.geometry}>
//   <meshBasicMaterial
//     map={materials.Aluminum.map}
//     color={materials.Aluminum.color}
//     side={materials.Aluminum.side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cylinder_1.geometry}>
//   <meshBasicMaterial
//     map={materials.Frame.map}
//     color={materials.Frame.color}
//     side={materials.Frame.side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cylinder_2.geometry}>
//   <meshBasicMaterial
//     map={materials["Camera filter"].map}
//     color={materials["Camera filter"].color}
//     side={materials["Camera filter"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Sphere004.geometry}>
//   <meshBasicMaterial
//     map={materials.Lens.map}
//     color={materials.Lens.color}
//     side={materials.Lens.side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Sphere004_1.geometry}>
//   <meshBasicMaterial
//     map={materials["Sapphire miror"].map}
//     color={materials["Sapphire miror"].color}
//     side={materials["Sapphire miror"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cylinder002.geometry}>
//   <meshBasicMaterial
//     map={materials["Sapphire miror"].map}
//     color={materials["Sapphire miror"].color}
//     side={materials["Sapphire miror"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cylinder002_1.geometry}>
//   <meshBasicMaterial
//     map={materials["Mirror filter"].map}
//     color={materials["Mirror filter"].color}
//     side={materials["Mirror filter"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cylinder001.geometry}>
//   <meshBasicMaterial
//     map={materials.Aluminum.map}
//     color={materials.Aluminum.color}
//     side={materials.Aluminum.side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cylinder001_1.geometry}>
//   <meshBasicMaterial
//     map={materials.Frame.map}
//     color={materials.Frame.color}
//     side={materials.Frame.side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cylinder001_2.geometry}>
//   <meshBasicMaterial
//     map={materials["Camera filter"].map}
//     color={materials["Camera filter"].color}
//     side={materials["Camera filter"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Lens001.geometry}>
//   <meshBasicMaterial
//     map={materials.Lens.map}
//     color={materials.Lens.color}
//     side={materials.Lens.side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cylinder010.geometry}>
//   <meshBasicMaterial
//     map={materials["Sapphire miror"].map}
//     color={materials["Sapphire miror"].color}
//     side={materials["Sapphire miror"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cylinder010_1.geometry}>
//   <meshBasicMaterial
//     map={materials["Mirror filter"].map}
//     color={materials["Mirror filter"].color}
//     side={materials["Mirror filter"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cylinder009.geometry}>
//   <meshBasicMaterial
//     map={materials.Aluminum.map}
//     color={materials.Aluminum.color}
//     side={materials.Aluminum.side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cylinder009_1.geometry}>
//   <meshBasicMaterial
//     map={materials.Frame.map}
//     color={materials.Frame.color}
//     side={materials.Frame.side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cylinder009_2.geometry}>
//   <meshBasicMaterial
//     map={materials["Camera filter"].map}
//     color={materials["Camera filter"].color}
//     side={materials["Camera filter"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Lens002.geometry}>
//   <meshBasicMaterial
//     map={materials.Lens.map}
//     color={materials.Lens.color}
//     side={materials.Lens.side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cylinder011.geometry}>
//   <meshBasicMaterial
//     map={materials["Sapphire miror"].map}
//     color={materials["Sapphire miror"].color}
//     side={materials["Sapphire miror"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cylinder011_1.geometry}>
//   <meshBasicMaterial
//     map={materials["Mirror filter"].map}
//     color={materials["Mirror filter"].color}
//     side={materials["Mirror filter"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Sphere001.geometry}>
//   <meshBasicMaterial
//     map={materials.Lens.map}
//     color={materials.Lens.color}
//     side={materials.Lens.side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Sphere001_1.geometry}>
//   <meshBasicMaterial
//     map={materials["Camera filter"].map}
//     color={materials["Camera filter"].color}
//     side={materials["Camera filter"].side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cube004.geometry}>
//   <meshBasicMaterial
//     map={materials.Glass.map}
//     color={materials.Glass.color}
//     side={materials.Glass.side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cube004_1.geometry}>
//   <meshBasicMaterial
//     map={materials.Frame.map}
//     color={materials.Frame.color}
//     side={materials.Frame.side}
//     {...stencil}
//   />
// </mesh>
// <mesh geometry={nodes.Cube004_2.geometry}>
//   <meshBasicMaterial
//     map={materials.Display.map}
//     color={materials.Display.color}
//     side={materials.Display.side}
//     {...stencil}
//   />
// </mesh>
