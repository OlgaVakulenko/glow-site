import { MeshDistortMaterial } from '@react-three/drei';
import { useDepthBuffer } from '@react-three/drei';
import { SpotLight } from '@react-three/drei';
import { GradientTexture } from '@react-three/drei';
import {
  AccumulativeShadows,
  Center,
  Edges,
  Environment,
  Float,
  Instance,
  Instances,
  Lightformer,
  MeshReflectorMaterial,
  MeshTransmissionMaterial,
  RandomizedLight,
  Stage,
  Text3D,
  useGLTF,
} from '@react-three/drei';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Leva, useControls } from 'leva';
import { easing } from 'maath';
import { Suspense, useMemo, useRef } from 'react';
import { MeshBasicMaterial, MeshPhysicalMaterial, TextureLoader } from 'three';
import { RGBELoader } from 'three-stdlib';
import { Vector3, SpotLightShadow as SpotLightShadow2 } from 'three';
import { SpotLightShadow } from '@react-three/drei';

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
      {/* <pointLight
        position={[config.positionX, config.positionY, config.positionZ]}
        intensity={config.intensity}
      /> */}
      {/* <spotLight
        castShadow
        color="white"
        intensity={5}
        position={[config.positionX, config.positionY, config.positionZ]}
      /> */}
      {/* <directionalLight
        castShadow
        intensity={config.intensity}
        // position={[-4, -96, 20]}
        position={[config.positionX, config.positionY, config.positionZ]}
      /> */}
      <directionalLight
        ref={lightRef}
        castShadow
        intensity={6.3}
        position={[-14, 100, 4]}
      />
    </group>
  );
}

function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef();
  useFrame(
    (state, delta) =>
      (group.current.position.z += delta * 10) > 20 &&
      (group.current.position.z = -60)
  );
  return (
    <>
      {/* Ceiling */}
      <Lightformer
        intensity={0.75}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer
              key={i}
              form="circle"
              intensity={2}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[3, 1, 1]}
            />
          ))}
        </group>
      </group>
      {/* Sides */}
      <Lightformer
        intensity={4}
        rotation-y={Math.PI / 2}
        position={[-5, 1, -1]}
        scale={[20, 0.1, 1]}
      />
      <Lightformer
        rotation-y={Math.PI / 2}
        position={[-5, -1, -1]}
        scale={[20, 0.5, 1]}
      />
      <Lightformer
        rotation-y={-Math.PI / 2}
        position={[10, 1, 0]}
        scale={[20, 1, 1]}
      />
      {/* Accent (red) */}
      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer
          form="ring"
          color="red"
          intensity={1}
          scale={10}
          position={[-15, 4, -18]}
          target={[0, 0, 0]}
        />
      </Float>
      {/* Background */}
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        {/* <LayerMaterial side={THREE.BackSide}>
          <Color color="#444" alpha={1} mode="normal" />
          <Depth colorA="blue" colorB="black" alpha={0.5} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
        </LayerMaterial> */}
      </mesh>
    </>
  );
}

function Bg() {
  return (
    <Environment background preset="city" resolution={256} blur={0}>
      <group>
        <Lightformer
          intensity={5}
          form="ring"
          color="#E33230"
          rotation-y={Math.PI / 2}
          position={[3, 2, -1]}
          scale={[10, 10, 1]}
        />
      </group>
    </Environment>
  );
}

function Camera() {
  const ref = useRef();

  useFrame((state, delta) => {
    // return;
    easing.damp3(
      state.camera.position,
      [
        Math.sin(state.pointer.x / 4) * 9,
        3.25 + state.pointer.y,
        Math.cos(state.pointer.x / 4) * 9,
      ],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);

    const c = ref.current;

    // if (Math.random() < 0.05) {
    //   console.log(c);
    // }
    easing.dampC(c, [
      0.7681511472425808,
      Math.max(
        0.031896033067374104,
        Math.min(state.pointer.x, 0.061896033067374104)
      ),
      0.02955683443236377,
    ]);
  });

  return <color ref={ref} attach="background" args={['#E33230']} />;
}

function Env({ perfSucks = false }) {
  const ref = useRef();
  useFrame((state, delta) => {
    // Animate the environment as well as the camera
    if (!perfSucks) {
      easing.damp3(
        ref.current.rotation,
        [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x],
        0.2,
        delta
      );
      easing.damp3(
        state.camera.position,
        [
          Math.sin(state.pointer.x / 4) * 9,
          1.25 + state.pointer.y,
          Math.cos(state.pointer.x / 4) * 9,
        ],
        0.5,
        delta
      );
      state.camera.lookAt(0, 0, 0);
    }
  });
  // Runtime environments can be too slow on some systems, better safe than sorry with PerfMon
  return (
    <Environment
      frames={perfSucks ? 1 : Infinity}
      // preset="city"
      resolution={256}
      background
      blur={1}
      far={10}
    >
      <color attach="background" args={['#e33230']} />

      <Lightformer
        intensity={4}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <Lightformer
        intensity={4}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <group rotation={[Math.PI / 2, 1, 0]}>
        {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
          <Lightformer
            key={i}
            intensity={1}
            rotation={[Math.PI / 4, 0, 0]}
            position={[x, 4, i * 4]}
            scale={[4, 1, 1]}
          />
        ))}
        <Lightformer
          intensity={0.5}
          rotation-y={Math.PI / 2}
          position={[-5, 1, -1]}
          scale={[50, 2, 1]}
        />
        <Lightformer
          intensity={0.5}
          rotation-y={Math.PI / 2}
          position={[-5, -1, -1]}
          scale={[50, 2, 1]}
        />
        <Lightformer
          intensity={0.5}
          rotation-y={-Math.PI / 2}
          position={[10, 1, 0]}
          scale={[50, 2, 1]}
        />
      </group>
      <group ref={ref}>
        <Lightformer
          intensity={2}
          form="ring"
          color="#e33230"
          rotation-y={Math.PI / 2}
          position={[-5, 2, -1]}
          scale={[10, 10, 1]}
        />
      </group>
    </Environment>
  );
}

function Light2() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[2.5, 8, 5]}
        intensity={1.5}
        shadow-mapSize={1024}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, -10, 10, 0.1, 50]}
        />
      </directionalLight>
      <pointLight position={[-10, 0, -20]} color="white" intensity={1} />
      <pointLight position={[0, -10, 0]} intensity={1} />
    </>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0">
      <Suspense>
        <Leva hidden />
        <Canvas
          shadows
          // orthographic
          dpr={[1, 2]}
          // camera={{ position: [0, 0, 0], zoom: 80, rotation: [0, 5, 0] }}
          camera={{
            position: [0.2, 19, 62],
            zoom: 4,
          }}
          // camera={{ position: [0, 0, 0], zoom: 1 }}
          // camera={{ position: [0, 0, 4], fov: 40 }}
        >
          {/* <Bg /> */}
          {/* <Environment frames={Infinity} resolution={256} background blur={1}>
            <Lightformers />
          </Environment> */}
          {/* <OrbitControls /> */}
          {/* <PerspectiveCamera position={[0, 25, 0]} zoom={1} makeDefault /> */}

          {/* <axesHelper scale={80} /> */}
          {/* <CameraControls /> */}
          <Camera />
          {/* <Env /> */}
          <Light />
          {/* <Env /> */}

          <Stage
            adjustCamera={false}
            preset="rembrandt"
            intensity={0.6}
            environment="city"
          >
            <Text />
          </Stage>

          <Shadows />
          {/* <ambientLight intensity={1} /> */}
          {/* <directionalLight castShadow /> */}
        </Canvas>
      </Suspense>
    </div>
  );
}

function Shadows() {
  const opacity = 0.8;

  return (
    <AccumulativeShadows
      frames={100}
      alphaTest={0.7}
      opacity={opacity}
      // color="#941209"
      color="red"
      scale={10}
      position={[1, -0.81, -1]}
    >
      <RandomizedLight
        amount={9}
        radius={3.5}
        ambient={0.15}
        intensity={1}
        position={[-1.5, 2.5, -2.5]}
        bias={0.001}
      />
    </AccumulativeShadows>
  );
}

function Text({}) {
  const texture = useLoader(
    RGBELoader,
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_sunset_puresky_1k.hdr'
  );

  // const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
  //   'PavingStones092_1K_Color.jpg',
  //   'PavingStones092_1K_Displacement.jpg',
  //   'PavingStones092_1K_Normal.jpg',
  //   'PavingStones092_1K_Roughness.jpg',
  //   'PavingStones092_1K_AmbientOcclusion.jpg',
  // ])

  const [colorMap, metalness, normalMap, roughnessMap] = useLoader(
    TextureLoader,
    [
      'scene/Metal036_1K_Color.jpg',
      'scene/Metal036_1K_Metalness.jpg',
      'scene/Metal036_1K_NormalDX.jpg',
      'scene/Metal036_1K_Roughness.jpg',
    ]
  );
  // const [rough, color] = useTexture([
  //   'scene/rock_tile_floor_rough_1k.jpg',
  //   'scene/rock_tile_floor_ao_1k.jpg',
  // ]);

  // const [diff, disp, roughn] = useLoader(TextureLoader, [
  //   'scene/rock_tile_floor_diff_1k.jpg',
  //   'scene/rock_tile_floor_disp_1k.png',
  //   'scene/rock_tile_floor_rough_1k.exr',
  // ]);
  // const [text2] = useTexture()

  const { bevelSize, bevelSegments, curveSegments, bevelThickness, ...config } =
    useControls({
      backside: true,
      backsideThickness: { value: 1.1, min: 0, max: 2 },
      samples: { value: 16, min: 1, max: 32, step: 1 },
      resolution: { value: 128, min: 64, max: 2048, step: 64 },
      transmission: { value: 0.49, min: 0, max: 1 },
      clearcoat: { value: 0, min: 0, max: 1 },
      clearcoatRoughness: { value: 0.1, min: 0, max: 1 },
      thickness: { value: 0.2, min: 0, max: 5 },
      chromaticAberration: { value: 1.7, min: 0, max: 5 },
      anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
      metalness: { value: 1, min: 0, max: 1 },
      roughness: { value: 0.78, min: 0, max: 1, step: 0.01 },
      distortion: { value: 0.46, min: 0, max: 4, step: 0.01 },
      distortionScale: { value: 0.05, min: 0.01, max: 1, step: 0.01 },
      temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
      // ior: { value: 0, min: 0, max: 2, step: 0.01 },
      color: '#19191B',
      gColor: '#ff7eb3',
      shadow: '#750d57',
      autoRotate: false,
    });
  // const config = config3;
  // const texture = useLoader(
  //   RGBELoader,
  //   'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr'
  // );

  useThree(({ camera }) => {
    // camera.lookAt(0, -2, 0);
  });

  useFrame(({ camera }) => {
    // if (Math.random() < 0.05) {
    //   console.log('camera', camera.position, camera.zoom);
    // }
  });

  const material = useMemo(() => {
    return new MeshPhysicalMaterial({
      color: '#fff',
      emissive: '#000',
      roughness: 0,
      metalness: 1,
    });
  }, []);
  console.log(config);

  return (
    <group>
      <Center
        // scale={[0.8, 1, 1]}
        scale={[1, 1, 1]}
        front
        top
        rotation={[0, 0.4, 0]}
        position={[0, 0, 0]}
      >
        <Text3D
          font="/Almaz_Bold.json"
          castShadow
          bevelEnabled
          scale={1.6}
          height={0.2}
          bevelSize={0.0}
          bevelSegments={10}
          curveSegments={128}
          bevelThickness={0.01}
        >
          g<MeshTransmissionMaterial {...config} background={texture} />
          <MeshReflectorMaterial />
        </Text3D>
      </Center>
    </group>
  );
}
