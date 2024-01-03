import { React } from "react";
import ShaderMaterialImg from "./ShaderMaterialImg";
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
					<ShaderMaterialImg/>
				</Left>
				<Right>
					<Title>Work experice</Title>
            <Desc> 
              <List>
                <li>01. Senior Analyst - Accenture (still working here)</li>
                <li>02. Frontend Developer - Fincons Group</li>
                <li>03. Frontend Developer - CREALOGIX Group (Barcelona, Spain)</li>
                <li>04. Frontend Developer - Runroom (Barcelona, Spain)</li>
                <li>05. UI/UX DesignerUI/UX Designer - Ideare Communication (Rome, Italy)</li>
              </List>
            </Desc>
					Scroll down to see more
				</Right>
			</Container>
		</Section>
	)
}

export default Work