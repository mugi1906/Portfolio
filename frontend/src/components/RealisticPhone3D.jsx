import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Bounds,
    Center,
    Environment,
    Float,
    useGLTF,
    useTexture,
} from "@react-three/drei";
import * as THREE from "three";

function PhoneModel() {
    const phoneRef = useRef();

    const { scene } = useGLTF("/models/iphone_14_pro_max_deep_purple.glb");

    const screenTexture = useTexture(
        "/images/transport-tracker-screen1.jpeg"
    );

    useEffect(() => {
        if (!scene || !screenTexture) return;

        // ==========================================
        // SCREEN TEXTURE SETTINGS
        // ==========================================

        screenTexture.colorSpace = THREE.SRGBColorSpace;

        // Vertical flip
        screenTexture.flipY = false;

        // Rotate image 180°
        screenTexture.rotation = Math.PI;

        // Rotate from center
        screenTexture.center.set(0.5, 0.5);

        screenTexture.repeat.set(1.9, 1.20);
        screenTexture.offset.set(0, 0.04);

        screenTexture.minFilter = THREE.LinearFilter;
        screenTexture.magFilter = THREE.LinearFilter;

        screenTexture.anisotropy = 16;
        screenTexture.generateMipmaps = false;
        screenTexture.needsUpdate = true;


        // ==========================================
        // FIND SCREEN MESH
        // ==========================================

        scene.traverse((child) => {

            if (!child.isMesh) return;

            if (child.name === "YbXWdqEcjbfTKuN_0") {

                child.material = new THREE.MeshBasicMaterial({
                    map: screenTexture,
                    toneMapped: false,
                    side: THREE.DoubleSide,
                });

                child.visible = true;
                child.renderOrder = 10;
            }

        });

    }, [scene, screenTexture]);


    // =====================================================
    // ONLY ROTATION — NO FLOAT / NO UP-DOWN
    // =====================================================

    useFrame((state, delta) => {
        if (!phoneRef.current) return;

        // ONLY Y rotation
        phoneRef.current.rotation.y += delta * 1.2;

        // Fixed cross angle
        phoneRef.current.rotation.x = 0;

        phoneRef.current.rotation.z = -0.10;
    });


    return (
        <group ref={phoneRef} scale={1.35}>

            <Center>
                <primitive object={scene} />
            </Center>

        </group>
    );
}


export default function RealisticPhone3D() {

    return (
        <div className="real-phone-canvas">

            <Canvas
                camera={{
                    position: [0, 0, 0.55],
                    fov: 35,
                }}

                dpr={[1, 2]}
                shadows
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
            >

                {/* =================================================
                    LIGHTING
                ================================================= */}

                <ambientLight intensity={0.8} />

                <directionalLight
                    position={[3, 5, 4]}
                    intensity={1.5}
                />

                <directionalLight
                    position={[-4, 2, -2]}
                    intensity={0.8}
                />

                <Environment
                    preset="studio"
                    environmentIntensity={0.5}
                />


                {/* PHONE */}

                <PhoneModel />

                <mesh
                    position={[0, -0.62, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[1.8, 0.55, 1]}
                >
                    <circleGeometry args={[0.55, 64]} />
                    <meshBasicMaterial
                        color="#000000"
                        transparent
                        opacity={0.18}
                        depthWrite={false}
                    />
                </mesh>

            </Canvas>

        </div>
    );
}


useGLTF.preload(
    "/models/iphone_14_pro_max_deep_purple.glb"
);