import { React } from "react";
import styled from "styled-components";

const Section = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  color: #3d3b3b;
  font-family: 'EB Garamond', serif;
  font-size: 30px;
  font-weight: 300;
  letter-spacing: 1.5px;
  line-height: 1;
  padding-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 40px;
  }
`;

const Subtitle = styled.h2`
  color: #cd7d85;
  font-family: 'Roboto', sans-serif;
  font-size: 25px;
  font-weight: 400;
`;

const Desc = styled.p`
  font-size: 16px;
  color: #3d3b3b;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin-bottom: 3rem;
  line-height: 2;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const AboutMe = () => {
	return (
		<Section>
      <Container>
        <Title>About me</Title>
        <Desc className="wrapper">
          <span>I work as a Front End Developer and I designed this portfolio to combine my knowledge about UI-Design and Front-End Development.</span> <br></br>
          <span>I was born in Bari, Southern Italy, on May 19th, 1992.</span>
          <span>I attended the Academy of Fine Arts in Rome in 2011, where I started to elaborate my interest
            in graphic arts on a deep level. In 2017 I studied in Barcelona, where I developed my
            knowledge in coding and I approached the Hi-tech's world working as a Front-End Developer. Meantime I
            never stopped working on my photography and graphic art interests.
          </span> <br></br>
          <span>
            Because of my background which allow me to be very sensitive to design details I'm constantly improving 
            my Autodidact Creative Developer's and UI Developer knowledge also because I have a serious passion for
            and creating intuitive, dynamic user experiences.
          </span>
        </Desc>
      </Container>
    </Section>
	)
}

export default AboutMe