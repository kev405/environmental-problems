import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'


const Turttle2 = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models-3d/turttle7.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions["body_rigAction"].play();
    return () => actions["body_rigAction"].stop();
  }, [actions])

  console.log(actions)

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="body_rig">
              <skinnedMesh
                name="body_multi_1subD_0"
                geometry={nodes.body_multi_1subD_0.geometry}
                material={materials.body_mat}
                skeleton={nodes.body_multi_1subD_0.skeleton}
              />
              <primitive object={nodes.ulna_L_body_rig} />
              <primitive object={nodes.ulna_R_body_rig} />
              <primitive object={nodes.shin_L_body_rig} />
              <primitive object={nodes.shin_R_body_rig} />
              <primitive object={nodes.neutral_bone} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Turttle2;

useGLTF.preload('models-3d/turttle7.glb')
