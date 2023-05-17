import { Float } from '@react-three/drei';
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
import { MeshBasicMaterial, MeshPhysicalMaterial } from 'three';
import { RGBELoader } from 'three-stdlib';

const deg2rad = (degrees) => degrees * (Math.PI / 180);

let key = 0;

function Env() {
  const intensity = 0.1;

  return (
    <Environment resolution={256}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <Lightformer
          intensity={intensity * 4}
          rotation-x={Math.PI / 2}
          position={[0, 5, -9]}
          scale={[10, 10, 1]}
          color="yellow"
        />
        {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
          <Lightformer
            key={i}
            form="circle"
            intensity={intensity * 4}
            rotation={[Math.PI / 2, 0, 0]}
            position={[x, 4, i * 4]}
            scale={[4, 1, 1]}
            color="red"
          />
        ))}
        <Lightformer
          intensity={intensity * 2}
          rotation-y={Math.PI / 2}
          position={[-5, 1, -1]}
          scale={[50, 2, 1]}
          color="blue"
        />
        <Lightformer
          intensity={intensity * 2}
          rotation-y={Math.PI / 2}
          position={[-5, -1, -1]}
          scale={[50, 2, 1]}
          color="blue"
        />
        <Lightformer
          intensity={intensity * 2}
          rotation-y={-Math.PI / 2}
          position={[10, 1, 0]}
          scale={[50, 2, 1]}
        />
      </group>
    </Environment>
  );
}

function Light() {
  const config = useControls({
    positionX: { value: 6, min: -100, max: 100 },
    positionY: { value: 6, min: -100, max: 100 },
    positionZ: { value: 18, min: -100, max: 100 },
    intensity: 22,
  });

  return (
    <group>
      <ambientLight />
      {/* <pointLight
        position={[config.positionX, config.positionY, config.positionZ]}
        intensity={config.intensity}
      /> */}
      <directionalLight castShadow intensity={0.6} position={[0, 0, 10]} />
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
    <Environment background preset="night" resolution={256} blur={0}>
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
          {/* <color attach="background" args={['#FFF']} /> */}

          {/* <Bg /> */}
          {/* <Environment frames={Infinity} resolution={256} background blur={1}>
            <Lightformers />
          </Environment> */}
          {/* <OrbitControls /> */}
          {/* <PerspectiveCamera position={[0, 25, 0]} zoom={1} makeDefault /> */}

          {/* <axesHelper scale={80} /> */}
          {/* <CameraControls /> */}
          <Camera />
          {/* <Light /> */}
          <Env />
          <Text />
          <AccumulativeShadows
            frames={100}
            alphaTest={0.7}
            opacity={0.7}
            color="#941209"
            scale={10}
            position={[1, -0.005, 0]}
          >
            <RandomizedLight
              amount={8}
              radius={10}
              ambient={0.2}
              intensity={1}
              position={[-1.5, 2.5, -2.5]}
              bias={0.001}
            />
          </AccumulativeShadows>
        </Canvas>
      </Suspense>
    </div>
  );
}

const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => {
  const material = useMemo(() => {
    const material = new MeshBasicMaterial({
      color: '#222',
      opacity: 0.2,
      transparent: true,
    });

    return material;
  }, []);

  // Renders a grid and crosses as instances
  return (
    <Instances position={[0, 0, 0]} rotation={[0, 0.4, 0]}>
      <planeGeometry args={[lineWidth, height]} />
      <meshBasicMaterial material={material} />
      {Array.from({ length: number }, (_, y) =>
        Array.from({ length: number }, (_, x) => (
          <group
            key={x + ':' + y}
            position={[
              x * 2 - Math.floor(number / 2) * 2,
              -0.01,
              y * 2 - Math.floor(number / 2) * 2,
            ]}
          >
            <Instance rotation={[-Math.PI / 2, 0, 0]} />
            <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
          </group>
        ))
      )}
      <gridHelper
        material={material}
        args={[100, 100, '#222', '#222']}
        position={[0, -0.01, 0]}
        opacity={0.1}
        transparent={true}
      />
    </Instances>
  );
};

function Cursor(props) {
  const ref = useRef();
  const { nodes } = useGLTF('/cursor.glb');

  // Animate gradient
  // useFrame((state) => {
  //   const sin = Math.sin(state.clock.elapsedTime / 2);
  //   const cos = Math.cos(state.clock.elapsedTime / 2);
  //   // ref.current.layers[0].origin.set(cos / 2, 0, 0)
  //   // ref.current.layers[1].origin.set(cos, sin, cos)
  //   // ref.current.layers[2].origin.set(sin, cos, sin)
  //   // ref.current.layers[3].origin.set(cos, sin, cos)
  // });

  return (
    <mesh {...props} geometry={nodes.Cube.geometry}>
      {/* <LayerMaterial ref={ref} toneMapped={false}> */}
      {/* <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * gradient} far={0.5} origin={[0, 0, 0]} />
        <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * gradient} far={2} origin={[0, 1, 1]} />
        <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * gradient} far={3} origin={[0, 1, -1]} />
        <Depth colorA="white" colorB="red" alpha={1} mode="overlay" near={1.5 * gradient} far={1.5} origin={[1, -1, -1]} />
        <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} /> */}
      {/* </LayerMaterial> */}
      <Edges color="white" />
    </mesh>
  );
}

function Text({}) {
  const texture = useLoader(
    RGBELoader,
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_sunset_puresky_1k.hdr'
  );

  const { bevelSize, bevelSegments, curveSegments, bevelThickness, ...config } =
    useControls({
      backside: true,
      backsideThickness: { value: 0.32, min: 0, max: 2 },
      samples: { value: 16, min: 1, max: 32, step: 1 },
      resolution: { value: 128, min: 64, max: 2048, step: 64 },
      transmission: { value: 1, min: 0, max: 1 },
      clearcoat: { value: 0.1, min: 0.1, max: 1 },
      clearcoatRoughness: { value: 1, min: 0, max: 1 },
      thickness: { value: 0.2, min: 0, max: 5 },
      chromaticAberration: { value: 0.7, min: 0, max: 5 },
      anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
      roughness: { value: 0.41, min: 0, max: 1, step: 0.01 },
      distortion: { value: 0.5, min: 0, max: 4, step: 0.01 },
      distortionScale: { value: 0.1, min: 0.01, max: 1, step: 0.01 },
      temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
      ior: { value: 1.5, min: 0, max: 2, step: 0.01 },
      color: '#f84242',
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
          g
          <MeshTransmissionMaterial {...config} background={texture} />
          {/* <sphereBufferGeometry args={[1, 64, 64]} /> */}
          {/* <meshStandardMaterial
            // {...config}
            roughness={0}
            color={'#202020'}
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={1}
          /> */}
          {/* <meshNormalMaterial /> */}
        </Text3D>
      </Center>
    </group>
  );
}
