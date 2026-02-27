import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';

function LaptopModel({ isMobile }) {
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
      scale={isMobile ? 2.5 : 4} 
      position={[0, 0, 0.1]} 
      rotation={[0.3, 0, 0]} 
    />
  );
}

export default function Hero3D() {
  const isMobile = window.innerWidth <= 768;

  const containerStyle = isMobile ? {
    width: '100%',
    height: '300px',
    position: 'relative',
    margin: '20px 0'
  } : {
    width: '50%',
    height: '500px',
    background: 'transparent',
    position: "absolute",
    top: '90px',
    right: '50px'
  };

  return (
    <div style={containerStyle}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        
        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <LaptopModel isMobile={isMobile}/>
          </Float>
        </Suspense>

      </Canvas>
    </div>
  );
}