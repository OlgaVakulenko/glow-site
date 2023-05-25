import { Text3D } from '@react-three/drei';
import { MeshTransmissionMaterial } from '@react-three/drei';
import { Center } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import { RGBELoader } from 'three-stdlib';

export default function Scene3() {
  return (
    <Canvas>
      <perspectiveCamera
        position={[0, 1, 0]}
        fov={75}
        near={0.1}
        far={10000}
        attach={'scene'}
      />
      <Text />
    </Canvas>
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
        </Text3D>
      </Center>
    </group>
  );
}
