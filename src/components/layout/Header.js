import React from 'react';
import { Row } from 'react-bootstrap';
import '../../App.css';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className='header'>
      <Row>
        <Row className='nav-row mr-auto'>
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
            }}
          >
            <li>
              <Link activeClass='active' to='home' spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to='me' spy={true} smooth={true}>
                Me
              </Link>
            </li>
            <li>
              <Link to='projects' spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link to='contact' spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </Row>
        <Row className='social-icon-box-row'>
          <div className='social-icon-box'>
            <a href='mailto:ajmarshall@mail.com'>
              <i class='fas fa-envelope white'></i>
            </a>
            <a href='https://linkedin.com/in/andy-j-marshall'>
              <i class='devicon-linkedin-plain white'></i>
            </a>
            <a href='https://github.com/drewbo1'>
              <i class='devicon-github-original white'></i>
            </a>
          </div>
        </Row>
      </Row>
    </div>
  );
};

export default Header;
