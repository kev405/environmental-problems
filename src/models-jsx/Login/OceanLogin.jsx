import { useGLTF } from "@react-three/drei";

const OceanLogin = (props) => {
  const { nodes, materials } = useGLTF('models-3d/Ocean.glb');

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Ocean">
          <mesh
            name="Ocean_1"
            geometry={nodes.Ocean_1.geometry}
            material={materials.Urchent_Body}
          />
          <mesh
            name="Ocean_2"
            geometry={nodes.Ocean_2.geometry}
            material={materials.Blue_Feelers}
          />
          <mesh name="Ocean_3" geometry={nodes.Ocean_3.geometry} material={materials.Red_Feelers} />
          <mesh
            name="Ocean_4"
            geometry={nodes.Ocean_4.geometry}
            material={materials.Purple_Feelers}
          />
          <mesh
            name="Ocean_5"
            geometry={nodes.Ocean_5.geometry}
            material={materials.Middel_Bubbles}
          />
          <mesh name="Ocean_6" geometry={nodes.Ocean_6.geometry} material={materials.Sea_Bottom} />
          <mesh name="Ocean_7" geometry={nodes.Ocean_7.geometry} material={materials.Water} />
          <mesh name="Ocean_8" geometry={nodes.Ocean_8.geometry} material={materials.Clownfish2} />
          <mesh name="Ocean_9" geometry={nodes.Ocean_9.geometry} material={materials.Clownfish} />
          <mesh
            name="Ocean_10"
            geometry={nodes.Ocean_10.geometry}
            material={materials.wire_174186203}
          />
          <mesh
            name="Ocean_11"
            geometry={nodes.Ocean_11.geometry}
            material={materials.Coral_Rock1}
          />
          <mesh
            name="Ocean_12"
            geometry={nodes.Ocean_12.geometry}
            material={materials.Coral_Rock2}
          />
        </group>
      </group>
    </group>
  );
};

export default OceanLogin;
useGLTF.preload('models-3d/Ocean.glb');