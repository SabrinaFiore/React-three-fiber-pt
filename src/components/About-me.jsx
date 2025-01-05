import { React } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  height: 100%;
  scroll-snap-align: center;
  padding: 5.5rem 0 4rem;

  @media only screen and (max-width: 768px) {
    padding: 11.5rem 0 4rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    margin: 0 1rem;
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
          I work as a <b>UI/UX Designer, Photographer, and UI Developer</b>, and I created this portfolio to showcase my expertise and passions.
          <br></br>
          <br></br>
          Originally from Southern Italy, I've traveled extensively to further my education and broaden my skills. 
          In 2011, I attended the <b>Academy of Fine Arts in Rome</b>, where I developed a deep interest in graphic arts and photography.
          <br></br>
          <br></br>
          In 2017, I moved to Barcelona to pursue a <b>Master's degree</b>. During this program, I expanded my coding skills and immersed myself in the tech world, working as a UI/UX designer and UI Developer. 
          At the same time, I maintained my passion for photography, continuing to capture images and participating in several <b>exhibitions</b> in recent years <Button onClick={() => navigate('../photographyProject')}>(see the links page for more details)</Button> .
          <br></br>
          <br></br>
          With 10 years of experience in high-tech and consultancy companies, my multidisciplinary expertise as both a designer and UI Developer has enabled me to improve communication gaps in project workflows. 
          This approach has not only enhanced collaboration but has also strengthened my <b>skills in strategic creation, project management, and planning</b>.
          <br></br>
          <br></br>
          For me, developing ideas is a way to express creativity, solve problems, and push both myself and the projects I work on to new heights. It's a journey where passion meets purpose.
          </Paragraph>
        </Desc>
      </Container>
    </Section>
	)
}

export default AboutMe