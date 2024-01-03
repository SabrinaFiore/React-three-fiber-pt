import { React } from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
`;

const handleSubmit = e => {
	e.preventDefault()
}

const Contact = () => {
	return (
		<Section>
      <Container>
        <Left>
          <Title>Available to talk about new opportunities</Title>
        </Left>
        <Right>
        <div>
          <h2>Let's keep in touch!</h2>
          <h4>Email</h4>
          <p><a class="link" href="mailto:sabrinafiore1992@gmail.com" target="_blank">sabrinafiore1992@gmail.com</a></p>
          <div></div>
          <h4>Follow me</h4>
          <div>
            <p><a href="https://www.linkedin.com/in/sabrina-fiore-8437a657/" target="_blank">Linkedin</a></p>
            <p><a href="https://github.com/SabrinaFiore" target="_blank">Github</a></p>
            <p><a href="https://www.instagram.com/sabrinafiore_dev/" target="_blank">Instagram</a></p>
          </div>
        </div>
        </Right>
      </Container>
    </Section>
	)
}

export default Contact