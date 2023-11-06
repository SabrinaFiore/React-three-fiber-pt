import { React } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-family: 'EB Garamond', serif;
  font-size: 60px;
  font-weight: 300;
  letter-spacing: 1.5px;
  line-height: 1;

  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
`;

const List = styled.ul`
  color: lightgray;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5rem;
  list-style-type: none;
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

const Img = styled.img``

const Work = () => {
	return (
		<Section>
			<Container>
				<Left>
					{/* <Canvas camera={{ fov: 25, position: [5, 5, 5]}}>
						{/* enableZoom={false} */}
						{/* <OrbitControls autoRotate></OrbitControls>
						<ambientLight intensity={1} />
						<directionalLight position={[3,2,1]} /> */}
						<Cube/>
					{/* </Canvas> */}
					{/* <Img src="" /> */}
				</Left>
				<Right>
					<Title>Work experice</Title>
            <Desc> 
              <List>
                <li>Senior Analyst - Accenture (still working here)</li>
                <li>Frontend Developer - Fincons Group</li>
                <li>Frontend Developer - CREALOGIX Group (Barcelona, Spain)</li>
                <li>Frontend Developer - Runroom (Barcelona, Spain)</li>
                <li>UI/UX DesignerUI/UX Designer - Ideare Communication (Rome, Italy)</li>
              </List>
            </Desc>
					<Button>See our works</Button>
				</Right>
			</Container>
		</Section>
	)
}

export default Work