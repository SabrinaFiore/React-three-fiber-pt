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
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    display: block;
    max-width: unset;
    position: relative;
  }
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    position: absolute;
    height: 100%;
    width: 95%;
  }
`;

const Title = styled.h1`
  font-family: 'EB Garamond', serif;
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 1.5px;
  line-height: 1;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
    text-align: center;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    margin: 0 1rem;
    position: absolute;
    bottom: 0;
    top: 0;
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
  color: #3d3b3b;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5rem;
  list-style-type: none;
`;

const Action = styled.p`
  color: #cd7d85;
  font-family: 'Avenir', sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

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
                <li>02. UI Developer - Fincons Group</li>
                <li>03. UI Design / UI Developer - CREALOGIX Group (Barcelona, Spain)</li>
                <li>04. UI Developer - Runroom (Barcelona, Spain)</li>
                <li>05. UI/UX DesignerUI/UX Designer - Ideare Communication (Rome, Italy)</li>
              </List>
            </Desc>
					<Action>Scroll down to see more</Action>
				</Right>
			</Container>
		</Section>
	)
}

export default Work