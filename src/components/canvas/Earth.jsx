import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Html } from '@react-three/drei';
import CanvasLoader from "../Loader";
import Ring from "./Ring";
import sphereEl from '../canvas/AIBlue.glb'

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive  object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const Sphere = ({ position, scale = [0.2, 0.2, 0.3] }) => {
    const { scene } = useGLTF(sphereEl);
  
    return (
        <group scale={scale}>
      <mesh position={position}>
        <primitive object={scene} />
      </mesh>
      </group>
    );
  };
  

  const EarthCanvas = () => {
    const ringPosition = [0, 0, 0];
  
    return (
      <Canvas
        style={{ height: "400px" }}
        className="earth"
        shadows
        frameloop="demand"
        dpr={[1, 2]}
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
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
  
          {/* Back part of the ring */}
          <Ring position={ringPosition} depthWrite={false} depthTest={false} />
  
          {/* HTML content */}
          <Html position={[
                ringPosition[0] + Math.cos((0 / 3) * Math.PI * 2) * 5,
         
              ]}>
  <div className="qwert"></div>
          </Html>
  
          {/* Front part of the ring */}
          <Ring />
  
          {[...Array(3)].map((_, index) => (
            <Sphere
              key={index}
              position={[
                ringPosition[0] + Math.cos((index / 3) * Math.PI * 2) * 5,
                ringPosition[1] + Math.sin((index / 3) * Math.PI * 2) * 5,
                ringPosition[2],
              ]}
            />
          ))}
          <Preload all />
        </Suspense>
      </Canvas>
    );
  };
  
  export default EarthCanvas;