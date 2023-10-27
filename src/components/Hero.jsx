import { React, Suspense } from "react";
import styled from "styled-components";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-family: 'EB Garamond', serif;
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 1.5px;
  line-height: 1;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 40px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #cd7d85;
  font-family: 'Roboto', sans-serif;
  font-size: 25px;
  font-weight: 400;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #9E5C63;
  color: white;
  font-weight: 500;
  width: 100%;
  max-width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0;
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
		display: none;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
	margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  }
`;

const Hero = () => {
  const navigate = useNavigate()
	return (
		<Section>
			<Container>
				<Left>
					<Title>Welcome to my space.</Title>
					<WhatWeDo>
						<Line src=""/>
						<Subtitle>- I'm Sabrina. Designer and Front-End Developer</Subtitle>
					</WhatWeDo>
					<Desc>I really enjoy creating good designed, human-centered and useful experience</Desc>
          <Button onClick={() => navigate('about-me')}>About me</Button>
				</Left>
				<Right>
					<Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.8}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
					{/* <Img src="./public/img/rose-no-bg.png" /> */}
				</Right>
			</Container>
		</Section>
	)
}

export default Hero