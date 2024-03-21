// Import necessary dependencies and components
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../Assets/images/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

// TextAnimation component
const TextAnimation = () => {
  const [isReloaded, setReloaded] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Coder", "App Developer" ];
  const period = 2000;

  useEffect(() => {
    // Check if the page is reloaded
    if (performance.navigation.type === 1) {
      setReloaded(true);
    }
  }, []);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <div className={`text-container ${isReloaded ? 'animate-text' : ''}`}>
      <h1>{`Hi! I'm Nishant...`} <br /><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Coder", "App Developer" ]'><span className="wrap">{text}</span></span></h1>
      <p>Hi, I'm Nishant Kaushal, a 20-year-old third-year undergraduate with a passion for technology. I aim to become a software developer. Beyond coding, I enjoy cricket, football, and chess for relaxation and skill development. As I advance in my studies, I'm committed to expanding my technical skills and contributing to the evolving tech landscape.</p>
      <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
    </div>
  );
};

// Banner component
export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  {/* Render the TextAnimation component */}
                  <TextAnimation />
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
