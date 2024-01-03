import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import imgProject from '../../public/img/Img1.jpg';

const Case01 = () => {
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
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={content}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Relieving the burden</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">of disease caused</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p>
                Better treats serious cardiometabolic diseases to transform lives and reduce
                healthcare utilization through the use of digital therapeutics.
              </p>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={images}>
              <div className="hero-image projectImg">
                <img src={imgProject} alt="projectImg" style={{ visibility: 'hidden' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Case01;
