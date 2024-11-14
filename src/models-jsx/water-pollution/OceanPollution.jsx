import { useGLTF } from "@react-three/drei";

const OceanPollution = (props) => {
  const { nodes, materials } = useGLTF('models-3d/Ocean5PlusWithAllTrash5.glb');

  return (
    <group {...props} dispose={null}>
      <group position={[0, 4.388, 16.88]} rotation={[-Math.PI / 2, 0, 0]} scale={0.98}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cups.geometry}
          material={materials.Trash_Kit}
          position={[9.519, 24.104, -2.229]}
          rotation={[-0.807, 0.427, 0.764]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cups2.geometry}
          material={materials.Trash_Kit}
          position={[11.346, 35.812, -0.943]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.diferentsBags.geometry}
          material={materials.Trash_Kit}
          position={[-14.007, 10.815, -3.797]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.diferentsBags2.geometry}
          material={materials.Trash_Kit}
          position={[-12.644, 26.581, -2.854]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.freshCans.geometry}
          material={materials.Trash_Kit}
          position={[-8.919, 4.239, -4.087]}
          rotation={[0, 0, 0.7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.garbaje.geometry}
          material={materials.Trash_Kit}
          position={[6.405, 18.665, -4.44]}
          rotation={[0.042, 0.018, -2.004]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GeneralTrash1.geometry}
          material={materials.Trash_Kit}
          position={[12.743, 2.745, -2.073]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GeneralTrash2.geometry}
          material={materials.Trash_Kit}
          position={[-0.621, 7.242, -4.484]}
          rotation={[0, -0.115, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plasticBottle1.geometry}
          material={materials.Trash_Kit}
          position={[-6.605, 27.066, -4.611]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plasticBottle3.geometry}
          material={materials.Trash_Kit}
          position={[-14.447, 16.679, -2.883]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.windBottle.geometry}
          material={materials.Trash_Kit}
          position={[0, 0, -4.393]}
          rotation={[0, 0, 0.659]}
        />
      </group>
      <mesh
        receiveShadow
        geometry={nodes.Ocean.geometry}
        material={materials.Sea_Bottom}
        position={[0, -0.612, 0]}
      />
      <mesh
        receiveShadow
        geometry={nodes.Coral.geometry}
        material={materials.Urchent_Body}
      />
      <group position={[9.437, 2.732, -2.827]} rotation={[-0.731, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fishes_1.geometry}
          material={materials.Clownfish2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fishes_2.geometry}
          material={materials.Clownfish}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roca1.geometry}
        material={materials.Coral_Rock1}
        position={[0, -0.612, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roca2.geometry}
        material={materials.Coral_Rock1}
        position={[0, -0.612, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock3.geometry}
        material={materials.Coral_Rock2}
        position={[0, -0.612, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock4.geometry}
        material={materials.Coral_Rock2}
        position={[0, -0.612, 0]}
      />
      <group position={[0, -0.612, 0]}>
        <mesh
          geometry={nodes.Water_1.geometry}
          material={materials['Sea_Bottom.001']}
        />
        <mesh
          geometry={nodes.Water_2.geometry}
          material={materials.Water}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RUBBISH_RUBBISH_Material_u1_v1_0.geometry}
        material={materials.RUBBISH_Material_u1_v1}
        position={[10.407, 1.355, -14.302]}
        rotation={[-1.452, -0.234, 0.03]}
        scale={0.418}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RUBBISH_RUBBISH_Material_u1_v1_0001.geometry}
        material={materials.RUBBISH_Material_u1_v1}
        position={[10.407, 1.355, -14.302]}
        rotation={[-1.452, -0.234, 0.03]}
        scale={0.418}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RUBBISH_RUBBISH_Material_u1_v1_0002.geometry}
        material={materials.RUBBISH_Material_u1_v1}
        position={[10.407, 1.355, -14.302]}
        rotation={[-1.452, -0.234, 0.03]}
        scale={0.418}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RUBBISH_RUBBISH_Material_u1_v1_0003.geometry}
        material={materials.RUBBISH_Material_u1_v1}
        position={[10.407, 1.355, -14.302]}
        rotation={[-1.452, -0.234, 0.03]}
        scale={0.418}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RUBBISH_RUBBISH_Material_u1_v1_0004.geometry}
        material={materials.RUBBISH_Material_u1_v1}
        position={[10.407, 1.355, -14.302]}
        rotation={[-1.452, -0.234, 0.03]}
        scale={0.418}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RUBBISH_RUBBISH_Material_u1_v1_0005.geometry}
        material={materials.RUBBISH_Material_u1_v1}
        position={[10.407, 1.355, -14.302]}
        rotation={[-1.452, -0.234, 0.03]}
        scale={0.418}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RUBBISH_RUBBISH_Material_u1_v1_0006.geometry}
        material={materials.RUBBISH_Material_u1_v1}
        position={[10.407, 1.355, -14.302]}
        rotation={[-1.452, -0.234, 0.03]}
        scale={0.418}
      />
    </group>
  )
};

export default OceanPollution;
useGLTF.preload('models-3d/Ocean5PlusWithAllTrash5.glb');