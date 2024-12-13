import { useGLTF } from "@react-three/drei";

const Ocean = (props) => {
  const { nodes, materials } = useGLTF('models-3d/Ocean.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ocean_1.geometry}
        material={materials.Urchent_Body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ocean_2.geometry}
        material={materials.Blue_Feelers}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ocean_3.geometry}
        material={materials.Red_Feelers}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ocean_4.geometry}
        material={materials.Purple_Feelers}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ocean_5.geometry}
        material={materials.Middel_Bubbles}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ocean_6.geometry}
        material={materials.Sea_Bottom}
      />
      <mesh castShadow receiveShadow geometry={nodes.Ocean_7.geometry} material={materials.Water} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ocean_8.geometry}
        material={materials.Clownfish2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ocean_9.geometry}
        material={materials.Clownfish}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ocean_10.geometry}
        material={materials.wire_174186203}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ocean_11.geometry}
        material={materials.Coral_Rock1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ocean_12.geometry}
        material={materials.Coral_Rock2}
      />
    </group>
  )
};

export default Ocean;
useGLTF.preload('models-3d/Ocean.glb');