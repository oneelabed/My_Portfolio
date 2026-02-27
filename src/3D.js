import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';

function LaptopModel() {
  const { scene } = useGLTF('/laptop.glb'); 
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5; 
    }
  });
  return (
    <primitive 
      ref={meshRef}
      object={scene} 
      scale={4} 
      position={[0, 0, 0.1]} 
      rotation={[0.3, 0, 0]} 
    />
  );
}

export default function Hero3D() {
  return (
    <div style={{ width: '50%',
                  height: '500px',
                  background: 'transparent',
                  position: "absolute",
                  top: '90px',
                  right: '50px'}}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        
        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <LaptopModel />
          </Float>
        </Suspense>

      </Canvas>
    </div>
  );
}