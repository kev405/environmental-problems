import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

const AnimationRain = (props) => {
    const groupRef = useRef();
    const { nodes, materials, animations } = useGLTF('/models-3d/cuteRain.glb');
    const { actions } = useAnimations(animations, groupRef);

    useEffect(() => {
        console.log("Animaciones disponibles:", animations.map(a => a.name));
    }, [animations]);

    useEffect(() => {
        if (actions) {
            actions["Rain_Idle"]?.play(); // Cambia "idle" al nombre de tu animación
            actions["idle_with_info"]?.play();
        }
    }, [actions]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowUp') {
                setEmissiveIntensity(2); // Prender la luz
            } else if (event.key === 'ArrowDown') {
                setEmissiveIntensity(0); // Apagar la luz
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <ambientLight intensity={0.5} />
            <directionalLight />
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="b24668ea5335430585f182699e339332fbx" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="OwlPuppet" position={[1.273, 0.131, 0]} scale={0.007}>
                                    <group name="Object_5" rotation={[-Math.PI / 2, 0, 0]}>
                                        <mesh
                                            name="0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes['0'].geometry}
                                            material={materials.OwlMat}
                                            morphTargetDictionary={nodes['0'].morphTargetDictionary}
                                            morphTargetInfluences={nodes['0'].morphTargetInfluences}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="VRayCam001"
                                    position={[-0.25, 0.746, 10.588]}
                                    rotation={[0, 0.001, 0]}
                                    scale={0.01}
                                />
                                <group
                                    name="VRayCam001Target"
                                    position={[-0.256, 0.746, -1.604]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.01}
                                />
                                <group
                                    name="GeoSphere067"
                                    position={[-0.406, -9.656, -0.893]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.009}>
                                    <mesh
                                        name="GeoSphere067_Dome_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.GeoSphere067_Dome_0.geometry}
                                        material={materials.Dome}
                                    />
                                </group>
                                <group
                                    name="Rain_Chunk01"
                                    position={[-0.37, 2.977, 1.254]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.01}>
                                    <group
                                        name="RainA"
                                        position={[-302.129, -466.419, 136.119]}
                                        rotation={[0, 0, -Math.PI]}
                                        scale={[-0.002, -0.002, -0.005]}>
                                        <mesh
                                            name="RainA_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainA_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="Rain_Chunk02"
                                    position={[-0.37, 15.407, 1.254]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.01}>
                                    <group
                                        name="Rain_B"
                                        position={[210.514, -14.68, 634.736]}
                                        rotation={[0, 0, -Math.PI]}
                                        scale={[-0.002, -0.002, -0.005]}>
                                        <mesh
                                            name="Rain_B_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.Rain_B_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop"
                                    position={[-0.863, -0.264, 1.576]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={2.245}>
                                    <mesh
                                        name="RainDrop_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop001"
                                    position={[-0.842, -0.285, 1.521]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.01}>
                                    <group name="Object_20">
                                        <mesh
                                            name="RainDrop001_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop001_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop002"
                                    position={[-2.04, -0.311, 0.819]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={2.124}>
                                    <mesh
                                        name="RainDrop002_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop002_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop003"
                                    position={[-1.289, -0.285, 1.536]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.011}>
                                    <group name="Object_25">
                                        <mesh
                                            name="RainDrop003_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop003_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop004"
                                    position={[-1.595, -0.273, 1.101]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.006}>
                                    <mesh
                                        name="RainDrop004_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop004_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop005"
                                    position={[-2.028, -0.307, 1.097]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.011}>
                                    <mesh
                                        name="RainDrop005_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop005_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop006"
                                    position={[-3.037, -0.434, 2.044]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.005}>
                                    <group name="Object_32">
                                        <mesh
                                            name="RainDrop006_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop006_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop007"
                                    position={[-3.268, -0.387, 1.232]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.005}>
                                    <group name="Object_35">
                                        <mesh
                                            name="RainDrop007_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop007_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop008"
                                    position={[-2.664, -0.338, 1.374]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.008}>
                                    <group name="Object_38">
                                        <mesh
                                            name="RainDrop008_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop008_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop009"
                                    position={[-2.533, -0.345, 1.029]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.005}>
                                    <mesh
                                        name="RainDrop009_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop009_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop010"
                                    position={[-2.892, -0.364, 0.226]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={1.391}>
                                    <group name="Object_43">
                                        <mesh
                                            name="RainDrop010_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop010_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop011"
                                    position={[-2.748, -0.314, -0.445]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0}>
                                    <group name="Object_46">
                                        <mesh
                                            name="RainDrop011_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop011_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop012"
                                    position={[-3.068, -0.391, -0.948]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0}>
                                    <mesh
                                        name="RainDrop012_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop012_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop013"
                                    position={[-1.929, -0.314, -1.498]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0}>
                                    <mesh
                                        name="RainDrop013_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop013_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop014"
                                    position={[-1.644, -0.296, -1.473]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0}>
                                    <group name="Object_53">
                                        <mesh
                                            name="RainDrop014_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop014_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop015"
                                    position={[-1.324, -0.308, -1.96]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0}>
                                    <mesh
                                        name="RainDrop015_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop015_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop016"
                                    position={[-0.76, -0.326, -2.451]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={1.27}>
                                    <group name="Object_58">
                                        <mesh
                                            name="RainDrop016_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop016_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop017"
                                    position={[-1.23, -0.371, -2.694]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0}>
                                    <mesh
                                        name="RainDrop017_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop017_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop018" position={[-0.09, -0.31, -2.91]} scale={0}>
                                    <group name="Object_63">
                                        <mesh
                                            name="RainDrop018_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop018_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop019" position={[-0.056, -0.234, -3.371]} scale={0}>
                                    <mesh
                                        name="RainDrop019_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop019_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop020" position={[-1.515, -0.378, -3.134]} scale={0}>
                                    <mesh
                                        name="RainDrop020_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop020_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop021" position={[-2.725, -0.486, -3.391]} scale={0}>
                                    <mesh
                                        name="RainDrop021_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop021_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop022" position={[-2.685, -0.68, -3.555]} scale={0}>
                                    <mesh
                                        name="RainDrop022_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop022_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop023" position={[-2.505, -0.61, -3.553]} scale={0}>
                                    <mesh
                                        name="RainDrop023_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop023_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop024" position={[-3.62, -0.485, -1.037]} scale={0}>
                                    <mesh
                                        name="RainDrop024_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop024_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop025" position={[-4.479, -0.711, -1.166]} scale={0}>
                                    <mesh
                                        name="RainDrop025_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop025_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop026" position={[-4.041, -0.625, -1.469]} scale={0}>
                                    <mesh
                                        name="RainDrop026_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop026_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop027" position={[-4.356, -0.7, -1.588]} scale={0}>
                                    <mesh
                                        name="RainDrop027_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop027_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop028" position={[-5.029, -0.706, -0.953]} scale={0}>
                                    <mesh
                                        name="RainDrop028_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop028_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop029" position={[-4.423, -0.706, -0.477]} scale={0}>
                                    <mesh
                                        name="RainDrop029_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop029_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop030" position={[-5.15, -0.706, -0.124]} scale={0}>
                                    <mesh
                                        name="RainDrop030_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop030_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop031" position={[-4.745, -0.706, 0.037]} scale={0}>
                                    <mesh
                                        name="RainDrop031_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop031_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop032" position={[-4.327, -0.706, 0.208]} scale={0}>
                                    <mesh
                                        name="RainDrop032_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop032_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop033" position={[-4.496, -0.705, 0.706]} scale={0}>
                                    <group name="Object_94">
                                        <mesh
                                            name="RainDrop033_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop033_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop034" scale={0}>
                                    <group name="Object_97" />
                                </group>
                                <group name="RainDrop035" scale={0}>
                                    <group name="Object_99" />
                                </group>
                                <group name="RainDrop036" position={[-3.083, -0.545, 2.51]} scale={0}>
                                    <group name="Object_101">
                                        <mesh
                                            name="RainDrop036_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop036_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop037" position={[-2.331, -0.449, 2.61]} scale={0}>
                                    <mesh
                                        name="RainDrop037_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop037_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop038" position={[-1.999, -0.579, 3.561]} scale={0}>
                                    <group name="Object_106">
                                        <mesh
                                            name="RainDrop038_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop038_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop039" position={[-1.896, -0.612, 3.789]} scale={0}>
                                    <mesh
                                        name="RainDrop039_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop039_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop040" position={[-0.945, -0.499, 3.587]} scale={0}>
                                    <mesh
                                        name="RainDrop040_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop040_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop041" position={[-1.339, -0.657, 4.113]} scale={0}>
                                    <mesh
                                        name="RainDrop041_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop041_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop042"
                                    position={[-0.433, -0.813, 4.787]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.005}>
                                    <mesh
                                        name="RainDrop042_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop042_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop043"
                                    position={[0.265, -0.418, 3.171]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.009}>
                                    <group name="Object_117">
                                        <mesh
                                            name="RainDrop043_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop043_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop044"
                                    position={[0.135, -0.352, 2.76]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.742}>
                                    <mesh
                                        name="RainDrop044_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop044_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop045"
                                    position={[0.761, -0.374, 2.763]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.009}>
                                    <group name="Object_122">
                                        <mesh
                                            name="RainDrop045_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop045_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop046"
                                    position={[1.322, -0.375, 3.185]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.009}>
                                    <group name="Object_125">
                                        <mesh
                                            name="RainDrop046_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop046_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop047"
                                    position={[1.602, -0.598, 3.877]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.938}>
                                    <group name="Object_128">
                                        <mesh
                                            name="RainDrop047_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop047_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop048"
                                    position={[1.358, -0.447, 3.244]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.006}>
                                    <mesh
                                        name="RainDrop048_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop048_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop049"
                                    position={[2.291, -0.536, 2.988]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.006}>
                                    <group name="Object_133">
                                        <mesh
                                            name="RainDrop049_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop049_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop050"
                                    position={[1.989, -0.566, 3.456]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.006}>
                                    <mesh
                                        name="RainDrop050_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop050_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop051"
                                    position={[2.304, -0.643, 3.477]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.443}>
                                    <mesh
                                        name="RainDrop051_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop051_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop052"
                                    position={[0.552, -0.585, 4.186]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.008}>
                                    <group name="Object_140">
                                        <mesh
                                            name="RainDrop052_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop052_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop053"
                                    position={[0.763, -0.901, 3.957]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.006}>
                                    <mesh
                                        name="RainDrop053_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop053_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop054"
                                    position={[-0.03, -0.588, 4.536]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.006}>
                                    <mesh
                                        name="RainDrop054_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop054_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop055"
                                    position={[-0.228, -0.437, 3.708]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.012}>
                                    <mesh
                                        name="RainDrop055_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop055_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop056" position={[-0.384, -0.467, 3.639]} scale={0}>
                                    <mesh
                                        name="RainDrop056_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop056_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop057" position={[1.348, -0.291, 1.586]} scale={0}>
                                    <group name="Object_151">
                                        <mesh
                                            name="RainDrop057_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop057_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop058" position={[1.207, -0.288, 1.658]} scale={0}>
                                    <mesh
                                        name="RainDrop058_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop058_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop059" position={[0.838, -0.26, 1.359]} scale={0}>
                                    <group name="Object_156">
                                        <mesh
                                            name="RainDrop059_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop059_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop060" position={[0.922, -0.298, 1.874]} scale={0}>
                                    <group name="Object_159" rotation={[Math.PI, 0, 0]}>
                                        <mesh
                                            name="RainDrop060_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop060_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop061" position={[1.198, -0.318, 2.012]} scale={0}>
                                    <group name="Object_162" rotation={[Math.PI, 0, 0]}>
                                        <mesh
                                            name="RainDrop061_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop061_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop062" position={[1.092, -0.355, 2.449]} scale={0}>
                                    <group name="Object_165">
                                        <mesh
                                            name="RainDrop062_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop062_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop063" position={[1.242, -0.353, 2.472]} scale={0}>
                                    <group name="Object_168">
                                        <mesh
                                            name="RainDrop063_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop063_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop064" position={[1.88, -0.42, 2.642]} scale={0}>
                                    <mesh
                                        name="RainDrop064_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop064_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop065" position={[1.874, -0.32, 2.211]} scale={0}>
                                    <mesh
                                        name="RainDrop065_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop065_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop066" position={[2.622, -0.371, 2.198]} scale={0}>
                                    <group name="Object_175">
                                        <mesh
                                            name="RainDrop066_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop066_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop067" position={[3.183, -0.4, 1.88]} scale={0}>
                                    <group name="Object_178">
                                        <mesh
                                            name="RainDrop067_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop067_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop068" position={[3.149, -0.46, 2.006]} scale={0}>
                                    <mesh
                                        name="RainDrop068_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop068_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop069" position={[3.252, -0.5, 1.622]} scale={0}>
                                    <group name="Object_183">
                                        <mesh
                                            name="RainDrop069_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop069_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop070"
                                    position={[3.239, -0.464, 1.368]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.005}>
                                    <group name="Object_186">
                                        <mesh
                                            name="RainDrop070_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop070_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop071"
                                    position={[3.322, -0.436, 0.953]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.008}>
                                    <mesh
                                        name="RainDrop071_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop071_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop072" scale={0}>
                                    <group name="Object_191" />
                                </group>
                                <group name="RainDrop073" scale={0}>
                                    <group name="Object_193" />
                                </group>
                                <group
                                    name="RainDrop074"
                                    position={[2.98, -0.255, -0.662]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.01}>
                                    <mesh
                                        name="RainDrop074_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop074_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop075"
                                    position={[2.783, -0.414, 0.65]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.006}>
                                    <group name="Object_197">
                                        <mesh
                                            name="RainDrop075_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop075_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop076"
                                    position={[2.134, -0.301, 0.515]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.008}>
                                    <group name="Object_200">
                                        <mesh
                                            name="RainDrop076_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop076_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop077"
                                    position={[2.78, -0.389, 1.239]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.005}>
                                    <mesh
                                        name="RainDrop077_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop077_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop078"
                                    position={[3.013, -0.418, 1.194]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.007}>
                                    <group name="Object_205">
                                        <mesh
                                            name="RainDrop078_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop078_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop079"
                                    position={[2.486, -0.39, 1.671]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.007}>
                                    <group name="Object_208">
                                        <mesh
                                            name="RainDrop079_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop079_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop080"
                                    position={[2.814, -0.314, 1.863]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.007}>
                                    <mesh
                                        name="RainDrop080_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop080_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop081"
                                    position={[3.266, -0.502, 1.51]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.011}>
                                    <group name="Object_213">
                                        <mesh
                                            name="RainDrop081_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop081_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop082"
                                    position={[2.935, -0.44, 1.66]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.008}>
                                    <mesh
                                        name="RainDrop082_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop082_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop083" position={[3.415, -0.564, 1.961]} scale={0}>
                                    <group name="Object_218">
                                        <mesh
                                            name="RainDrop083_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop083_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop084" position={[3.424, -0.424, -0.625]} scale={0}>
                                    <mesh
                                        name="RainDrop084_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop084_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop085" position={[3.096, -0.457, -1.453]} scale={0}>
                                    <group name="Object_223">
                                        <mesh
                                            name="RainDrop085_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop085_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop086" position={[3.187, -0.458, -1.295]} scale={0}>
                                    <group name="Object_226">
                                        <mesh
                                            name="RainDrop086_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop086_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop087" position={[3.096, -0.451, -1.416]} scale={0}>
                                    <mesh
                                        name="RainDrop087_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop087_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop088" position={[2.938, -0.465, -1.972]} scale={0}>
                                    <mesh
                                        name="RainDrop088_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop088_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop089" position={[2.405, -0.453, -2.827]} scale={0}>
                                    <mesh
                                        name="RainDrop089_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop089_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop090" position={[1.961, -0.521, -3.159]} scale={0}>
                                    <group name="Object_235">
                                        <mesh
                                            name="RainDrop090_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop090_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop091" position={[1.722, -0.436, -2.964]} scale={0}>
                                    <mesh
                                        name="RainDrop091_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop091_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop092" position={[1.64, -0.487, -3.305]} scale={0}>
                                    <mesh
                                        name="RainDrop092_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop092_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop093" position={[1.704, -0.47, -3.37]} scale={0}>
                                    <mesh
                                        name="RainDrop093_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop093_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop094" position={[1.707, -0.441, -3.34]} scale={0}>
                                    <mesh
                                        name="RainDrop094_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop094_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop095" position={[1.216, -0.182, -2.461]} scale={0}>
                                    <mesh
                                        name="RainDrop095_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop095_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop096" position={[1.264, -0.292, -3.058]} scale={0}>
                                    <mesh
                                        name="RainDrop096_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop096_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop097" position={[0.443, -0.4, -3.243]} scale={0}>
                                    <mesh
                                        name="RainDrop097_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop097_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop098" position={[-0.026, -0.707, -4.63]} scale={0}>
                                    <group name="Object_252">
                                        <mesh
                                            name="RainDrop098_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop098_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop099" position={[-0.631, -0.73, -4.793]} scale={0}>
                                    <mesh
                                        name="RainDrop099_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop099_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop100" position={[-0.904, -0.706, -4.861]} scale={0}>
                                    <mesh
                                        name="RainDrop100_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop100_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop101" position={[-0.981, -0.706, -4.405]} scale={0}>
                                    <mesh
                                        name="RainDrop101_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop101_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop102" position={[-0.787, -0.644, -4.41]} scale={0}>
                                    <mesh
                                        name="RainDrop102_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop102_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop103" position={[-2.491, -0.706, -4.181]} scale={0}>
                                    <mesh
                                        name="RainDrop103_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop103_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop104" position={[-2.681, -0.706, -4.452]} scale={0}>
                                    <mesh
                                        name="RainDrop104_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop104_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop105" position={[-2.835, -0.706, -4.533]} scale={0}>
                                    <mesh
                                        name="RainDrop105_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop105_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop106" position={[-2.527, -0.706, -5.18]} scale={0}>
                                    <mesh
                                        name="RainDrop106_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop106_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop107" position={[-1.863, -0.706, -4.211]} scale={0}>
                                    <mesh
                                        name="RainDrop107_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop107_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop108" position={[-0.896, -0.706, -4.521]} scale={0}>
                                    <mesh
                                        name="RainDrop108_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop108_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop109" position={[-1.311, -0.722, -4.507]} scale={0}>
                                    <group name="Object_275">
                                        <mesh
                                            name="RainDrop109_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop109_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop110" position={[-0.513, -0.475, -3.782]} scale={0}>
                                    <group name="Object_278">
                                        <mesh
                                            name="RainDrop110_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop110_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop111" position={[0.177, -0.514, -3.958]} scale={0}>
                                    <mesh
                                        name="RainDrop111_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop111_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop112" position={[0.579, -0.705, -4.495]} scale={0}>
                                    <group name="Object_283">
                                        <mesh
                                            name="RainDrop112_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop112_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop113" position={[0.504, -0.634, -4.266]} scale={0}>
                                    <group name="Object_286">
                                        <mesh
                                            name="RainDrop113_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop113_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop114" position={[1.115, -0.747, -5.021]} scale={0}>
                                    <mesh
                                        name="RainDrop114_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop114_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop115" position={[0.827, -0.705, -4.362]} scale={0}>
                                    <mesh
                                        name="RainDrop115_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop115_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop116" position={[1.416, -0.706, -4.151]} scale={0}>
                                    <mesh
                                        name="RainDrop116_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop116_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop117" position={[1.535, -0.556, -3.633]} scale={0}>
                                    <mesh
                                        name="RainDrop117_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop117_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop118" position={[1.681, -0.542, -3.532]} scale={0}>
                                    <mesh
                                        name="RainDrop118_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop118_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop119" position={[2.184, -0.5, -3.008]} scale={0}>
                                    <mesh
                                        name="RainDrop119_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop119_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop120" position={[2.58, -0.543, -2.932]} scale={0}>
                                    <group name="Object_301">
                                        <mesh
                                            name="RainDrop120_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop120_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop121" position={[2.654, -0.52, -2.985]} scale={0}>
                                    <group name="Object_304">
                                        <mesh
                                            name="RainDrop121_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop121_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop122" position={[3.887, -0.706, 3.944]} scale={0}>
                                    <mesh
                                        name="RainDrop122_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop122_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop123" position={[3.662, -0.706, 3.661]} scale={0}>
                                    <mesh
                                        name="RainDrop123_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop123_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop124" position={[3.563, -0.706, 3.962]} scale={0}>
                                    <mesh
                                        name="RainDrop124_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop124_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop125" position={[2.717, -0.706, 3.83]} scale={0}>
                                    <mesh
                                        name="RainDrop125_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop125_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop126" position={[2.313, -0.706, 4.601]} scale={0}>
                                    <mesh
                                        name="RainDrop126_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop126_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop127" position={[1.99, -0.706, 4.116]} scale={0}>
                                    <group name="Object_317" rotation={[Math.PI, 0, 0]}>
                                        <mesh
                                            name="RainDrop127_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop127_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop128" position={[1.743, -0.706, 4.294]} scale={0}>
                                    <mesh
                                        name="RainDrop128_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop128_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop129" position={[1.248, -0.706, 4.911]} scale={0}>
                                    <mesh
                                        name="RainDrop129_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop129_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop130" position={[1.066, -0.706, 4.304]} scale={0}>
                                    <mesh
                                        name="RainDrop130_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop130_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop131" position={[0.569, -0.706, 5.106]} scale={0}>
                                    <mesh
                                        name="RainDrop131_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop131_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop132" position={[-0.171, -0.706, 5.126]} scale={0}>
                                    <mesh
                                        name="RainDrop132_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop132_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop133" position={[-0.36, -0.706, 5.097]} scale={0}>
                                    <mesh
                                        name="RainDrop133_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop133_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop134" position={[-0.374, -0.706, 5.153]} scale={0}>
                                    <mesh
                                        name="RainDrop134_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop134_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop135" position={[-1.332, -0.706, 5.217]} scale={0}>
                                    <mesh
                                        name="RainDrop135_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop135_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop136" position={[-1.381, -0.706, 4.431]} scale={0}>
                                    <mesh
                                        name="RainDrop136_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop136_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop137" position={[-1.65, -0.706, 4.886]} scale={0}>
                                    <mesh
                                        name="RainDrop137_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop137_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop138" position={[-2.588, -0.706, 4.213]} scale={0}>
                                    <mesh
                                        name="RainDrop138_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop138_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop139" position={[-2.41, -0.706, 4.386]} scale={0}>
                                    <mesh
                                        name="RainDrop139_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop139_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop140" position={[-3.142, -0.706, 3.995]} scale={0}>
                                    <mesh
                                        name="RainDrop140_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop140_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop141" position={[-4.013, -0.706, 4.367]} scale={0}>
                                    <mesh
                                        name="RainDrop141_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop141_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop142" position={[-3.094, -0.706, 3.866]} scale={0}>
                                    <mesh
                                        name="RainDrop142_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop142_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop143" position={[-3.622, -0.652, 2.645]} scale={0}>
                                    <group name="Object_350">
                                        <mesh
                                            name="RainDrop143_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop143_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop144" position={[-3.43, -0.491, 1.718]} scale={0}>
                                    <mesh
                                        name="RainDrop144_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop144_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop145" position={[-3.799, -0.509, 1.038]} scale={0}>
                                    <mesh
                                        name="RainDrop145_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop145_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop146" position={[-4.682, -0.773, 0.978]} scale={0}>
                                    <group name="Object_357">
                                        <mesh
                                            name="RainDrop146_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop146_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop147" position={[-4.271, -0.666, 1.144]} scale={0}>
                                    <mesh
                                        name="RainDrop147_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop147_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop148" scale={0}>
                                    <group name="Object_362" />
                                </group>
                                <group name="RainDrop149" position={[-4.689, -0.705, 0.358]} scale={0}>
                                    <mesh
                                        name="RainDrop149_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop149_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop150" position={[-4.34, -0.706, -0.069]} scale={0}>
                                    <mesh
                                        name="RainDrop150_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop150_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop151" position={[-4.809, -0.706, -0.526]} scale={0}>
                                    <mesh
                                        name="RainDrop151_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop151_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop152" position={[-4.335, -0.706, -1.461]} scale={0}>
                                    <mesh
                                        name="RainDrop152_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop152_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop153" position={[-4.77, -0.706, -1.715]} scale={0}>
                                    <mesh
                                        name="RainDrop153_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop153_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop154" position={[-4.166, -0.706, -1.949]} scale={0}>
                                    <mesh
                                        name="RainDrop154_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop154_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop155" position={[-4.628, -0.706, -2.683]} scale={0}>
                                    <mesh
                                        name="RainDrop155_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop155_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop156" position={[-4.661, -0.706, -2.737]} scale={0}>
                                    <mesh
                                        name="RainDrop156_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop156_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop157" position={[-3.883, -0.706, -3.053]} scale={0}>
                                    <mesh
                                        name="RainDrop157_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop157_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop158" position={[-3.78, -0.706, -3.703]} scale={0}>
                                    <group name="Object_382" rotation={[Math.PI, 0, 0]}>
                                        <mesh
                                            name="RainDrop158_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop158_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop159" position={[-2.684, -0.56, -3.071]} scale={0}>
                                    <mesh
                                        name="RainDrop159_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop159_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop160" position={[-2.597, -0.456, -2.474]} scale={0}>
                                    <group name="Object_387">
                                        <mesh
                                            name="RainDrop160_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop160_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop161" position={[-2.631, 2.382, 0.05]} scale={0}>
                                    <mesh
                                        name="RainDrop161_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop161_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop162" position={[-2.486, 2.491, 0.092]} scale={0}>
                                    <mesh
                                        name="RainDrop162_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop162_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop163" position={[-2.251, 2.669, 0.075]} scale={0}>
                                    <mesh
                                        name="RainDrop163_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop163_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop164" position={[-2.369, 2.579, 0.05]} scale={0}>
                                    <mesh
                                        name="RainDrop164_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop164_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop165" position={[-2.05, 2.518, 0.058]} scale={0}>
                                    <group name="Object_398">
                                        <mesh
                                            name="RainDrop165_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop165_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop166" position={[-1.842, 2.36, 0.067]} scale={0}>
                                    <mesh
                                        name="RainDrop166_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop166_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop167" position={[-1.271, 0.528, -0.751]} scale={0}>
                                    <mesh
                                        name="RainDrop167_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop167_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop168" position={[-1.066, 0.53, -0.765]} scale={0}>
                                    <mesh
                                        name="RainDrop168_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop168_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop169" position={[-0.433, 0.517, -0.75]} scale={0}>
                                    <mesh
                                        name="RainDrop169_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop169_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop170" position={[-0.756, 0.522, -0.751]} scale={0}>
                                    <group name="Object_409">
                                        <mesh
                                            name="RainDrop170_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop170_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop171" position={[-0.223, 0.506, -0.742]} scale={0}>
                                    <mesh
                                        name="RainDrop171_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop171_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop172" position={[-1.298, 0.05, 0.175]} scale={0}>
                                    <mesh
                                        name="RainDrop172_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop172_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop173" position={[-0.059, 0.079, 0.154]} scale={0}>
                                    <mesh
                                        name="RainDrop173_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop173_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop174" position={[-0.614, 0.151, 0.093]} scale={0}>
                                    <group name="Object_418">
                                        <mesh
                                            name="RainDrop174_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop174_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop175" position={[0.598, 0.161, 0.061]} scale={0}>
                                    <group name="Object_421">
                                        <mesh
                                            name="RainDrop175_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop175_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop176" position={[0.362, 0.035, 0.307]} scale={0}>
                                    <mesh
                                        name="RainDrop176_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop176_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop177" position={[-0.818, 0.082, -0.363]} scale={0}>
                                    <mesh
                                        name="RainDrop177_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop177_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop178" position={[-1.279, 0.069, 0.126]} scale={0}>
                                    <group name="Object_428">
                                        <mesh
                                            name="RainDrop178_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop178_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop179" position={[-0.048, 0.528, -0.751]} scale={0}>
                                    <group name="Object_431">
                                        <mesh
                                            name="RainDrop179_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop179_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop180" position={[0.156, 0.53, -0.765]} scale={0}>
                                    <mesh
                                        name="RainDrop180_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop180_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop181" position={[0.79, 0.517, -0.75]} scale={0}>
                                    <group name="Object_436">
                                        <mesh
                                            name="RainDrop181_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop181_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop182" position={[0.466, 0.522, -0.751]} scale={0}>
                                    <group name="Object_439">
                                        <mesh
                                            name="RainDrop182_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop182_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="Stand"
                                    position={[-2.251, -0.067, -0.131]}
                                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                                    scale={0.051}>
                                    <mesh
                                        name="Stand_Stand_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Stand_Stand_0.geometry}
                                        material={materials.Stand}
                                    />
                                    <mesh
                                        name="Stand_Lake_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Stand_Lake_0.geometry}
                                        material={materials.Lake}
                                    />
                                    <mesh
                                        name="Stand_GrassGround_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Stand_GrassGround_0.geometry}
                                        material={materials.GrassGround}
                                    />
                                    <mesh
                                        name="Stand_Seat_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Stand_Seat_0.geometry}
                                        material={materials.Seat}
                                    />
                                    <mesh
                                        name="Stand_Bag_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Stand_Bag_0.geometry}
                                        material={materials.material}
                                    />
                                    <mesh
                                        name="Stand_Rocks_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Stand_Rocks_0.geometry}
                                        material={materials.Rocks}
                                    />
                                    <mesh
                                        name="Stand_Trees_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Stand_Trees_0.geometry}
                                        material={materials.Trees}
                                    />
                                    <mesh
                                        name="Stand_Moon_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Stand_Moon_0.geometry}
                                        material={materials.Moon}
                                    />
                                    <mesh
                                        name="Stand_StandLight_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Stand_StandLight_0.geometry}
                                        material={materials.StandLight}
                                    />
                                </group>
                                <group
                                    name="UmbrellaHandle"
                                    position={[1.837, 0.389, 0.238]}
                                    rotation={[-1.589, 0.115, -0.722]}
                                    scale={0.01}>
                                    <mesh
                                        name="1"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes['1'].geometry}
                                        material={materials.UmbrellaHandle}
                                        morphTargetDictionary={nodes['1'].morphTargetDictionary}
                                        morphTargetInfluences={nodes['1'].morphTargetInfluences}
                                    />
                                </group>
                                <group
                                    name="UmbrellaTop"
                                    position={[1.288, 2.264, -0.474]}
                                    rotation={[-1.904, -0.09, -0.588]}
                                    scale={0.025}>
                                    <group name="Object_454" position={[1.54, -1.209, -57.105]}>
                                        <mesh
                                            name="UmbrellaTop_Umbrella_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.UmbrellaTop_Umbrella_0.geometry}
                                            material={materials.Umbrella}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="Cylinder003"
                                    position={[-0.257, -0.526, -0.099]}
                                    rotation={[-Math.PI / 2, 0, 2.209]}
                                    scale={[0.011, 0.011, 0.005]}>
                                    <mesh
                                        name="Cylinder003_Smoke_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Cylinder003_Smoke_0.geometry}
                                        material={materials.Smoke}
                                    />
                                </group>
                                <group
                                    name="Cylinder004"
                                    position={[-0.257, -0.526, -0.099]}
                                    rotation={[-Math.PI / 2, 0, 2.39]}
                                    scale={[0.007, 0.007, 0.003]}>
                                    <mesh
                                        name="Cylinder004_Smoke_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Cylinder004_Smoke_0.geometry}
                                        material={materials.Smoke}
                                    />
                                </group>
                                <group
                                    name="RainDrop183"
                                    position={[0.628, 1.973, 0.954]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.009}>
                                    <group name="Object_461">
                                        <mesh
                                            name="RainDrop183_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop183_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop184"
                                    position={[1.975, 1.974, 0.984]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.006}>
                                    <group name="Object_464">
                                        <mesh
                                            name="RainDrop184_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop184_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop185" position={[1.237, 2.32, 0.213]} scale={0}>
                                    <group name="Object_467" rotation={[Math.PI, 0, 0]}>
                                        <mesh
                                            name="RainDrop185_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop185_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop186" position={[1.097, 2.324, 0.285]} scale={0}>
                                    <mesh
                                        name="RainDrop186_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop186_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop187" position={[0.603, 2.099, -0.014]} scale={0}>
                                    <group name="Object_472">
                                        <mesh
                                            name="RainDrop187_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop187_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop188" position={[0.687, 2.061, 0.501]} scale={0}>
                                    <mesh
                                        name="RainDrop188_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop188_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop189" position={[0.982, 2.12, 0.639]} scale={0}>
                                    <mesh
                                        name="RainDrop189_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop189_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop190" position={[0.877, 2.083, 1.076]} scale={0}>
                                    <group name="Object_479">
                                        <mesh
                                            name="RainDrop190_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop190_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop191" position={[1.027, 2.085, 1.099]} scale={0}>
                                    <group name="Object_482">
                                        <mesh
                                            name="RainDrop191_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop191_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop192" position={[1.533, 2.058, 0.991]} scale={0}>
                                    <mesh
                                        name="RainDrop192_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop192_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop193" position={[1.659, 2.118, 0.838]} scale={0}>
                                    <mesh
                                        name="RainDrop193_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop193_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop194" position={[1.429, 2.199, 0.825]} scale={0}>
                                    <mesh
                                        name="RainDrop194_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop194_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop195" position={[1.99, 2.17, 0.507]} scale={0}>
                                    <group name="Object_491">
                                        <mesh
                                            name="RainDrop195_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop195_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop196" scale={0}>
                                    <group name="Object_494" />
                                </group>
                                <group name="RainDrop197" scale={0}>
                                    <group name="Object_496" />
                                </group>
                                <group
                                    name="RainDrop198"
                                    position={[2.046, 2.106, -0.005]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.005}>
                                    <mesh
                                        name="RainDrop198_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop198_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop199"
                                    position={[1.683, 2.304, -0.138]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.005}>
                                    <group name="Object_500">
                                        <mesh
                                            name="RainDrop199_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop199_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop200"
                                    position={[1.82, 2.152, -0.179]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.007}>
                                    <group name="Object_503">
                                        <mesh
                                            name="RainDrop200_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop200_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop201" scale={0}>
                                    <group name="Object_506" />
                                </group>
                                <group
                                    name="RainDrop202"
                                    position={[1.621, 2.256, 0.49]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.007}>
                                    <mesh
                                        name="RainDrop202_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop202_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop203"
                                    position={[2.073, 2.068, 0.137]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.011}>
                                    <group name="Object_510">
                                        <mesh
                                            name="RainDrop203_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop203_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="RainDrop204"
                                    position={[1.743, 2.13, 0.287]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.008}>
                                    <mesh
                                        name="RainDrop204_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop204_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop205" position={[2.222, 2.005, 0.588]} scale={0}>
                                    <mesh
                                        name="RainDrop205_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop205_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop206" position={[1.166, 2.285, -0.238]} scale={0}>
                                    <group name="Object_517">
                                        <mesh
                                            name="RainDrop206_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop206_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop207" position={[1.404, 2.333, -0.027]} scale={0}>
                                    <mesh
                                        name="RainDrop207_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop207_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop208" position={[1.506, 2.093, 0.97]} scale={0}>
                                    <group name="Object_522">
                                        <mesh
                                            name="RainDrop208_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop208_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop209" position={[1.926, 2.21, 0.309]} scale={0}>
                                    <mesh
                                        name="RainDrop209_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop209_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group
                                    name="RainDrop210"
                                    position={[1.313, 2.334, 0.071]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={0.012}>
                                    <mesh
                                        name="RainDrop210_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop210_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop211" position={[1.488, 2.228, 0.683]} scale={0}>
                                    <mesh
                                        name="RainDrop211_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop211_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop212" position={[1.919, 2.239, 0.614]} scale={0}>
                                    <group name="Object_531" rotation={[Math.PI, 0, 0]}>
                                        <mesh
                                            name="RainDrop212_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop212_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop213" position={[1.65, 2.239, 1.069]} scale={0}>
                                    <group name="Object_534" rotation={[Math.PI, 0, 0]}>
                                        <mesh
                                            name="RainDrop213_Rain_Mtl_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.RainDrop213_Rain_Mtl_0.geometry}
                                            material={materials.Rain_Mtl}
                                        />
                                    </group>
                                </group>
                                <group name="RainDrop214" position={[1.042, 2.239, 0.35]} scale={0}>
                                    <mesh
                                        name="RainDrop214_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop214_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop215" position={[1.22, 2.239, 0.523]} scale={0}>
                                    <mesh
                                        name="RainDrop215_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop215_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop216" position={[0.36, 1.92, 0.287]} scale={0}>
                                    <mesh
                                        name="RainDrop216_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop216_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                                <group name="RainDrop217" position={[0.408, 1.92, 0.158]} scale={0}>
                                    <mesh
                                        name="RainDrop217_Rain_Mtl_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.RainDrop217_Rain_Mtl_0.geometry}
                                        material={materials.Rain_Mtl}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('/models-3d/cuterRain.glb');
export default AnimationRain;