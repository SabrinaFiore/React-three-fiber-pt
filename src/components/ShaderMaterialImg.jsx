// import { RenderTexture, Text, PerspectiveCamera } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { React, useRef } from "react";

// const Cube = () => {
// 	const textRef = useRef()
// 	useFrame(state => textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
	
// 	return (
// 		<mesh>
// 			<boxGeometry />
// 			<meshStandardMaterial >
// 				<RenderTexture attach="map">
// 					<PerspectiveCamera
// 						makeDefault
// 						position={[0, 0, 5]}
// 					/>
// 					<color attach="background" args={["0x00ff00"]} />
// 					<Text ref={textRef} fontSize={0.8} color="#002">Welcome</Text>
// 				</RenderTexture>
// 			</meshStandardMaterial>
// 		</mesh>
// 	)
// }

// export default Cube



// import { OrbitControls } from "@react-three/drei";
// import { Canvas, useFrame, extend } from "@react-three/fiber";
// import { LayerMaterial, Depth, Fresnel } from "lamina";
// import { useMemo, useRef } from "react";
// // import './scene.css';

// import CustomLayer from './CustomLayer';

// extend({ CustomLayer });

// const Planet = () => {
//   const materialRef = useRef();

//   useFrame((state) => {
//     const { clock } = state;
//     materialRef.current.time = clock.getElapsedTime();
//   });

//   return (
//     <mesh position={[0, 0, 0]} rotation={[0, Math.PI, 0]} scale={1.5}>
//       <icosahedronGeometry args={[2, 11]} />
//       <LayerMaterial lighting="lambert">
//         {/* First layer is our own custom layer that's based of the FBM shader */}
//         {/* 
//           Notice how we can use *any* uniforms as prop here 👇
//           You can tweak the colors by adding a colorA or colorB prop!
//         */}
//         <customLayer ref={materialRef} time={0.0} lacunarity={2.3} />
//         {/* Second layer is a depth based gradient that we "add" on top of our custom layer*/}
//         <Depth colorA="blue" colorB="aqua" alpha={0.9} mode="add" />
//         {/* Third Layer is a Fresnel shading effect that we add on*/}
//         <Fresnel color="#FEB3D9" mode="add" />
//       </LayerMaterial>
//     </mesh>
//   );
// };

// const Scene = () => {
//   return (
//     <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
//       <ambientLight intensity={0.03} />
//       <directionalLight position={[0.3, 0.15, 0.0]} intensity={2} />
//       <Planet />
//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default Scene;




import * as THREE from "three"
import { useRef, useState } from "react"
import { Canvas, extend, useFrame } from "@react-three/fiber"
import { useTexture, shaderMaterial } from "@react-three/drei"

export const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: undefined,
    tex2: undefined,
    disp: undefined
  },
  ` varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  ` varying vec2 vUv;
    uniform sampler2D tex;
    uniform sampler2D tex2;
    uniform sampler2D disp;
    uniform float _rot;
    uniform float dispFactor;
    uniform float effectFactor;
    void main() {
      vec2 uv = vUv;
      vec4 disp = texture2D(disp, uv);
      vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
      vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
      vec4 _texture = texture2D(tex, distortedPosition);
      vec4 _texture2 = texture2D(tex2, distortedPosition2);
      vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      gl_FragColor = finalTexture;
      #include <tonemapping_fragment>
      #include <encodings_fragment>
    }`
)

extend({ ImageFadeMaterial })

function FadingImage() {
  const ref = useRef()
  const [texture1, texture2, dispTexture] = useTexture(["/img/Img1.jpg", "/img/Img2.jpg", "/img/displacement/13.jpg"])
  const [hovered, setHover] = useState(false)
  useFrame(() => {
    ref.current.dispFactor = THREE.MathUtils.lerp(ref.current.dispFactor, hovered ? 1 : 0, 0.075)
  })
  return (
    <mesh onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
      <planeGeometry />
      <imageFadeMaterial ref={ref} tex={texture1} tex2={texture2} disp={dispTexture} toneMapped={false} />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
      <FadingImage />
    </Canvas>
  )
}

