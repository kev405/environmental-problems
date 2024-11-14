import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Turttle = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models-3d/turttle4.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions["Swim Cycle"].play();
    return () => actions["Swim Cycle"].stop();
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null} castShadow receiveShadow>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={14.183}>
          <group name="Root">
            <group name="Hawksbillarmature">
              <group name="Hawksbillmesh" position={[-0.011, 0.046, 0.001]} />
              <skinnedMesh
                name="Hawksbillmesh_0"
                geometry={nodes.Hawksbillmesh_0.geometry}
                material={materials['hawksbill.body']}
                skeleton={nodes.Hawksbillmesh_0.skeleton}
                castShadow
                receiveShadow
              />
              <skinnedMesh
                name="Hawksbillmesh_1"
                geometry={nodes.Hawksbillmesh_1.geometry}
                material={materials.outer}
                skeleton={nodes.Hawksbillmesh_1.skeleton}
                castShadow
                receiveShadow
              />
              <skinnedMesh
                name="Hawksbillmesh_2"
                geometry={nodes.Hawksbillmesh_2.geometry}
                material={materials['hawksbill.eyes']}
                skeleton={nodes.Hawksbillmesh_2.skeleton}
                castShadow
                receiveShadow
              />
              <primitive object={nodes.Hawksbillarmature_rootJoint} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Turttle;

useGLTF.preload('models-3d/turttle4.glb')
