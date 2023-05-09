import { PerspectiveCamera } from '@react-three/drei';
import { OrthographicCamera } from '@react-three/drei';
import { ContactShadows } from '@react-three/drei';
import { CameraControls } from '@react-three/drei';
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
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Leva } from 'leva';
import { useControls } from 'leva';
import { easing } from 'maath';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
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

function Camera() {
  useFrame((state, delta) => {
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
    state.camera.lookAt(0, 0, -20);
  });

  return null;
}

export default function Scene() {
  return (
    <div className="absolute inset-0">
      <Leva hidden />
      <Canvas
        shadows
        orthographic
        dpr={[1, 2]}
        camera={{ position: [0, 0, 0], zoom: 80, rotation: [0, 5, 0] }}
        // camera={{ position: [0, 0, 0], zoom: 1 }}
        // camera={{ position: [0, 0, 4], fov: 40 }}
      >
        {/* <PerspectiveCamera position={[0, 25, 0]} zoom={1} makeDefault /> */}

        {/* <axesHelper scale={80} /> */}
        {/* <CameraControls /> */}
        <Camera />
        <Light />
        <Env />
        {/* <fog attach="fog" color="blue" near={100} far={220} /> */}
        {/* <color attach="background" args={['red']} /> */}
        {/* <group rotation={[Math.PI / 5, -Math.PI / 5, Math.PI / 2]}>
          <Bounds fit clip observe margin={1.25}> */}
        {/* <Caustics
          backfaces
          color={[1, 0.8, 0.8]}
          focus={[0, -1.2, 0]}
          lightSource={[-2, 2.5, -2.5]}
          frustum={1.75}
          intensity={0.005}
          worldRadius={0.66 / 10}
          ior={0.6}
          backfaceIor={1.26}
        > */}
        <Text />
        {/* </Caustics> */}
        {/* <Cursor scale={[0.5, 1, 0.5]} /> */}
        {/* </Bounds> */}
        {/* <OrbitControls
          // autoRotate={true}
          autoRotateSpeed={-0.1}
          zoomSpeed={0.25}
          minZoom={40}
          maxZoom={140}
          enablePan={false}
          dampingFactor={0.05}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
        /> */}

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
        {/* <gridHelper /> */}
        {/* <Grid /> */}
        {/* <gridHelper
          args={[5, 30, '#101010', '#050505']}
          position={[0.1, 0, 1]}
          rotation={[0, 0.4, 0]}
          scale={4}
        /> */}
        {/* </group> */}
      </Canvas>
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
      resolution: { value: 1024, min: 64, max: 2048, step: 64 },
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

  const material = useMemo(() => {
    return new MeshPhysicalMaterial({
      color: '#fff',
      emissive: '#000',
      roughness: 0,
      metalness: 1,
    });
  }, []);
  console.log(config);

  const vec = useMemo(() => {
    return new THREE.Vector3();
  }, []);

  useFrame((state) => {
    // const mouse = state.mouse;
    // const camera = state.camera;
    // camera.position.lerp(
    //   vec.set(mouse.x / 10, mouse.y / 5, camera.position.z),
    //   0.02
    // );
    // console.log(state.mouse.x);
    // state.camera.position.x = state.mouse.x;
    // state.camera.position.y = state.mouse.y;
  });

  const ref = useRef();
  useEffect(() => {
    const mesh = ref.current;
    console.log(mesh.geometry);
    // mesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 10));
    // console.log(ref.current);
  }, []);

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
          ref={ref}
          font="/Almaz_Bold.json"
          castShadow
          bevelEnabled
          scale={5}
          height={0.2}
          bevelSize={0.0}
          bevelSegments={10}
          curveSegments={128}
          bevelThickness={0.01}
        >
          g{/* <meshMatcapMaterial matcap={matcapTexture} /> */}
          {/* <meshPhysicalMaterial
            // attach="material"
            {...config}
          /> */}
          <MeshTransmissionMaterial {...config} background={texture} />
          {/* <MeshTransmissionMaterial {...config} toneMapped={false} /> */}
          {/* <MeshTransmissionMaterial
            {...config}
            color="#fff"
            // opacity={0.6}
            // transparent={true}
            toneMapped={false}
            background={texture}
          /> */}
        </Text3D>
      </Center>
    </group>
  );
}
