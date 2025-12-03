import { Cloud, Clouds } from "@react-three/drei";
import { MeshBasicMaterial } from "three";

const Mise = () => {
  return (
    <Clouds material={MeshBasicMaterial}>
      <Cloud
        speed={0.1}
        position={[8, 3, -8]}
        seed={1}
        scale={0.3}
        opacity={0.2}
        volume={12}
        color="red"
        fade={200}
        bounds={[20, 2, 2]}
      />
      <Cloud
        speed={0.1}
        position={[0, 1.5, -8]}
        seed={1}
        scale={0.3}
        opacity={0.2}
        volume={12}
        color="red"
        fade={200}
        bounds={[20, 2, 2]}
      />
      <Cloud
        position={[-6, 1.5, -6]}
        seed={2}
        scale={0.3}
        opacity={0.2}
        volume={12}
        color="red"
        fade={200}
        bounds={[20, 2, 2]}
      />
      <Cloud
        position={[0, 2, 6]}
        seed={3}
        scale={0.3}
        opacity={0.2}
        volume={12}
        color="red"
        fade={200}
        bounds={[20, 2, 2]}
      />
      <Cloud
        speed={0.1}
        position={[-6, 2, 6]}
        seed={3}
        scale={0.3}
        opacity={0.2}
        volume={12}
        color="red"
        fade={200}
        bounds={[20, 2, 2]}
      />
      <Cloud
        speed={0.1}
        position={[-12, 2, 6]}
        seed={3}
        scale={0.3}
        opacity={0.2}
        volume={12}
        color="red"
        fade={200}
        bounds={[20, 2, 2]}
      />
      <Cloud
        speed={0.1}
        position={[6, 2, 0]}
        seed={1}
        scale={0.3}
        opacity={0.2}
        volume={12}
        color="red"
        fade={200}
        bounds={[2, 2, 20]}
      />
      <Cloud
        speed={0.1}
        position={[-6, 2, 0]}
        seed={1}
        scale={0.3}
        opacity={0.2}
        volume={12}
        color="red"
        fade={200}
        bounds={[2, 2, 20]}
      />
    </Clouds>
  );
};

export default Mise;
