import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../App.css';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className='header'>
      <Navbar expand='lg' variant='dark'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Brand>
          <div className='social-icon-box mr-auto'>
            <a href='https://linkedin.com/in/andy-j-marshall'>
              <i class='devicon-linkedin-plain white'></i>
            </a>
            <a href='https://github.com/drewbo1'>
              <i class='devicon-github-original white'></i>
            </a>
          </div>
        </Navbar.Brand>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <li>
              <Link activeClass='active' to='home' spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link activeClass='active' to='me' spy={true} smooth={true}>
                Me
              </Link>
            </li>
            <li>
              <Link activeClass='active' to='projects' spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link activeClass='active' to='contact' spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
