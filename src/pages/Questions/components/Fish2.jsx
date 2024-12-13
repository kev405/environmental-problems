import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Fish1 = ({ initialPosition, ...props }) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('models-3d/fish2.glb')
    const { actions } = useAnimations(animations, group)
    const [position, setPosition] = useState(initialPosition);
    const [rotation, setRotation] = useState([0, 5, 0]); // Estado para la rotación

    useEffect(() => {
        console.log("Animaciones disponibles:", animations.map(a => a.name));
    }, [animations]);

    useEffect(() => {
        if (actions) {
            actions["idel"]?.play();
            actions["walk"]?.play();
            actions["attack"]?.play();
            actions["eating"]?.play();
        }
    }, [actions]);

    useEffect(() => {
        const sideLength = 20; // Longitud de los lados del cuadrado
        const speed = 0.09; // Velocidad de movimiento
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
            setPosition([x, 0.5, z]);
            traveled += speed;
        }, 50); // Intervalo de actualización (ms)
    
        return () => clearInterval(interval); // Limpieza del intervalo al desmontar el componente
    }, []);

    return (
        <group ref={group} position={position} {...props} dispose={null} rotation={rotation}>
            <ambientLight intensity={0.5} />
            <directionalLight />
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.202}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="_31">
                                <group name="body_22" position={[0, 0.563, 0]}>
                                    <group name="cube_0" position={[0, -0.25, -0.063]}>
                                        <mesh
                                            name="Object_6"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_6.geometry}
                                            material={materials.material_0}
                                        />
                                    </group>
                                    <group name="cube_1" position={[0.063, 0.375, 0]}>
                                        <mesh
                                            name="Object_8"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_8.geometry}
                                            material={materials.material_0}
                                        />
                                    </group>
                                    <group name="cube_2" position={[0.563, 0.375, 0]}>
                                        <mesh
                                            name="Object_10"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_10.geometry}
                                            material={materials.material_0}
                                        />
                                    </group>
                                    <group name="cube_3" position={[-0.313, 0.375, 0]}>
                                        <mesh
                                            name="Object_12"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_12.geometry}
                                            material={materials.material_0}
                                        />
                                    </group>
                                    <group name="cube_4" position={[0.313, 0.375, 0]}>
                                        <mesh
                                            name="Object_14"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_14.geometry}
                                            material={materials.material_0}
                                        />
                                    </group>
                                    <group name="cube_5" position={[-0.563, 0.375, 0]}>
                                        <mesh
                                            name="Object_16"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_16.geometry}
                                            material={materials.material_0}
                                        />
                                    </group>
                                    <group name="haed_12" position={[0, -0.063, -0.813]}>
                                        <group name="cube_6" position={[0, -0.125, -0.063]}>
                                            <mesh
                                                name="Object_19"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_19.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_7" position={[0, 0.125, -0.375]}>
                                            <mesh
                                                name="Object_21"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_21.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_8" position={[-0.438, 0.188, -0.25]}>
                                            <mesh
                                                name="Object_23"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_23.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_9" position={[0.438, 0.188, -0.25]}>
                                            <mesh
                                                name="Object_25"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_25.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="bottum_jaw_11" position={[0, -0.063, -0.313]}>
                                            <group name="cube_10" position={[0, -0.125, -0.063]}>
                                                <mesh
                                                    name="Object_28"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_28.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                        </group>
                                    </group>
                                    <group name="front_tall_21" position={[0, -0.063, 0.813]}>
                                        <group name="cube_13">
                                            <mesh
                                                name="Object_31"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_31.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_14" position={[-0.063, 0.313, 0.125]}>
                                            <mesh
                                                name="Object_33"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_33.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_15" position={[0.063, 0.313, 0.125]}>
                                            <mesh
                                                name="Object_35"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_35.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="back_tall_20" position={[0, -0.063, 0.875]}>
                                            <group name="cube_18" position={[0, 0, 0.063]}>
                                                <mesh
                                                    name="Object_38"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_38.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_19" position={[0, 0, 1.125]}>
                                                <mesh
                                                    name="Object_40"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_40.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                        </group>
                                    </group>
                                </group>
                                <group name="back_left_leg_24" position={[-0.438, 0.563, 0.438]}>
                                    <group name="cube_23" position={[-0.188, 0, 0]}>
                                        <mesh
                                            name="Object_43"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_43.geometry}
                                            material={materials.material_0}
                                        />
                                    </group>
                                </group>
                                <group name="frunt_right_leg_26" position={[0.5, 0.438, -0.438]}>
                                    <group name="cube_25" position={[0.063, -0.063, 0]}>
                                        <mesh
                                            name="Object_46"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_46.geometry}
                                            material={materials.material_0}
                                        />
                                    </group>
                                </group>
                                <group name="frunt_left_leg_28" position={[-0.5, 0.438, -0.438]}>
                                    <group name="cube_27" position={[-0.063, -0.063, 0]}>
                                        <mesh
                                            name="Object_49"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_49.geometry}
                                            material={materials.material_0}
                                        />
                                    </group>
                                </group>
                                <group name="back_right_leg_30" position={[0.438, 0.563, 0.438]}>
                                    <group name="cube_29" position={[0.188, 0, 0]}>
                                        <mesh
                                            name="Object_52"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Object_52.geometry}
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

export default Fish1;

useGLTF.preload('models-3d/fish2.glb')