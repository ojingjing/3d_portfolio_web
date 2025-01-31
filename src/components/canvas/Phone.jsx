import { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { TextureLoader } from "three";
import * as THREE from "three";

const Phone = ({ wallpaperImage }) => {
  const phone = useGLTF("/apple_iphone/scene.gltf");
  const wallpaperRef = useRef();

  useEffect(() => {
    if (!phone) return;

    phone.scene.traverse((node) => {
      if (node.name === "Body_Wallpaper_0") {
        wallpaperRef.current = node.material;
        if (wallpaperRef.current.map) {
          wallpaperRef.current.map.dispose();
        }
        const textureLoader = new TextureLoader();
        textureLoader.load(wallpaperImage, (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          //   texture.needsUpdate = true;
          wallpaperRef.current.map = texture;
          //   wallpaperRef.current.needsUpdate = true;
        });
      }
    });
  }, [phone, wallpaperImage]);

  return (
    <mesh>
      <hemisphereLight intensity={0} groundColor="black" />
      <pointLight intensity={2} />
      <primitive
        object={phone.scene}
        scale={5.5}
        position={[0, 0, 0]}
        rotation={[0, Math.PI, 0]}
      />
    </mesh>
  );
};

const PhoneCanvas = ({ wallpaperImage }) => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Phone wallpaperImage={wallpaperImage} />

        <ambientLight intensity={5.5} />
        <directionalLight position={[10, 10, 10]} intensity={10} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default PhoneCanvas;
