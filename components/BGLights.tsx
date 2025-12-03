import { Box, GradientTexture } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

const positions = [
  [-4, 0, -2],
  [-3, -1, 2],
  [-2.5, 1, 2],
  [-3.5, 0, 1],
  [-5, 0, -2],
  [-5.6, -1, 2],
  [-4.2, 1, 2],
  [-6, 0, 1],
  [-6, 1, 1],
  [-6, 2, 1],
  [1, 0, 2],
  [1, 1, 2],
  [1, 2, 2],
  [2, 0, 1],
  [2, -1, 1],
  [2, 0, 3],
  [4, 0, 4],
  [-1, 0.6, 1.5],
  [-1, 0, -2],
  [2, 0, -2],
  [4, 0, -2],
  [4, -1, 0],
  [3, -1, 0],
  [4, 0, 0],
  [2, 0.6, 0],
  [1, 0, -1],
  [0.5, 0, -8],
  [-0.5, 0, -6],
  [0, -1, -4],
];

type Props = {
  boxMaterialsRef: React.RefObject<MeshStandardMaterial[]>;
};

const BGLights: React.FC<Props> = ({ boxMaterialsRef }) => {
  return (
    <group>
      {positions.map((elem, index) => {
        return (
          <Box
            key={index}
            position={[elem[0], elem[1], elem[2]]}
            args={[0.01, 1, 0.01]}
          >
            <meshStandardMaterial
              ref={(mat) => {
                if (mat) boxMaterialsRef.current[index] = mat;
              }}
              // color="red"
              emissive="red"
              emissiveIntensity={150}
              transparent
            >
              <GradientTexture
                stops={[0, 1]}
                colors={["red", "white"]}
                size={1024}
              />
            </meshStandardMaterial>
          </Box>
        );
      })}
    </group>
  );
};

export default BGLights;
