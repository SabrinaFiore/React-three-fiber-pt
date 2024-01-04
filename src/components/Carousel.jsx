import styled from "styled-components";
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: #9E5C63;
  color: #fff;
  font-weight: 500;
  
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem 0;
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
      description: 'Description of Project 1',
    },
    {
      title: 'RTE Player',
      description: 'Description of Project 2',
    },
    {
      title: 'AlJazira SMART and SAIB Mobile banking',
      description: 'Description of Project 3',
    },
    {
      title: 'Runroom',
      description: 'Description of Project 4',
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
          <h2 className="slide-title">Recently projects where I've worked on</h2>
          <div ref={dragTarget} draggable="true" className="carousel__stage">
            <div className="slide" ref={el => {itemsRef.current[0] = el}}>
              <img src="../../img/kikoCosmetics.png" alt="" />
              <div className="slide-description">
                <h2>{itemsRef.current[0].title}</h2>
                <p>{itemsRef.current[0].description}</p>
                <Button onClick={() => navigate('case01')}>Read more about the case</Button>
              </div>
            </div>
            <div className="slide" ref={el => {itemsRef.current[1] = el}}>
              <img src="../../img/rte-2024-img.png" alt="" />
              <div className="slide-description">
                <h2>{itemsRef.current[1].title}</h2>
                <p>{itemsRef.current[1].description}</p>
                <Button onClick={() => navigate('case01')}>Read more about the case</Button>
              </div>
            </div>
            <div className="slide" ref={el => {itemsRef.current[2] = el}}>
              <img src="../../img/aljazira.png" alt="" />
              <div className="slide-description">
                <h2>{itemsRef.current[2].title}</h2>
                <p>{itemsRef.current[2].description}</p>
                <Button onClick={() => navigate('case01')}>Read more about the case</Button>
              </div>
            </div>
            <div className="slide" ref={el => {itemsRef.current[3] = el}}>
              <img src="../../img/runroom-00.png" alt="" />
              <div className="slide-description">
                <h2>{itemsRef.current[3].title}</h2>
                <p>{itemsRef.current[3].description}</p>
                <Button onClick={() => navigate('case01')}>Read more about the case</Button>
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
