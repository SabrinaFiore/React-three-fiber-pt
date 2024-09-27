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
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
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
    padding: 0 1.5rem;
    justify-content: unset;
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
  font-family: 'Avenir', sans-serif;
  font-size: 20px;
  font-weight: 500;
`;

const Desc = styled.p`
  font-size: 16px;
  color: #3d3b3b;
  font-family: 'Avenir', sans-serif;
  font-weight: 300;
`;

const Button = styled.button`
  background-color: #9E5C63;
  color: #fff;
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

const Hero = () => {
  const navigate = useNavigate()
	return (
		<Section>
			<Container>
				<Left>
          <Desc>- Under construction - </Desc>
					<Title>Welcome to my space!</Title>
					<WhatWeDo>
						<Line src=""/>
						<Subtitle>- I'm Sabrina!</Subtitle>
					</WhatWeDo>
					<Desc>I developed my webpage to showcase my skills. Have a pleasant time exploring!
          <br></br> <i><b>&ldquo;Creating projects and developing concepts are necessities.&rdquo;</b></i>  
          </Desc>
          <Button onClick={() => navigate('about-me')}>About me</Button>
				</Left>
				<Right>
					<Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={true} />
              <ambientLight intensity={1.5} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 50, 50]} scale={1.8}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.6}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
				</Right>
			</Container>
		</Section>
	)
}

export default Hero