import { MeshReflectorMaterial } from "@react-three/drei";
import { MeshPhongMaterial } from "three";
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";

const Ground = () => {
  const [colorMap, roughness, normal] = useLoader(TextureLoader, [
    "/textures/stars.jpg",
    "/textures/stars.jpg",
    "/textures/stars.jpg",
  ]);
  useEffect(() => {
    [normal, roughness].forEach((t) => {
      t.wrapS = RepeatWrapping;
      t.wrapT = RepeatWrapping;
      t.repeat.set(5, 5);
    });
    normal.encoding = LinearEncoding;
  }, [normal, roughness]);
  return (
    <mesh castShadow receiveShadow position={[0, 0, -8]}>
      <planeGeometry args={[25, 25]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normal}
        roughnessMap={roughness}
      />
    </mesh>
  );
};
export default Ground;
