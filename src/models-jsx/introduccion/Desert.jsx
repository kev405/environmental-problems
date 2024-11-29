import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Desert = (props) => {
  const { nodes, materials } = useGLTF('models-3d/Desert.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" scale={15.183}>
          <group name="54b6266b76fd4cf59c80bbf8ee48a5d3fbx">
            <group name="RootNode">
              <group name="BisonSkull_GEO_LP">
                <mesh
                  name="BisonSkull_GEO_LP_Skull_Mat_0"
                  geometry={nodes.BisonSkull_GEO_LP_Skull_Mat_0.geometry}
                  material={materials.Skull_Mat}
                />
              </group>
              <group name="polySurface1">
                <mesh
                  name="polySurface1_StoneMat_0"
                  geometry={nodes.polySurface1_StoneMat_0.geometry}
                  material={materials.StoneMat}
                />
              </group>
              <group name="polySurface2">
                <mesh
                  name="polySurface2_SandMat_0"
                  geometry={nodes.polySurface2_SandMat_0.geometry}
                  material={materials.SandMat}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models-3d/Desert.glb')
export default Desert;
