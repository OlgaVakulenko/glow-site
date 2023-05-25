import { Float } from '@react-three/drei';
import { Stage } from '@react-three/drei';
import { useTexture } from '@react-three/drei';
import { MeshDistortMaterial } from '@react-three/drei';
import {
  AccumulativeShadows,
  Center,
  Edges,
  Environment,
  Instance,
  Instances,
  Lightformer,
  MeshTransmissionMaterial,
  RandomizedLight,
  Text3D,
  useGLTF,
} from '@react-three/drei';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Leva, useControls } from 'leva';
import { easing } from 'maath';
import { Suspense, useMemo, useRef } from 'react';
import { MeshBasicMaterial, MeshPhysicalMaterial, TextureLoader } from 'three';
import { RGBELoader } from 'three-stdlib';

const deg2rad = (degrees) => degrees * (Math.PI / 180);

let key = 0;

function Light() {
  const lightRef = useRef();
  const config = useControls({
    positionX: { value: 28, min: -100, max: 100 },
    positionY: { value: -18, min: -100, max: 100 },
    positionZ: { value: 30, min: -100, max: 100 },
    intensity: { value: 0.3, min: 0, max: 20 },
  });

  useFrame((state, delta) => {
    if (!lightRef.current) return;
    easing.damp3(
      lightRef.current.position,
      [
        -Math.sin(state.pointer.x / 4) * 1,
        Math.random() * 30 + state.pointer.y,
        Math.cos(state.pointer.x / 3) * 9,
      ],
      0.5,
      delta
    );
  });

  return (
    <group>
      <ambientLight intensity={0.2} />
      <directionalLight
        ref={lightRef}
        castShadow
        intensity={6.3}
        position={[-14, 100, 4]}
      />
    </group>
  );
}

function Camera() {
  useFrame((state, delta) => {
    // return;
    easing.damp3(
      state.camera.position,
      [
        Math.sin(state.pointer.x / 4) * 9,
        3.25 + state.pointer.y,
        Math.cos(state.pointer.x / 4) * 9,
      ],
      0.1,
      delta
    );
    state.camera.lookAt(0, 0.5, 0);
  });

  return null;
}

export default function Scene() {
  return (
    <div className="absolute inset-0">
      <Suspense>
        <Leva />
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ fov: 50, position: [0.2, 19, 62] }}
        >
          <Camera />
          <Suspense fallback={null}>
            <Stage
              scale={0.5}
              preset="rembrandt"
              intensity={1}
              environment="city"
            >
              <Text />
            </Stage>
          </Suspense>
          {/* <OrbitControls ref={ref} autoRotate /> */}
        </Canvas>
      </Suspense>
    </div>
  );
}

function Text({}) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/scene/model/untitled.gltf');
  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <mesh
          scale={5}
          name="Text"
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials['Material.001']}
          // position={[0.03, 0.19, -0.02]}
          rotation={[1.54, 0.04, 0.04]}
        />
      </group>
    </group>
  );
}
