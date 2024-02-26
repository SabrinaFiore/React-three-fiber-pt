import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import imgProject from '../../public/img/Img1.jpg';
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: block;
    padding: 5.5rem 2rem 4rem;
  }
`;

const HeroInner = styled.div`
  display: flex;
  align-content: center;
  color: #3d3b3b;

  @media only screen and (max-width: 768px) {
    display: block;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-family: 'EB Garamond', serif;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 1.5px;
`;

const Desc = styled.p`
  font-family: 'Avenir', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding-top: 0.5rem;
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

const Case02 = () => {
  const app = useRef(null);
  const images = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Select the image using useRef
    const girlImage = images.current.querySelector('.projectImg img');

    // Initial state before animation starts
    gsap.set(girlImage, { y: 10, scale: 0, opacity: 0 });

    // Animation timeline
    tl.to(girlImage, { duration: 0.8, y: 0, scale: 1, opacity: 1, ease: "none" });

    // Ensure image visibility after animation
    tl.call(() => {
      girlImage.style.visibility = 'visible';
    });
  }, []);

  return (
    <div className="hero" ref={app}>
      <Container>
        <HeroInner>
          <div className="hero-content">
            <div className="hero-content-inner" ref={content}>
              <Title>RTE Player</Title>
              <Desc>
                Project Description
              </Desc>
              <List>
                What technologies did we use?
                <ListItem>Lorem Ipsum</ListItem>
                <ListItem>Lorem Ipsum</ListItem>
                <ListItem>Lorem Ipsum</ListItem>
              </List>
            </div>
          </div>
        </HeroInner>
        <div className="hero-images">
          <div className="hero-image projectImg" ref={images}>
            <img src={imgProject} alt="projectImg" style={{ visibility: 'hidden' }} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Case02;
