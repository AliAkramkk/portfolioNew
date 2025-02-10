import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const HeroBackground = () => {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/* Example: A spinning sphere */}
        <Sphere visible args={[1, 32, 32]} scale={2}>
          <meshStandardMaterial color="#4CAF50" wireframe />
        </Sphere>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default HeroBackground