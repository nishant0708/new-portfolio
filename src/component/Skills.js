import React from "react";
import { useInView } from "react-intersection-observer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled, { keyframes } from "styled-components";
import meter1 from "../Assets/images/meter1.svg";
import meter2 from "../Assets/images/meter2.svg";
import meter3 from "../Assets/images/meter3.svg";
import arrow1 from "../Assets/images/arrow1.svg";
import arrow2 from "../Assets/images/arrow2.svg";
import colorSharp from "../Assets/images/color-sharp.png";

// Define the fadeIn animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled component for the skill box with the fade-in animation
const SkillBox = styled.div`
  &.fade-in {
    animation: ${fadeIn} 1s ease;
  }
`;

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [headingRef, headingInView] = useInView({
    triggerOnce: false, // Allow triggering multiple times
    onEnter: () => {
      // Add logic to run the animation when entering the view
      const element = headingRef.current;
      if (element) {
        element.classList.add("fade-in");
      }
    },
  });

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SkillBox
              className={`skill-bx wow zoomIn ${
                headingInView ? "fade-in" : ""
              }`}
              ref={headingRef}
            >
              <h2>Skills</h2>
              <p>
                Here's a glimpse of my versatile skill set in coding, design,
                and problem-solving – the tools I leverage to turn ideas into
                reality.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                cursor="none"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>JAVA</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>MongoDb</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>NODE JS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>PYTHON</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>App Development</h5>
                </div>
              </Carousel>
            </SkillBox>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
