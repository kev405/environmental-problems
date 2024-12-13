import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Fish4 = ({ initialPosition, ...props }) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('models-3d/fish4.glb')
    const { actions } = useAnimations(animations, group)
    const [position, setPosition] = useState(initialPosition);
    const [rotation, setRotation] = useState([0, 5, 0]); // Estado para la rotación

    useEffect(() => {
        console.log("Animaciones disponibles FISH4:", animations.map(a => a.name));
    }, [animations]);

    useEffect(() => {
        if (actions) {
            actions["idel"]?.play();
            actions["swiming_fast"]?.play();
            actions["swiming"]?.play();
        }
    }, [actions]);

    useEffect(() => {
        const sideLength = 20; // Longitud de los lados del cuadrado
        const speed = 0.10; // Velocidad de movimiento
        let direction = 0; // Dirección actual (0: derecha, 1: abajo, 2: izquierda, 3: arriba)
        let traveled = 0; // Distancia recorrida en la dirección actual
        let x = -sideLength / 2, z = -sideLength / 2; // Posición inicial
        let rotationY = 0;

        const interval = setInterval(() => {
            if (traveled >= sideLength) {
                // Cambiar dirección cuando se completa un lado del cuadrado
                direction = (direction + 1) % 4;
                traveled = 0;

                // Rotar 90 grados a la derecha
                rotationY = Math.PI / 2 * direction;
                setRotation([0, rotationY, 0]); // Actualiza la rotación en el estado
            }

            // Mover en la dirección actual
            switch (direction) {
                case 0: x += speed; break; // Derecha
                case 1: z += speed; break; // Abajo
                case 2: x -= speed; break; // Izquierda
                case 3: z -= speed; break; // Arriba
                default: break;
            }

            // Actualizar posición y distancia recorrida
            setPosition([x, 5, z]);
            traveled += speed;
        }, 50); // Intervalo de actualización (ms)

        return () => clearInterval(interval); // Limpieza del intervalo al desmontar el componente
    }, []);

    return (
        <group ref={group} position={position} {...props} dispose={null} rotation={rotation}>
            <ambientLight intensity={0.5} />
            <directionalLight />
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.502}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="_18">
                                <group name="body_17" position={[0, 0.281, 0.188]}>
                                    <group name="head_3" position={[0, -0.031, -0.688]}>
                                        <group name="cube_0" position={[-0.188, -0.25, 0.063]}>
                                            <mesh
                                                name="Object_7"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_7.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_1" position={[0, -0.25, -0.25]}>
                                            <mesh
                                                name="Object_9"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_9.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_2" position={[0.188, -0.25, 0.063]}>
                                            <mesh
                                                name="Object_11"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_11.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                    </group>
                                    <group name="body_tall_10">
                                        <group name="tall_7" position={[0, 0.031, 1.25]}>
                                            <group name="cube_4" position={[0, -0.313, 0.563]}>
                                                <mesh
                                                    name="Object_15"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_15.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_5" position={[0, -0.313, 2.5]}>
                                                <mesh
                                                    name="Object_17"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_17.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_6" position={[0, -0.313, 1.625]}>
                                                <mesh
                                                    name="Object_19"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_19.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                        </group>
                                        <group name="cube_8" position={[0, -0.281, 0.688]}>
                                            <mesh
                                                name="Object_21"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_21.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_9" position={[0, -0.281, 1.063]}>
                                            <mesh
                                                name="Object_23"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_23.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                    </group>
                                    <group name="right_fin_12" position={[0.25, -0.219, -0.438]}>
                                        <group name="cube_11" position={[0.25, 0, 0.25]}>
                                            <mesh
                                                name="Object_26"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_26.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                    </group>
                                    <group name="left_fin_14" position={[-0.25, -0.219, -0.438]}>
                                        <group name="cube_13" position={[-0.25, 0, 0.25]}>
                                            <mesh
                                                name="Object_29"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_29.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                    </group>
                                    <group name="cube_15" position={[0, -0.281, -0.125]}>
                                        <mesh
                                            name="Object_31"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_31.geometry}
                                            material={materials.material_0}
                                        />
                                    </group>
                                    <group name="cube_16" position={[0, 0.219, -0.125]}>
                                        <mesh
                                            name="Object_33"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_33.geometry}
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
    )
}

export default Fish4;

useGLTF.preload('models-3d/fish4.glb')