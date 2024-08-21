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


const Case01 = () => {
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
              <Title>Client: KIKO Milano</Title>
              <Desc>KIKO Milano is an Italian professional cosmetics brand that offers a range of high-quality makeup, face and body treatments </Desc>
              <ParagraphTitle>Technologies</ParagraphTitle>
              <Desc>CRM  - Salesforce Marketing Cloud</Desc>
              <ParagraphTitle>Description</ParagraphTitle>
              <Desc>Work with Email Studio, Content Builder and Journey Builder tools of Marketing Claud to Create a Custom </Desc>
              <ParagraphTitle>Purpose</ParagraphTitle>
              <Desc>The KIKO MILANO products need to be relevant, and so does their messaging (e-mails in this case) where personalization is the key.
So we have created the right message (e-mails) sent at the right time, and get it to the right consumer, for every need, like: the Welcome Journey e-mail, other communication to help the customers to find the shops, The Loyalty Programs e-mail, and so on.
The sending of the messages was automatically scheduled through a Journey Builder and each message was customised.
Also, communications (and layout) were created for several countries with their own languages and translations in English, like: US, EU and Arab Emirates.</Desc>
            <br></br>
            <Desc>Visit:</Desc>
            <div className='link'>
              <Link to={'https://www.kikocosmetics.com/it-it/'}>KIKO Milano</Link>
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
        <div className='link'></div>
        <div className='link'>
          <Button onClick={() => navigate('../case02')}>Go to next project</Button>
        </div>
      </FooterCS>
    </div>
  );
}

export default Case01;
