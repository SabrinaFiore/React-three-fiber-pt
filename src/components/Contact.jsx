import { React } from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  color: #3d3b3b;

  @media only screen and (max-width: 768px) {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;

  @media only screen and (max-width: 768px) {
    display: unset;
    flex: unset;
  }
`;

const Title = styled.h1`
  font-family: 'EB Garamond', serif;
  font-size: 20px;
  font-weight: 300;
  margin-left: 2rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 40px;
  }
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    flex: unset;
    text-align: center;
  }
`;

const Subtitle = styled.h2`
  font-family: 'EB Garamond', serif;
  font-size: 20px;
  font-weight: 600;
  padding: 1rem 0;
`;

const Email = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding-top: 1rem;
  text-decoration: none; 
`;

const FollowMe = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding-top: 1rem;
`;

const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 300;
`;

const handleSubmit = e => {
	e.preventDefault()
}

const Contact = () => {
	return (
		<Section>
      <Container>
        <Left>
          <Title>Available to talk about new opportunities!</Title>
        </Left>
        <Right>
            <Subtitle>Let's keep in touch!</Subtitle>
            <Email>Email</Email>
              <a className="linkEmail" href="mailto:sabrinafiore1992@gmail.com" target="_blank">sabrinafiore1992@gmail.com</a>
            <FollowMe>Follow me</FollowMe>
            <Description>
              <p><a className="linkSocial underline" href="https://www.linkedin.com/in/sabrina-fiore-8437a657/" target="_blank">Linkedin</a></p>
              <p><a className="linkSocial underline" href="https://github.com/SabrinaFiore" target="_blank">Github</a></p>
              {/* <p><a className="linkSocial underline" href="https://www.instagram.com/sabrinafiore_dev/" target="_blank">Instagram</a></p> */}
            </Description>
        </Right>
      </Container>
    </Section>
	)
}

export default Contact