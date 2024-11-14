import React from 'react'
import { useGLTF } from '@react-three/drei'

const MenuPollution = (props) => {
  const { nodes, materials } = useGLTF('models-3d/menuPollution2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base1_m_colored_woods_0.geometry}
        material={materials.m_colored_woods}
        position={[0.292, -0.023, -2.1]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base1_m_floorWood1_0.geometry}
        material={materials.m_floorWood1}
        position={[0.292, -0.023, -2.1]}
        scale={0.045}
      />
    </group>
  )
}

useGLTF.preload('models-3d/menuPollution2.glb')
export default MenuPollution;
