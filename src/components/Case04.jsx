import React, { useRef } from 'react';
import imgProject01 from '../../public/img/runroom-00.png';
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100%;

  @media only screen and (max-width: 768px) { 
    height: 100vh;
  }
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

const Case04 = () => {
  const app = useRef(null);
  const navigate = useNavigate();

  return (
    <div className="hero" ref={app}>
      <Container>
        <div className="cards-prj">
          <div className="card">
          <Title>Client: Runroom</Title>
              <Desc>Runroom is a Tech & Creative Consultancy </Desc>
              <ParagraphTitle>Technologies</ParagraphTitle>
              <Desc>Sketch / Gulp / HTML5 / Sass</Desc>
              <ParagraphTitle>Description</ParagraphTitle>
              <Desc>Refactoring of the old Runroom web page. The primary goals ware to improve the design quality, readability, and maintainability.</Desc>
          </div>
          <div className="card">
            <ParagraphTitle>Visit web page:</ParagraphTitle>
            <div className='link'>
              <Link to={'https://www.runroom.com/en'}>Runroom</Link>
            </div>
          </div>
        </div>
        <div className="cards-prj">
          <div className="card-long"><img className='card-img' src={imgProject01} alt="projectImg"/></div>
        </div>
      </Container>
      <FooterCS>
        <div className='link'>
          <Button onClick={() => navigate('../case03')}>Go to previous project</Button>
        </div>
        <div className='link'>
          <Button onClick={() => navigate('../case05')}>Go to previous project</Button>
        </div>
      </FooterCS>
    </div>
  );
}

export default Case04;
