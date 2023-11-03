import styled from "styled-components";
import React, { useRef, useState, useEffect } from 'react';
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

gsap.registerPlugin(Draggable);

const Carousel = () => {
  const [curSlide, updateCurSlide] = useState(1);
  const [slideCount, updateSlideCount] = useState(3);
  const dragInstance = useRef(null);
  const dragTarget = useRef(null);
  const dragBounds = useRef(null);
  
  const itemsRef = useRef([
    {
      title: 'Project 1',
      description: 'Description of Project 1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
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
          <div ref={dragTarget} draggable="true" className="carousel__stage">
            <div className="slide" ref={el => {itemsRef.current[0] = el}}>
              <h2>{itemsRef.current[0].title}</h2>
              <p>{itemsRef.current[0].description}</p>
            </div>
            <div className="slide" ref={el => {itemsRef.current[1] = el}}>
              <h2>{itemsRef.current[1].title}</h2>
              <p>{itemsRef.current[1].description}</p>
            </div>
            <div className="slide" ref={el => {itemsRef.current[2] = el}}>
              <h2>{itemsRef.current[2].title}</h2>
              <p>{itemsRef.current[2].description}</p>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </Section>
  );
};

export default Carousel;
