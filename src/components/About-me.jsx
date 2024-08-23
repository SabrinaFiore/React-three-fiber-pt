import { React } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


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

const Button = styled.button`
  background-color: transparent;
  color: #3d3b3b;
  border: none;
  cursor: pointer;
  font-family: 'Avenir', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-decoration: underline;
`;

const AboutMe = () => {
  const navigate = useNavigate();
	return (
		<Section>
      <Container>
        <Title>About me</Title>
        <Desc className="wrapper">
          <Paragraph>
            I work as a UI Design and UI Developer, actually I designed this portfolio to combine my knowledge and my interests. 
            I am originally from Southern Italy and I traveled quite a bit to complete my education and knowledge. </Paragraph>
          <Paragraph>
            I attended the Academy of Fine Arts in Rome in 2011, where I started to elaborate my interest in graphic arts and photography on a deep level. 
          </Paragraph> 
          <Paragraph>
            Then, in 2017 I moved to Barcelona to attend a Master's degree. During the course, I developed my knowledge in coding, and I have approached the Hi-tech's world working as a UI Developer. Meantime I never stopped increasing my interest about photography, 
            actually in the last years I have participated to different exhibitions <Button onClick={() => navigate('../noCodeProject')}>(check in Photography Exhibitions page)</Button>. <br></br>
          </Paragraph>
          <Paragraph>
            I have always been in to my career to improve my self and my skills and after several years on the Hi-Tech industry, I would like to use the skills I developed to back work in a creativity environments. In addiction, working in a consultancy big company I also learn how to manage project, comunicate with client, improve my organisational and planning skills.
          </Paragraph>
        </Desc>
      </Container>
    </Section>
	)
}

export default AboutMe