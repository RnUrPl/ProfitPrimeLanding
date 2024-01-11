import { useGLTF } from '@react-three/drei';
import React from 'react';
import ringEl from './NotColorEl.glb';

const Ring = ({ scale = [0.1, 0.1, 0.1], numberOfSpheres = 3 }) => {
    const { scene } = useGLTF(ringEl);
  
    return (
        <group scale={scale}>
        <mesh>
          <primitive object={scene} />
        </mesh>
       
      </group>
    );
  };
  
  
  
  export default Ring;