    import React, { useEffect, useRef, useState } from 'react';
    import { useGLTF, useAnimations } from '@react-three/drei';

    const Fish1 = ({ initialPosition, ...props }) => {
        const group = useRef()
        const { nodes, materials, animations } = useGLTF('models-3d/fish1.glb')
        const { actions } = useAnimations(animations, group)
        const [position, setPosition] = useState(initialPosition);

        useEffect(() => {
            console.log("Animaciones disponibles FISH1: ", animations.map(a => a.name));
        }, [animations]);

        useEffect(() => {
            if (actions) {
                actions["swiming"]?.play();
                actions["charging"]?.play();
                actions["bit"]?.play();
                actions["idle_with_info"]?.play();
            }
        }, [actions]);

        useEffect(() => {
            const radius = 10; // Radio del círculo
            const speed = 0.001; // Velocidad de rotación
            let angle = 0; // Ángulo inicial en radianes

            const interval = setInterval(() => {
                angle += speed; // Incrementa el ángulo para el movimiento circular

                const x = radius * Math.cos(angle);
                const z = radius * Math.sin(angle);
                const y = 3 + Math.sin(angle * 2) * 2; // Ajusta el factor de multiplicación para cambiar la amplitud

                setPosition([x, y, z]);
            }, 50); // Intervalo en milisegundos (ajústalo para cambiar la fluidez)

            return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
        }, []);

        return (
            <group ref={group} position={position} {...props} dispose={null}>
                <ambientLight intensity={0.5} />
                <directionalLight />
                <group name="Sketchfab_Scene">
                    <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.672}>
                        <group name="root">
                            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                                <group name="_154">
                                    <group name="body_153" position={[0, 1.125, 0]}>
                                        <group name="cube_0" position={[0, -1.125, 0]}>
                                            <mesh
                                                name="Object_6"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_6.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_1" position={[0, 0.5, -0.438]} rotation={[-Math.PI / 9, 0, 0]}>
                                            <mesh
                                                name="Object_8"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_8.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_2" position={[0.563, 1, 0]}>
                                            <mesh
                                                name="Object_10"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_10.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_3" position={[-0.063, 1, -2.125]}>
                                            <mesh
                                                name="Object_12"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_12.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_4" position={[0.063, 1, 0]}>
                                            <mesh
                                                name="Object_14"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_14.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_5" position={[-0.563, 1, -2.125]}>
                                            <mesh
                                                name="Object_16"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_16.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_6" position={[0.563, 1, -0.563]}>
                                            <mesh
                                                name="Object_18"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_18.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_7" position={[0.063, 1, -0.563]}>
                                            <mesh
                                                name="Object_20"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_20.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_8" position={[-0.563, 1, -1.125]}>
                                            <mesh
                                                name="Object_22"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_22.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_9" position={[-0.063, 1, -1.125]}>
                                            <mesh
                                                name="Object_24"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_24.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_10" position={[0.063, 1, -1.125]}>
                                            <mesh
                                                name="Object_26"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_26.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_11" position={[0.563, 1, -1.125]}>
                                            <mesh
                                                name="Object_28"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_28.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_12" position={[0.563, 1, -1.688]}>
                                            <mesh
                                                name="Object_30"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_30.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_13" position={[0.063, 1, -1.688]}>
                                            <mesh
                                                name="Object_32"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_32.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_14" position={[-0.063, 1, 0]}>
                                            <mesh
                                                name="Object_34"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_34.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_15" position={[-0.563, 1, 0]}>
                                            <mesh
                                                name="Object_36"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_36.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_16" position={[-0.563, 1, -0.563]}>
                                            <mesh
                                                name="Object_38"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_38.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_17" position={[-0.063, 1, -0.563]}>
                                            <mesh
                                                name="Object_40"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_40.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_18" position={[0.063, 1, -2.125]}>
                                            <mesh
                                                name="Object_42"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_42.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_19" position={[0.563, 1, -2.125]}>
                                            <mesh
                                                name="Object_44"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_44.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_20" position={[-0.063, 1, -1.688]}>
                                            <mesh
                                                name="Object_46"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_46.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_21" position={[-0.563, 1, -1.688]}>
                                            <mesh
                                                name="Object_48"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_48.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_22" position={[-0.25, 0.813, 0]}>
                                            <mesh
                                                name="Object_50"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_50.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_23" position={[-0.25, 0.375, 0]}>
                                            <mesh
                                                name="Object_52"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_52.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_24" position={[-0.25, -0.188, 0]}>
                                            <mesh
                                                name="Object_54"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_54.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_25" position={[-0.25, -0.688, 0]}>
                                            <mesh
                                                name="Object_56"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_56.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_26" position={[0.25, -0.688, -2.125]}>
                                            <mesh
                                                name="Object_58"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_58.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_27" position={[0.25, 0.375, -2.125]}>
                                            <mesh
                                                name="Object_60"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_60.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_28" position={[0.25, 0.813, -2.125]}>
                                            <mesh
                                                name="Object_62"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_62.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_29" position={[-0.25, 0.813, -0.563]}>
                                            <mesh
                                                name="Object_64"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_64.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_30" position={[-0.25, 0.375, -0.563]}>
                                            <mesh
                                                name="Object_66"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_66.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_31" position={[-0.25, -0.125, -0.563]}>
                                            <mesh
                                                name="Object_68"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_68.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_32" position={[-0.25, -0.563, -0.563]}>
                                            <mesh
                                                name="Object_70"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_70.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_33" position={[0.25, 0.813, 0]}>
                                            <mesh
                                                name="Object_72"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_72.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_34" position={[0.25, 0.375, 0]}>
                                            <mesh
                                                name="Object_74"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_74.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_35" position={[0.25, -0.188, 0]}>
                                            <mesh
                                                name="Object_76"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_76.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_36" position={[0.25, -0.688, 0]}>
                                            <mesh
                                                name="Object_78"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_78.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_37" position={[-0.25, 0.813, -1.125]}>
                                            <mesh
                                                name="Object_80"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_80.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_38" position={[-0.25, 0.375, -1.125]}>
                                            <mesh
                                                name="Object_82"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_82.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_39" position={[-0.25, -0.063, -1.125]}>
                                            <mesh
                                                name="Object_84"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_84.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_40" position={[-0.25, -0.5, -1.125]}>
                                            <mesh
                                                name="Object_86"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_86.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_41" position={[0.25, 0.813, -0.563]}>
                                            <mesh
                                                name="Object_88"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_88.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_42" position={[0.25, 0.375, -0.563]}>
                                            <mesh
                                                name="Object_90"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_90.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_43" position={[0.25, -0.125, -0.563]}>
                                            <mesh
                                                name="Object_92"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_92.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_44" position={[0.25, -0.563, -0.563]}>
                                            <mesh
                                                name="Object_94"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_94.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_45" position={[-0.25, 0.813, -1.688]}>
                                            <mesh
                                                name="Object_96"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_96.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_46" position={[-0.25, 0.375, -1.688]}>
                                            <mesh
                                                name="Object_98"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_98.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_47" position={[-0.25, -0.125, -1.688]}>
                                            <mesh
                                                name="Object_100"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_100.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_48" position={[-0.25, -0.563, -1.688]}>
                                            <mesh
                                                name="Object_102"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_102.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_49" position={[0.25, 0.813, -1.125]}>
                                            <mesh
                                                name="Object_104"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_104.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_50" position={[0.25, 0.375, -1.125]}>
                                            <mesh
                                                name="Object_106"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_106.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_51" position={[0.25, -0.063, -1.125]}>
                                            <mesh
                                                name="Object_108"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_108.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_52" position={[0.25, -0.5, -1.125]}>
                                            <mesh
                                                name="Object_110"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_110.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_53" position={[-0.25, 0.813, -2.125]}>
                                            <mesh
                                                name="Object_112"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_112.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_54" position={[-0.25, 0.375, -2.125]}>
                                            <mesh
                                                name="Object_114"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_114.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_55" position={[-0.25, -0.188, -2.125]}>
                                            <mesh
                                                name="Object_116"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_116.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_56" position={[-0.25, -0.688, -2.125]}>
                                            <mesh
                                                name="Object_118"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_118.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_57" position={[0.25, 0.813, -1.688]}>
                                            <mesh
                                                name="Object_120"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_120.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_58" position={[0.25, 0.375, -1.688]}>
                                            <mesh
                                                name="Object_122"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_122.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_59" position={[0.25, -0.125, -1.688]}>
                                            <mesh
                                                name="Object_124"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_124.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_60" position={[0.25, -0.563, -1.688]}>
                                            <mesh
                                                name="Object_126"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_126.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="cube_61" position={[0.25, -0.188, -2.125]}>
                                            <mesh
                                                name="Object_128"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes.Object_128.geometry}
                                                material={materials.material_0}
                                            />
                                        </group>
                                        <group name="head_83" position={[0, 0.063, 1.313]}>
                                            <group name="cube_62" position={[0, -1.375, 1.313]}>
                                                <mesh
                                                    name="Object_131"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_131.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_63" position={[0, -1.25, 2.5]}>
                                                <mesh
                                                    name="Object_133"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_133.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_64" position={[0.063, -1.688, 2.5]}>
                                                <mesh
                                                    name="Object_135"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_135.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_65" position={[0, -0.813, 1]}>
                                                <mesh
                                                    name="Object_137"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_137.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_66" position={[0, -0.813, 1]}>
                                                <mesh
                                                    name="Object_139"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_139.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_67" position={[-0.438, -0.813, 0.938]}>
                                                <mesh
                                                    name="Object_141"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_141.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_68" position={[0, -0.813, 0.625]}>
                                                <mesh
                                                    name="Object_143"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_143.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_69" position={[-0.438, -0.813, 0.563]}>
                                                <mesh
                                                    name="Object_145"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_145.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_70" position={[0, -0.813, 0.625]}>
                                                <mesh
                                                    name="Object_147"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_147.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_71" position={[-0.625, -1.688, 2.5]}>
                                                <mesh
                                                    name="Object_149"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_149.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_72" position={[0.625, -1.688, 2.5]}>
                                                <mesh
                                                    name="Object_151"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_151.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_73" position={[0, -1.938, 1.313]}>
                                                <mesh
                                                    name="Object_153"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_153.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_74" position={[0.813, -1.438, 1]}>
                                                <mesh
                                                    name="Object_155"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_155.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_75" position={[-0.813, -1.438, 1]}>
                                                <mesh
                                                    name="Object_157"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_157.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="jaw_82" position={[0, -0.25, 0]}>
                                                <group name="cube_76" position={[0, -1.938, 1.313]}>
                                                    <mesh
                                                        name="Object_160"
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Object_160.geometry}
                                                        material={materials.material_0}
                                                    />
                                                </group>
                                                <group name="cube_77" position={[0, -1.625, 2.5]}>
                                                    <mesh
                                                        name="Object_162"
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Object_162.geometry}
                                                        material={materials.material_0}
                                                    />
                                                </group>
                                                <group name="cube_78" position={[0.063, -1.313, 2.5]}>
                                                    <mesh
                                                        name="Object_164"
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Object_164.geometry}
                                                        material={materials.material_0}
                                                    />
                                                </group>
                                                <group name="cube_79" position={[0.625, -1.625, 2.5]}>
                                                    <mesh
                                                        name="Object_166"
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Object_166.geometry}
                                                        material={materials.material_0}
                                                    />
                                                </group>
                                                <group name="cube_80" position={[-0.625, -1.625, 2.5]}>
                                                    <mesh
                                                        name="Object_168"
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Object_168.geometry}
                                                        material={materials.material_0}
                                                    />
                                                </group>
                                                <group name="cube_81" position={[0, -1.5, 1.313]}>
                                                    <mesh
                                                        name="Object_170"
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Object_170.geometry}
                                                        material={materials.material_0}
                                                    />
                                                </group>
                                            </group>
                                        </group>
                                        <group name="body_tall_146" position={[0, 0.125, -1.313]}>
                                            <group name="cube_84" position={[0, -1.188, -1.188]}>
                                                <mesh
                                                    name="Object_173"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_173.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_85" position={[0.125, -0.438, -3.188]}>
                                                <mesh
                                                    name="Object_175"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_175.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_86" position={[-0.125, 0.563, -1.188]}>
                                                <mesh
                                                    name="Object_177"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_177.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_87" position={[-0.125, 0.063, -1.188]}>
                                                <mesh
                                                    name="Object_179"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_179.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_88" position={[0.125, 0.563, -3.188]}>
                                                <mesh
                                                    name="Object_181"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_181.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_89" position={[-0.125, -0.438, -1.188]}>
                                                <mesh
                                                    name="Object_183"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_183.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_90" position={[0.125, 0.063, -3.188]}>
                                                <mesh
                                                    name="Object_185"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_185.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_91" position={[-0.125, 0.125, -1.688]}>
                                                <mesh
                                                    name="Object_187"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_187.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_92" position={[-0.125, 0.625, -1.688]}>
                                                <mesh
                                                    name="Object_189"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_189.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_93" position={[-0.125, -0.375, -1.688]}>
                                                <mesh
                                                    name="Object_191"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_191.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_94" position={[0.125, 0.125, -2.188]}>
                                                <mesh
                                                    name="Object_193"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_193.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_95" position={[0.125, 0.625, -2.188]}>
                                                <mesh
                                                    name="Object_195"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_195.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_96" position={[0.125, -0.313, -2.188]}>
                                                <mesh
                                                    name="Object_197"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_197.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_97" position={[-0.125, -0.313, -2.188]}>
                                                <mesh
                                                    name="Object_199"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_199.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_98" position={[-0.125, 0.125, -2.188]}>
                                                <mesh
                                                    name="Object_201"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_201.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_99" position={[-0.125, 0.625, -2.188]}>
                                                <mesh
                                                    name="Object_203"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_203.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_100" position={[-0.125, 0.125, -2.688]}>
                                                <mesh
                                                    name="Object_205"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_205.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_101" position={[-0.125, 0.625, -2.688]}>
                                                <mesh
                                                    name="Object_207"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_207.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_102" position={[-0.125, -0.375, -2.688]}>
                                                <mesh
                                                    name="Object_209"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_209.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_103" position={[0.125, -0.438, -1.188]}>
                                                <mesh
                                                    name="Object_211"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_211.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_104" position={[0.125, 0.063, -1.188]}>
                                                <mesh
                                                    name="Object_213"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_213.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_105" position={[0.125, 0.563, -1.188]}>
                                                <mesh
                                                    name="Object_215"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_215.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_106" position={[0.125, 0.125, -1.688]}>
                                                <mesh
                                                    name="Object_217"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_217.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_107" position={[0.125, 0.625, -1.688]}>
                                                <mesh
                                                    name="Object_219"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_219.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_108" position={[0.125, -0.375, -1.688]}>
                                                <mesh
                                                    name="Object_221"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_221.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_109" position={[0.125, 0.125, -2.688]}>
                                                <mesh
                                                    name="Object_223"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_223.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_110" position={[0.125, 0.625, -2.688]}>
                                                <mesh
                                                    name="Object_225"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_225.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_111" position={[0.125, -0.375, -2.688]}>
                                                <mesh
                                                    name="Object_227"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_227.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_112" position={[-0.188, 0.813, -1.188]}>
                                                <mesh
                                                    name="Object_229"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_229.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_113" position={[0.625, 0.813, -3.188]}>
                                                <mesh
                                                    name="Object_231"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_231.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_114" position={[-0.625, 0.813, -1.188]}>
                                                <mesh
                                                    name="Object_233"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_233.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_115" position={[0.188, 0.813, -3.188]}>
                                                <mesh
                                                    name="Object_235"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_235.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_116" position={[-0.188, 0.813, -1.688]}>
                                                <mesh
                                                    name="Object_237"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_237.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_117" position={[-0.625, 0.813, -1.688]}>
                                                <mesh
                                                    name="Object_239"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_239.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_118" position={[0.188, 0.813, -2.188]}>
                                                <mesh
                                                    name="Object_241"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_241.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_119" position={[0.625, 0.813, -2.188]}>
                                                <mesh
                                                    name="Object_243"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_243.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_120" position={[-0.188, 0.813, -2.188]}>
                                                <mesh
                                                    name="Object_245"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_245.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_121" position={[-0.625, 0.813, -2.188]}>
                                                <mesh
                                                    name="Object_247"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_247.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_122" position={[-0.188, 0.813, -2.688]}>
                                                <mesh
                                                    name="Object_249"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_249.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_123" position={[-0.625, 0.813, -2.688]}>
                                                <mesh
                                                    name="Object_251"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_251.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_124" position={[0.188, 0.813, -1.188]}>
                                                <mesh
                                                    name="Object_253"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_253.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_125" position={[0.625, 0.813, -1.188]}>
                                                <mesh
                                                    name="Object_255"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_255.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_126" position={[0.188, 0.813, -1.688]}>
                                                <mesh
                                                    name="Object_257"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_257.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_127" position={[0.625, 0.813, -1.688]}>
                                                <mesh
                                                    name="Object_259"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_259.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_128" position={[-0.188, 0.813, -3.188]}>
                                                <mesh
                                                    name="Object_261"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_261.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_129" position={[-0.625, 0.813, -3.188]}>
                                                <mesh
                                                    name="Object_263"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_263.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_130" position={[0.188, 0.813, -2.688]}>
                                                <mesh
                                                    name="Object_265"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_265.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_131" position={[0.625, 0.813, -2.688]}>
                                                <mesh
                                                    name="Object_267"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_267.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_132" position={[-0.125, -0.438, -3.188]}>
                                                <mesh
                                                    name="Object_269"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_269.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_133" position={[-0.125, 0.063, -3.188]}>
                                                <mesh
                                                    name="Object_271"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_271.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_134" position={[-0.125, 0.563, -3.188]}>
                                                <mesh
                                                    name="Object_273"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_273.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="tall_139" position={[0, 0.125, -2.375]}>
                                                <group name="cube_135" position={[0, -1.188, -1.063]}>
                                                    <mesh
                                                        name="Object_276"
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Object_276.geometry}
                                                        material={materials.material_0}
                                                    />
                                                </group>
                                                <group name="cube_136" position={[0, -1.188, -3.188]}>
                                                    <mesh
                                                        name="Object_278"
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Object_278.geometry}
                                                        material={materials.material_0}
                                                    />
                                                </group>
                                                <group name="cube_137" position={[0, -1.188, -4.875]}>
                                                    <mesh
                                                        name="Object_280"
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Object_280.geometry}
                                                        material={materials.material_0}
                                                    />
                                                </group>
                                                <group name="cube_138" position={[0, -3.5, -4.875]}>
                                                    <mesh
                                                        name="Object_282"
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Object_282.geometry}
                                                        material={materials.material_0}
                                                    />
                                                </group>
                                            </group>
                                            <group name="back_right_fin_142" position={[-0.875, -0.719, -1.188]}>
                                                <group name="cube_140" position={[-1, -0.094, -0.563]}>
                                                    <mesh
                                                        name="Object_285"
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Object_285.geometry}
                                                        material={materials.material_0}
                                                    />
                                                </group>
                                                <group name="cube_141" position={[-1, -0.094, 0.313]}>
                                                    <mesh
                                                        name="Object_287"
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Object_287.geometry}
                                                        material={materials.material_0}
                                                    />
                                                </group>
                                            </group>
                                            <group name="back_left_fin_145" position={[0.875, -0.719, -1.188]}>
                                                <group name="cube_143" position={[1, -0.094, 0.313]}>
                                                    <mesh
                                                        name="Object_290"
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Object_290.geometry}
                                                        material={materials.material_0}
                                                    />
                                                </group>
                                                <group name="cube_144" position={[1, -0.094, -0.563]}>
                                                    <mesh
                                                        name="Object_292"
                                                        castShadow
                                                        receiveShadow
                                                        geometry={nodes.Object_292.geometry}
                                                        material={materials.material_0}
                                                    />
                                                </group>
                                            </group>
                                        </group>
                                        <group name="left_fin_149" position={[1, -0.906, 0]}>
                                            <group name="cube_147" position={[1, -0.094, 0.063]}>
                                                <mesh
                                                    name="Object_295"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_295.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_148" position={[1, -0.094, -1.188]}>
                                                <mesh
                                                    name="Object_297"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_297.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                        </group>
                                        <group name="right_fin_152" position={[-1, -0.906, 0]}>
                                            <group name="cube_150" position={[-1, -0.094, -1.188]}>
                                                <mesh
                                                    name="Object_300"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_300.geometry}
                                                    material={materials.material_0}
                                                />
                                            </group>
                                            <group name="cube_151" position={[-1, -0.094, 0.063]}>
                                                <mesh
                                                    name="Object_302"
                                                    castShadow
                                                    receiveShadow
                                                    geometry={nodes.Object_302.geometry}
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

    useGLTF.preload('models-3d/fish1.glb')