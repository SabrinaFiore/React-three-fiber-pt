import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import imgProject from '../../public/img/Img1.jpg';
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: block;
    padding: 5.5rem 2rem 4rem;
    height: 100%;
    text-align: center;
  }
`;

const HeroInner = styled.div`
  display: flex;
  align-content: center;
  color: #3d3b3b;
  text-align: left;

  @media only screen and (max-width: 768px) {
    display: block;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  font-family: 'Avenir', sans-serif;
  font-size: 24px;
  font-weight: 500;
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

const List = styled.ul`
  list-style-type: none;
  color: #3d3b3b;
  font-family: 'Avenir', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5rem;
  padding-top: 2rem;
`;

const ListItem = styled.li`
  font-family: 'Avenir', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5rem;
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

const Case03 = () => {
  const app = useRef(null);
  const content = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline();
  }, []);

  return (
    <div className="hero" ref={app}>
      <Container>
        <HeroInner>
          <div className="hero-content">
            <div className="hero-content-inner" ref={content}>
              <Title>Client: AlJazira SMART and SAIB Mobile banking </Title>
              <Desc><b>AlJazira SMART</b> application allows you to access your account anytime and anywhere by using your smart phone or any smart device such as iPads and tablets.</Desc>
              <Desc><b>SAIB Mobile banking</b> application is used to monitoring banking accounts in Arabic or English and transfer funds between your own accounts with various currencies or to any other accounts inside or outside the bank.</Desc>
              <ParagraphTitle>Technologies</ParagraphTitle>
              <Desc>Angular / Figma</Desc>
              <ParagraphTitle>Description</ParagraphTitle>
              <Desc>Develop and execute UI/UX design strategies to enhance mobile app user experience and engagement. We created a Design System, collaborating closely with developers and designers to build reusable components for both applications with a similar design to ensure a better experience and also to have a great library of components usable in several projects.
              Also, the layouts were created for different countries, like: EU and Arab Emirates, so the design works in both sides, right-to-left and left-to-right. </Desc>
              <br></br>
              <Desc>Visit:</Desc>
              <div className='link'>
                <Link to={'https://apps.apple.com/it/app/aljazira-smart/id469515886?l=en'}>AlJazira SMART</Link>
              </div>
              <div className='link'>
                <Link to={'https://apps.apple.com/it/app/saib-business/id1487662265?l=en'}>SAIB Mobile banking</Link>
              </div>
            </div>
          </div>
        </HeroInner>
        <div className="hero-images">
          <div className="hero-image projectImg">
            <img src={imgProject} alt="projectImg"  />
          </div>
        </div>
      </Container>
      <FooterCS>
        <div className='link'>
          <Button onClick={() => navigate('../case02')}>Go to previous project</Button>
        </div>
        <div className='link'>
          <Button onClick={() => navigate('../case04')}>Go to next project</Button>
        </div>
      </FooterCS>
    </div>
  );
}

export default Case03;
