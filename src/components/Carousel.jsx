import styled from "styled-components";
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

const Section = styled.div`
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
   margin-bottom: 1.5rem;
  }
`;

const Title = styled.div`
  margin-left: 2.5rem;
  line-height: 1;
  font-family: 'Avenir', sans-serif;
  font-family: 'EB Garamond', serif;
  font-size: 30px;
  font-weight: 300;
  line-height: 1;

  @media only screen and (max-width: 768px) {
    font-size: 50px;
    margin-left: 1rem;
    font-size: 25px;
  }
`

const Button = styled.button`
  background-color: #ff6e8d;
  color: #fff;
  font-weight: 500;
  
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem 0;
`;

const Desc = styled.p`
  margin-top: 0.5rem;
  margin-left: 2.5rem;
  font-family: 'Avenir', sans-serif;
  font-size: 16px;
  font-weight: 400;

  @media only screen and (max-width: 768px) { 
    margin-left: 1rem;
  }
`;

gsap.registerPlugin(Draggable);

const Carousel = () => {
  const navigate = useNavigate()
  const [curSlide, updateCurSlide] = useState(1);
  const [slideCount, updateSlideCount] = useState(3);
  const dragInstance = useRef(null);
  const dragTarget = useRef(null);
  const dragBounds = useRef(null);
  
  const itemsRef = useRef([
    {
      title: 'KIKO Milano',
      description: 'Salesforce Marketing Cloud',
    },
    {
      title: 'RTE Player',
      description: 'UI Design/Development',
    },
    {
      title: 'AlJazira SMART and SAIB Mobile banking',
      description: 'UI Design/Development',
    },
    {
      title: 'Runroom',
      description: 'UI Design/Development',
    },
    {
      title: 'Portfolio',
      description: 'UI Design/Development',
    }
  ]);

  useEffect(() => {
    dragInstance.current = Draggable.create(dragTarget.current, {
      type: "scroll",
      bounds: dragBounds,
      throwProps: true,
      dragClickables: true
    });
    // Cleanup
    return () => dragInstance.current[0].kill();
  }, []);

  const onThrow = () => {
    updateCurrentSlide(itemsRef.current[curSlide]);
  };
  
  const updateCurrentSlide = (slide) => {
    let slideX = slide.getBoundingClientRect().left;
    let slideWidth = slide.getBoundingClientRect().width;
    
    if (slideX < 0) {
      updateCurSlide(curSlide + 1);
    }
    console.log(curSlide);
  };

  useEffect(() => {
    dragInstance.current[0].addEventListener("throwupdate", () => {
      onThrow();
    });
        
  }, [dragInstance]);

  return (
    <Section>
      <Container>
        <div ref={dragBounds} className="carousel">
          {/* <div>
            {curSlide} of {slideCount}
          </div> */}
          <Title>My recent projects</Title>
          <Desc>Scroll sideways to view more &#x2192;	</Desc>
          <div ref={dragTarget} draggable="true" className="carousel__stage">
            <div className="slide" ref={el => {itemsRef.current[0] = el}}>
              <img src="../../img/kikoMilano.png" alt="" />
              <div className="slide-description">
                <h2>{itemsRef.current[0].title}</h2>
                <p>{itemsRef.current[0].description}</p>
                <Button onClick={() => navigate('case01')}>Read more</Button>
              </div>
            </div>
            <div className="slide" ref={el => {itemsRef.current[1] = el}}>
              <img src="../../img/rte-2024-img.png" alt="" />
              <div className="slide-description">
                <h2>{itemsRef.current[1].title}</h2>
                <p>{itemsRef.current[1].description}</p>
                <Button onClick={() => navigate('case02')}>Read more</Button>
              </div>
            </div>
            <div className="slide" ref={el => {itemsRef.current[2] = el}}>
              <img src="../../img/aljazira.png" alt="" />
              <div className="slide-description">
                <h2>{itemsRef.current[2].title}</h2>
                <p>{itemsRef.current[2].description}</p>
                <Button onClick={() => navigate('case03')}>Read more</Button>
              </div>
            </div>
            <div className="slide" ref={el => {itemsRef.current[3] = el}}>
              <img src="../../img/runroom-00.png" alt="" />
              <div className="slide-description">
                <h2>{itemsRef.current[3].title}</h2>
                <p>{itemsRef.current[3].description}</p>
                <Button onClick={() => navigate('case04')}>Read more</Button>
              </div>
            </div>
            <div className="slide" ref={el => {itemsRef.current[4] = el}}>
              <img src="../../img/portfolio-sabrina.png" alt="" />
              <div className="slide-description">
                <h2>{itemsRef.current[4].title}</h2>
                <p>{itemsRef.current[4].description}</p>
                <Button onClick={() => navigate('case05')}>Read more</Button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </Section>
  );
};

export default Carousel;
