import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function CentralCore({ activeCategory }) {
  const crystalRef = useRef(null);
  const ring1 = useRef(null);
  const ring2 = useRef(null);
  const ring3 = useRef(null);

  // Map category to subtle core accent color
  const coreColor = React.useMemo(() => {
    switch (activeCategory) {
      case 'Frontend':
        return '#06b6d4'; // Cyan
      case 'Backend':
        return '#22c55e'; // Emerald
      case 'Database':
        return '#10b981'; // Green
      case 'Languages':
        return '#eab308'; // Amber
      case 'Tools':
        return '#f97316'; // Orange
      default:
        return '#38bdf8'; // Sky blue
    }
  }, [activeCategory]);

  useFrame((_, delta) => {
    if (crystalRef.current) {
      crystalRef.current.rotation.y += delta * 0.7;
      crystalRef.current.rotation.x += delta * 0.3;
    }
    if (ring1.current) ring1.current.rotation.z += delta * 0.5;
    if (ring2.current) ring2.current.rotation.x -= delta * 0.4;
    if (ring3.current) ring3.current.rotation.y += delta * 0.6;
  });

  return (
    <group>
      {/* Central Gem / Octahedron */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
        <mesh ref={crystalRef}>
          <octahedronGeometry args={[1.1, 0]} />
          <meshStandardMaterial
            color={coreColor}
            emissive={coreColor}
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.8}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Wireframe Outline Over Gem */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
        <mesh>
          <octahedronGeometry args={[1.14, 0]} />
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.3} />
        </mesh>
      </Float>

      {/* Orbital Gimbal Rings */}
      <mesh ref={ring1} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.8, 0.018, 16, 64]} />
        <meshBasicMaterial color={coreColor} transparent opacity={0.6} />
      </mesh>
      <mesh ref={ring2} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.1, 0.016, 16, 64]} />
        <meshBasicMaterial color="#94a3b8" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring3} rotation={[Math.PI / 6, -Math.PI / 4, 0]}>
        <torusGeometry args={[2.4, 0.015, 16, 64]} />
        <meshBasicMaterial color="#64748b" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

export default function SkillScene({ activeCategory }) {
  return (
    <div className="relative w-full h-[280px] sm:h-[340px] flex items-center justify-center select-none">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        className="w-full h-full"
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[3, 3, 3]} intensity={1.5} color="#38bdf8" />
        <pointLight position={[-3, -3, -3]} intensity={1} color="#6366f1" />
        <CentralCore activeCategory={activeCategory} />
      </Canvas>
    </div>
  );
}
