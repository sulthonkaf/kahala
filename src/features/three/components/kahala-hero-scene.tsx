"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useRef } from "react";
import type { Group } from "three";
import { FloatingFruit } from "@/features/three/components/floating-fruit";

function HeroBowl() {
  const bowlRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!bowlRef.current) return;
    bowlRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.28) * 0.11;
    bowlRef.current.position.y = Math.sin(clock.elapsedTime * 0.75) * 0.035 - 0.24;
  });

  return (
    <group ref={bowlRef} position={[0, -0.22, 0]} rotation={[0.08, -0.18, 0]} scale={1.08}>
      <mesh position={[0, -0.34, 0]} scale={[1.55, 0.42, 0.92]}>
        <sphereGeometry args={[1, 36, 18]} />
        <meshStandardMaterial color="#2f6b4f" roughness={0.62} metalness={0.04} />
      </mesh>
      <mesh position={[0, -0.1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.56, 0.9, 1]}>
        <torusGeometry args={[0.78, 0.055, 16, 64]} />
        <meshStandardMaterial color="#fff8ec" roughness={0.54} metalness={0.02} />
      </mesh>
      <mesh position={[0, 0.03, 0]} scale={[1.18, 0.18, 0.68]}>
        <sphereGeometry args={[1, 28, 14]} />
        <meshStandardMaterial color="#e8f3ed" roughness={0.7} />
      </mesh>
      <FloatingFruit kind="strawberry" position={[-0.48, 0.26, 0.2]} rotation={[0.1, 0.2, -0.2]} scale={0.44} speed={1.35} />
      <FloatingFruit kind="kiwi" position={[0.12, 0.29, 0.28]} rotation={[0.4, 0.2, 0]} scale={0.48} speed={1.1} />
      <FloatingFruit kind="banana" position={[0.5, 0.2, 0.06]} rotation={[0.08, 0, -0.3]} scale={0.48} speed={1.2} />
      <FloatingFruit kind="leaf" position={[-0.04, 0.42, -0.04]} rotation={[0.1, 0, 0.5]} scale={0.42} speed={1.45} />
    </group>
  );
}

function HeroSceneContent() {
  return (
    <>
      <ambientLight intensity={1.65} />
      <directionalLight position={[3.5, 4, 4]} intensity={2.15} color="#fff4da" />
      <pointLight position={[-2.8, 1.8, 2.4]} intensity={0.55} color="#e8f3ed" />
      <group position={[0, -0.03, 0]} scale={0.76}>
        <HeroBowl />
        <FloatingFruit kind="strawberry" position={[-1.22, 1.05, -0.12]} rotation={[0.2, -0.4, 0.1]} scale={0.34} speed={1.15} />
        <FloatingFruit kind="banana" position={[1.18, 0.82, -0.16]} rotation={[0.2, 0.3, -0.35]} scale={0.38} speed={0.95} />
        <FloatingFruit kind="kiwi" position={[1.05, -0.82, 0.02]} rotation={[0.25, -0.15, 0]} scale={0.32} speed={1.2} />
        <FloatingFruit kind="leaf" position={[-1.1, -0.56, 0]} rotation={[0.2, -0.25, 0.5]} scale={0.36} speed={1.35} />
        <FloatingFruit kind="orb" position={[-1.38, 0.05, -0.58]} scale={0.34} speed={0.8} />
        <FloatingFruit kind="orb" position={[1.38, 0.05, -0.52]} scale={0.26} speed={0.9} />
      </group>
    </>
  );
}

export function KahalaHeroScene() {
  return (
    <motion.div
      aria-hidden="true"
      className="relative h-[360px] w-full overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_52%_45%,#ffffff_0,#fff8ec_35%,#e8f3ed_78%)] sm:h-[460px] lg:h-[560px]"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Canvas
        className="h-full w-full"
        camera={{ position: [0, 0.18, 5.45], fov: 34 }}
        dpr={[1, 1.35]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <HeroSceneContent />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-10 bottom-7 h-px bg-gradient-to-r from-transparent via-emerald-700/20 to-transparent" />
    </motion.div>
  );
}
