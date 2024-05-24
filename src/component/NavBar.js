import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import github from "../Assets/images/github.svg"
import navIcon1 from '../Assets/images/nav-icon1.svg';
import logo from '../Assets/images/download (3).svg';
import navIcon3 from '../Assets/images/nav-icon3.svg';
import navIcon2 from '../Assets/images/download (1).svg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to='/#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link as={HashLink} to='/#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link as={HashLink} to='/#portfolio' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>


          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/nishant-kaushal-12b25a267/"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/nishant0708"><img src={github} alt="" /></a>
              <a href="https://leetcode.com/nishantkaushal0708/"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/nishant0760/"><img src={navIcon3} alt="" /></a>
            </div>
            <HashLink to='/#contact'>
              <button className="vvd"><span>Let’s Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
