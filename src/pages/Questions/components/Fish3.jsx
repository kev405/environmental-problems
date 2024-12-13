import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Fish1 = ({ initialPosition, ...props }) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('models-3d/fish3.glb')
    const { actions } = useAnimations(animations, group)
    const [position, setPosition] = useState(initialPosition);
    const [rotation, setRotation] = useState([0, 6, 0]); // Estado para la rotación

    useEffect(() => {
        console.log("Animaciones disponibles FISH3: ", animations.map(a => a.name));
    }, [animations]);

    useEffect(() => {
        if (actions) {
            actions["swiming"]?.play();
            actions["swimeing"]?.play();
            actions["eating"]?.play();
        }
    }, [actions]);

    useEffect(() => {
        const radius = 7; // Radio del círculo
        const speed = 0.01; // Velocidad de rotación
        let angle = 0; // Ángulo inicial en radianes

        const interval = setInterval(() => {
            angle += speed; // Incrementa el ángulo para el movimiento circular

            const x = radius * Math.cos(angle);
            const z = radius * Math.sin(angle);
            const y = 3 + Math.sin(angle * 2) * 0.5; // Movimiento vertical opcional

            setPosition([x, y, z]);
        }, 50); // Intervalo en milisegundos (ajústalo para cambiar la fluidez)

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);

    return (
        <group ref={group} position={position} {...props} dispose={null} rotation={rotation}>
            <ambientLight intensity={0.5} />
            <directionalLight />
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.521}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="_21">
                                <group name="body_20" position={[0, 0.5, 0.125]}>
                                    <group name="cube_0" position={[0, -0.188, -0.313]}>
                                        <mesh
                                            name="Object_6"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_6.geometry}
                                            material={materials.material_0}
                                        />
                                    </group>
                                    <group name="cube_1" position={[0, -0.313, -0.25]}>
                                        <mesh
                                            name="Object_8"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_8.geometry}
                                            material={materials.material_0}
                                        />
                                    </group>
                                    <group name="cube_2" position={[0, 0.563, -0.125]}>
                                        <mesh
                                            name="Object_10"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_10.geometry}
                                            material={materials.material_0}
                                        />
                                    </group>
                                    <group name="head_10" position={[0, 0.063, -0.625]}>
                                        <group name="cube_3" position={[0, -0.125, -0.063]}>
                                            <mesh
                                                name="Object_13"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_13.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_4" position={[-0.25, 0.188, -0.063]} rotation={[0, 0, 1.134]}>
                                            <mesh
                                                name="Object_15"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_15.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_5" position={[0.25, 0.188, -0.063]} rotation={[0, 0, -1.134]}>
                                            <mesh
                                                name="Object_17"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_17.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group
                                            name="cube_6"
                                            position={[-0.438, -0.25, -0.313]}
                                            rotation={[0, 0, 1.222]}>
                                            <mesh
                                                name="Object_19"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_19.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group
                                            name="cube_7"
                                            position={[0.438, -0.25, -0.313]}
                                            rotation={[0, 0, -1.222]}>
                                            <mesh
                                                name="Object_21"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_21.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="jaw_9" position={[0, -0.25, 0]}>
                                            <group name="cube_8" position={[0, -0.125, -0.063]}>
                                                <mesh
                                                    name="Object_24"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_24.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                        </group>
                                    </group>
                                    <group name="tall_13" position={[0, 0.125, 0.563]}>
                                        <group name="cube_11" position={[0, 0.063, 0.188]}>
                                            <mesh
                                                name="Object_27"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_27.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_12" position={[0, -0.25, 0.438]}>
                                            <mesh
                                                name="Object_29"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_29.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                    </group>
                                    <group name="left_fine_16" position={[-0.375, -0.25, -0.375]}>
                                        <group name="cube_14" position={[0.063, 0, 0]}>
                                            <mesh
                                                name="Object_32"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_32.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_15" position={[0.063, 0, 0]}>
                                            <mesh
                                                name="Object_34"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_34.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                    </group>
                                    <group name="right_fine_19" position={[0.375, -0.25, -0.375]}>
                                        <group name="cube_17" position={[-0.063, 0, 0]}>
                                            <mesh
                                                name="Object_37"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_37.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_18" position={[0.25, -0.063, 0]}>
                                            <mesh
                                                name="Object_39"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_39.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

export default Fish1;

useGLTF.preload('models-3d/fish3.glb')