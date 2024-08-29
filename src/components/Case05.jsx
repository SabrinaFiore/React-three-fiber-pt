import React, { useRef } from 'react';
import imgProject01 from '../../public/img/type-scale-01.png';
import imgProject02 from '../../public/img/type-scale-02.png';
import imgProject03 from '../../public/img/type-scale-03.png';
import imgProject04 from '../../public/img/type-scale-04.png';
import imgProject05 from '../../public/img/pt-sabrina-fiore01.jpg';
import imgProject06 from '../../public/img/pt-sabrina-fiore02.jpg';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100%;
`;

const Title = styled.h2`
  font-family: 'Avenir', sans-serif;
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 1rem;
`;

const Desc = styled.p`
  font-family: 'Avenir', sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

const ParagraphTitle = styled.h2`
  font-family: 'Avenir', sans-serif;
  font-size: 18px;
  font-weight: 600;
  padding-top: 0.8rem;
`;

const FooterCS = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  height: 50px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
    padding: 10px;
    display: flex;
    position: fixed;
    background: #f0f0f0;
    z-index: 2;
    bottom: 0;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: #3d3b3b;
  font-weight: 500;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin: 0 1rem;
`;

const Case05 = () => {
  const app = useRef(null);
  const navigate = useNavigate();

  return (
    <div className="hero" ref={app}>
      <Container>
        <div class="cards-pt">
          <div class="card-pt"><img className='card-img' src={imgProject01} alt="projectImg"/></div>
          <div class="card-pt"><img className='card-img' src={imgProject02} alt="projectImg"/></div>
          <div class="card-pt"><img className='card-img' src={imgProject03} alt="projectImg"/></div>
          <div class="card-pt"><img className='card-img' src={imgProject04} alt="projectImg"/></div>
          <div class="card-pt"><img className='card-img' src={imgProject05} alt="projectImg"/></div>
          <div class="card-pt"><img className='card-img' src={imgProject06} alt="projectImg"/></div>
          <div class="card-pt">SEVEN</div>
          <div class="card-pt">EIGHT</div>
          <div class="card-pt">NINE</div>
          <div class="card-pt">TEN</div>
          <div class="card-pt">ELEVEN</div>
          <div class="card-pt">TWELVE</div>
        </div>
      </Container>
      <FooterCS>
        <div className='link'>
          <Button onClick={() => navigate('../case04')}>Go to previous project</Button>
        </div>
        <div className='link'>
        </div>
      </FooterCS>
    </div>
  );
}

export default Case05;
