import { React } from "react";
import styled from "styled-components";

const Section = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 100%;
    padding: 5.5rem 2rem 4rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

const Desc = styled.p`
  font-size: 16px;
  color: #3d3b3b;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin-bottom: 2rem;
  line-height: 2;

  @media only screen and (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const Paragraph = styled.p`
  font-family: 'Avenir', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding-top: 1rem;
`;

const AboutMe = () => {
	return (
		<Section>
      <Container>
        <Title>About me</Title>
        <Desc className="wrapper">
          <Paragraph>
            I work as a Front End Developer, actually I designed this portfolio to combine my knowledge about UI-Design and Front-End. 
            I am originally from Southern Italy and I traveled quite a bit to complete my education and knowledge. </Paragraph>
          <Paragraph>
            I attended the Academy of Fine Arts in Rome in 2011, where I started to elaborate my interest in graphic arts on a deep level. 
            Then, in 2017 I moved to Barcelona to attend a Master's degree. During the course I developed my knowledge in coding, and I have approached the Hi-tech's world working as a Front-End Developer, for the first time. Meantime I never stopped working on my photography and graphic art interests.
          </Paragraph> 
          <Paragraph>
            When I was starting my career in software development, I dedicated a lot of time to expanding my technical knowledge by reading books, taking online courses, and it was (and it is) a continuous learning day by day. 
            My first position was as a Junior developer in a company, in Barcelona. <br></br>
            At time, I had so many things to learn, and being honest that was so tough and interesting at the same moment. I started working in an Agile Team with UI and UX designers, Back End Developers, Front End Developers, Product Owners and Managers, for a small projects. 
            Then, little by little, I learn how to work with complex architectures using framework like Angular and implementing (and also creating) a UI components library.
          </Paragraph>
          <Paragraph>
          My experience and knowledge about designing a web/app application allow me moving to the management part to apply my skills to build and manage an entire creative project.
          </Paragraph>
        </Desc>
      </Container>
    </Section>
	)
}

export default AboutMe