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

const Button = styled.button`
  background-color: transparent;
  color: #3d3b3b;
  border: none;
  cursor: pointer;
  font-family: 'Avenir', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-decoration: underline;
  padding-top: 0.5rem;
`;

const Projects = () => {
  const navigate = useNavigate();
	return (
		<Section>
      <Container>
        <Title>Recent projects</Title>
        <div class="cards-prj2">
          <div className="card-allPrj">
            <img src="../../img/kikoMilano.png" alt="" />
            <Button onClick={() => navigate('../case01')}>Read more</Button>
          </div>
          <div className="card-allPrj">
            <img src="../../img/rte-2024-img.png" alt="" />
            <Button onClick={() => navigate('../case02')}>Read more</Button>
          </div>
          <div className="card-allPrj">
            <img src="../../img/aljazira.png" alt="" />
            <Button onClick={() => navigate('../case03')}>Read more</Button>
          </div>
          <div className="card-allPrj">
            <img src="../../img/runroom-00.png" alt="" />
            <Button onClick={() => navigate('../case04')}>Read more</Button>
          </div>
          <div className="card-allPrj">
            <img src="../../img/portfolio-sabrina.png" alt="" />
            <Button onClick={() => navigate('../case05')}>Read more</Button>
          </div>
          <div className="card-allPrj"></div>
        </div>
      </Container>
    </Section>
	)
}

export default Projects