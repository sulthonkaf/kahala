"use client";

import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useRef } from "react";
import type { Group } from "three";
import { FloatingFruit } from "@/features/three/components/floating-fruit";

function CampaignBowlMark() {
  const markRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!markRef.current) return;
    markRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.34) * 0.18;
    markRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.24) * 0.035;
  });

  return (
    <group ref={markRef} position={[0.2, -0.16, 0]} scale={0.95}>
      <mesh position={[0, -0.28, 0]} scale={[1.28, 0.34, 0.72]}>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial color="#fff8ec" roughness={0.48} metalness={0.03} />
      </mesh>
      <mesh position={[0, -0.05, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.25, 0.68, 1]}>
        <torusGeometry args={[0.74, 0.052, 14, 54]} />
        <meshStandardMaterial color="#f2b84b" roughness={0.42} metalness={0.04} />
      </mesh>
      <mesh position={[-0.24, 0.2, 0.16]} scale={[0.3, 0.22, 0.3]}>
        <sphereGeometry args={[1, 18, 18]} />
        <meshStandardMaterial color="#d94a4a" roughness={0.58} />
      </mesh>
      <mesh position={[0.18, 0.24, 0.08]} scale={[0.28, 0.22, 0.28]}>
        <sphereGeometry args={[1, 18, 18]} />
        <meshStandardMaterial color="#9fcb63" roughness={0.62} />
      </mesh>
      <mesh position={[0.43, 0.16, -0.02]} scale={[0.24, 0.18, 0.24]}>
        <sphereGeometry args={[1, 18, 18]} />
        <meshStandardMaterial color="#f2b84b" roughness={0.54} />
      </mesh>
    </group>
  );
}

function FloatingCampaignCard({
  position,
  rotation,
  color,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
}) {
  return (
    <Float speed={0.85} floatIntensity={0.24} rotationIntensity={0.18}>
      <group position={position} rotation={rotation}>
        <mesh scale={[0.56, 0.34, 0.035]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={color} roughness={0.5} metalness={0.02} />
        </mesh>
        <mesh position={[0, 0.03, 0.035]} scale={[0.34, 0.035, 0.018]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#ffffff" roughness={0.62} />
        </mesh>
      </group>
    </Float>
  );
}

function CampaignSceneContent() {
  return (
    <>
      <ambientLight intensity={1.35} />
      <directionalLight position={[3.2, 3.8, 4]} intensity={2.05} color="#fff0cf" />
      <pointLight position={[-2, 1.2, 2]} intensity={0.56} color="#e8f3ed" />
      <group position={[0.12, -0.04, 0]}>
        <CampaignBowlMark />
        <FloatingCampaignCard position={[-1.16, 0.82, -0.16]} rotation={[0.16, 0.26, -0.18]} color="#2f6b4f" />
        <FloatingCampaignCard position={[1.18, -0.54, -0.24]} rotation={[-0.12, -0.24, 0.16]} color="#f2b84b" />
        <FloatingFruit kind="strawberry" position={[-1.36, -0.35, 0.06]} scale={0.28} speed={1.2} />
        <FloatingFruit kind="kiwi" position={[1.34, 0.72, 0.04]} scale={0.3} speed={1.05} />
        <FloatingFruit kind="leaf" position={[0.02, 1.12, -0.1]} rotation={[0.1, 0.1, 0.6]} scale={0.34} speed={1.25} />
        <FloatingFruit kind="orb" position={[-1.72, 0.2, -0.56]} scale={0.32} speed={0.78} />
      </group>
    </>
  );
}

export function CampaignScene() {
  return (
    <motion.div
      aria-hidden="true"
      className="h-[280px] w-full overflow-hidden lg:h-[340px]"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <Canvas
        className="h-full w-full"
        camera={{ position: [0, 0.05, 4.25], fov: 38 }}
        dpr={[1, 1.25]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <CampaignSceneContent />
      </Canvas>
    </motion.div>
  );
}
