"use client";

import { Float } from "@react-three/drei";
import type { ReactNode } from "react";

type Vector3Tuple = [number, number, number];

type FloatingFruitKind = "strawberry" | "banana" | "kiwi" | "leaf" | "orb";

type FloatingFruitProps = {
  kind: FloatingFruitKind;
  position?: Vector3Tuple;
  rotation?: Vector3Tuple;
  scale?: number;
  speed?: number;
};

function Strawberry() {
  return (
    <group>
      <mesh scale={[0.46, 0.58, 0.42]}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial color="#d94a4a" roughness={0.62} metalness={0.02} />
      </mesh>
      <mesh position={[0, 0.58, 0]} scale={[0.36, 0.12, 0.36]}>
        <sphereGeometry args={[1, 16, 12]} />
        <meshStandardMaterial color="#2f6b4f" roughness={0.8} />
      </mesh>
      {[
        [-0.18, 0.16, 0.36],
        [0.18, -0.04, 0.38],
        [0, -0.24, 0.39],
      ].map((seed, index) => (
        <mesh key={index} position={seed as Vector3Tuple} scale={[0.035, 0.06, 0.018]}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial color="#fff3c7" roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function Banana() {
  return (
    <group rotation={[0.1, 0.1, -0.45]}>
      <mesh scale={[1, 0.78, 1]}>
        <torusGeometry args={[0.58, 0.105, 12, 40, Math.PI * 1.25]} />
        <meshStandardMaterial color="#f2b84b" roughness={0.55} metalness={0.02} />
      </mesh>
      <mesh position={[0.56, 0.08, 0]} scale={[0.09, 0.08, 0.09]}>
        <sphereGeometry args={[1, 10, 10]} />
        <meshStandardMaterial color="#7a4e2d" roughness={0.8} />
      </mesh>
    </group>
  );
}

function Kiwi() {
  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      <mesh>
        <cylinderGeometry args={[0.42, 0.42, 0.18, 28]} />
        <meshStandardMaterial color="#7a4e2d" roughness={0.72} />
      </mesh>
      <mesh position={[0, 0.095, 0]}>
        <cylinderGeometry args={[0.34, 0.34, 0.035, 28]} />
        <meshStandardMaterial color="#9fcb63" roughness={0.58} />
      </mesh>
      <mesh position={[0, 0.118, 0]} scale={[0.16, 0.016, 0.16]}>
        <sphereGeometry args={[1, 16, 10]} />
        <meshStandardMaterial color="#fff8ec" roughness={0.65} />
      </mesh>
    </group>
  );
}

function LeafShape() {
  return (
    <group rotation={[0.1, 0.2, -0.35]}>
      <mesh scale={[0.22, 0.56, 0.055]}>
        <sphereGeometry args={[1, 18, 18]} />
        <meshStandardMaterial color="#3f8f67" roughness={0.74} />
      </mesh>
      <mesh position={[0, -0.28, 0]} rotation={[0, 0, 0.18]} scale={[0.035, 0.34, 0.025]}>
        <cylinderGeometry args={[1, 1, 1, 8]} />
        <meshStandardMaterial color="#214d3a" roughness={0.8} />
      </mesh>
    </group>
  );
}

function SoftOrb() {
  return (
    <mesh>
      <sphereGeometry args={[1, 24, 24]} />
      <meshStandardMaterial color="#e8f3ed" transparent opacity={0.52} roughness={0.9} />
    </mesh>
  );
}

function getFruitNode(kind: FloatingFruitKind): ReactNode {
  if (kind === "strawberry") return <Strawberry />;
  if (kind === "banana") return <Banana />;
  if (kind === "kiwi") return <Kiwi />;
  if (kind === "leaf") return <LeafShape />;
  return <SoftOrb />;
}

export function FloatingFruit({
  kind,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  speed = 1,
}: FloatingFruitProps) {
  return (
    <Float speed={speed} rotationIntensity={0.35} floatIntensity={0.42}>
      <group position={position} rotation={rotation} scale={scale}>
        {getFruitNode(kind)}
      </group>
    </Float>
  );
}
