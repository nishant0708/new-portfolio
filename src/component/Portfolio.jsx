import { useEffect, useRef, useState } from "react";
import "../component/portfilio/Portfolio.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ecom from "../Assets/images/82528385-a73f-488f-9003-513321283a6b.png"
import { Border } from "react-bootstrap-icons";
import tedx from "../Assets/images/tedx-pic.png"
import eduford from "../Assets/images/eduford.jpg"
import dog from "../Assets/images/maxresdefault.jpg"
import coffee from "../Assets/images/coffee.jpg"
import ox from "../Assets/images/tic-tac-toe-game-linear-2806276.jpg"
import birds from "../Assets/images/Screenshot 2024-01-19 030548.jpg"

const items = [
  {
    id: 1,
    title: "TedxDAVV:ThoughtLoom",
    img: tedx,
    desc: "Explore TEDxDavv's captivating website, built with React.js and featuring mesmerizing animations powered by GSAP. Discover inspiring talks, learn about our speakers, and stay updated on event details. Join us in celebrating ideas worth spreading at TEDxDavv.",
    href:"https://www.tedxdavv.in/"
  },
  {
    id: 1,
    title: "Ecommerce Website ",
    img: ecom,
    desc: "This React-powered e-commerce site showcases my skills in creating dynamic interfaces and efficient structures. With HTML and CSS, it ensures a visually appealing and user-friendly experience across devices, emphasizing my commitment to crafting modern and functional web applications.",
    href:"https://65902cae4abcd676abff73be--niko-ecomm.netlify.app/"
  },
  {
    id: 2,
    title: "Dog Game",
    img: dog,
    desc: "Experience Dog Defender, an HTML, CSS, and JavaScript game where you control a dog, eliminate enemies, and aim for a target score of 55 points in just 30 seconds. Engaging gameplay and appealing design guarantee a quick and enjoyable gaming experience!",
    href:"https://nishant0708.github.io/DOG-GAME_main/"
  },
  {
    id: 3,
    title: "Eduford",
    img: eduford,
    desc: "Eduford College's dynamic website, built with HTML, CSS, JavaScript, and PHP, offers an engaging user experience. The backend database efficiently manages visitor interactions, providing a secure and interactive platform for the college community",
    href:"https://nishant0708.github.io/eduford-website/index.html"
  },
  {
    id: 4,
    title: "Shoot Birds",
    img: birds,
    desc: "Bird shooting game is an exciting and addictive game where players test their aiming and shooting skills by trying to shoot down flying birds. The game provides a visually appealing interface and offers an immersive gameplay experience.",
    href:"https://nishant0708.github.io/bird-shooting-game-using-js/"
  },
  {
    id: 5,
    title: "Espresso yourself",
    img: coffee,
    desc: "My coffee menu project, built with HTML and CSS, delivers a responsive and visually appealing experience for users. With a focus on design, interactivity, and accessibility, it offers seamless browsing on all devices, from desktops to smartphones.",
    href:"https://nishant0708.github.io/coffee-menu-for-mobile-view/"
  },
  {
    id: 6,
    title: "FUN with X's and O's",
    img: ox,
    desc: "I created an interactive version of the classic Tic-Tac-Toe game, also known as The Ox Game, using HTML, CSS, and JavaScript. This web-based game offers a fun and engaging experience, allowing users to play against each other or challenge an AI opponent",
    href:"https://nishant0708.github.io/xo-game/"
  },

  
];


const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
   // offset: ["start start","end start"]
  });


;

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  
  const redirect = () => {
    window.location.href = item.href; // Use item.href instead of items.href
  };

  return (
    <section >
      <div className="container">
        <div className="wrapper">
            <div className="imagecontainer" ref={ref}>
      <img className="img-cointain" style={{border:"5px solid #151515"}} src={item.img} alt="" />
      </div>
         
          <motion.div className="textContainer" style={{y}}>
            <h2 classname="port-title" >{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={redirect}>See Demo</button>
          </motion.div>
          </div>
    
      </div>

    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" id="portfolio" ref={ref}>
      <div className="pro">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;