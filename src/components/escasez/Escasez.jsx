/*
Title: Water Refraction with Reflection
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Escasez(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models-3d/escasezmov.gltf"
  );
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (actions) {
      const animationName = Object.keys(actions)[0]; // Obtiene el nombre de la primera animación
      if (animationName) {
        actions[animationName].play(); // Activa la animación
        console.log(`Animación "${animationName}" activada.`);
      } else {
        console.log("No se encontró ninguna animación.");
      }
    }
  }, [actions]); // Se asegura de que se ejecute cuando `actions` esté disponible
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Landscape_0">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Water_1_1" position={[0, 0.472, 0]} scale={6.693}>
                <mesh
                  name="Object_13"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials.Water_1}
                />
              </group>
              <group name="Water_2_2" position={[0, 0.47, 0]} scale={6.693}>
                <mesh
                  name="Object_15"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_15.geometry}
                  material={materials.Water_2}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models-3d/escasezmov.gltf");

export default Escasez;
