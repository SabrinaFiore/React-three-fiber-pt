import { RenderTexture, Text, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { React, useRef } from "react";

const Cube = () => {
	const textRef = useRef()
	useFrame(state => textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
	
	return (
		<mesh>
			<boxGeometry />
			<meshStandardMaterial >
				<RenderTexture attach="map">
					<PerspectiveCamera
						makeDefault
						position={[0, 0, 5]}
					/>
					<color attach="background" args={["0x00ff00"]} />
					<Text ref={textRef} fontSize={0.8} color="#002">Welcome</Text>
				</RenderTexture>
			</meshStandardMaterial>
		</mesh>
	)
}

export default Cube