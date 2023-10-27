import styled from "styled-components";
import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

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

const projectData = [
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
  },
];

const ClickableProjectSlides = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    const slideWidth = slider.clientWidth;
    gsap.to(slider, { x: -currentIndex * slideWidth, duration: 0.5 });
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Section>
      <Container>
      <div className="slider-container">
        <div className="slider" ref={sliderRef}>
          {projectData.map((project, index) => (
            <div
              className="slide"
              key={index}
              onClick={() => goToSlide(index)}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <div className="slide-buttons">
          <button onClick={prevSlide}>Previous</button>
          {projectData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={index === currentIndex ? 'active' : ''}>
              {`Project ${index + 1}`}
            </button>
          ))}
          <button onClick={nextSlide}>Next</button>
        </div>
      </div>
      </Container>
    </Section>
  );
};

export default ClickableProjectSlides;
