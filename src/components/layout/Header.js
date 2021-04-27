import React from 'react';
import { Row } from 'react-bootstrap';
import '../../App.css';

const Header = () => {
  return (
    <div className='header'>
      <Row>
        <div className='full-name mr-auto white'>Andy Marshall</div>
        <Row className='social-icon-box-row'>
          <div className='social-icon-box ml-auto'>
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
