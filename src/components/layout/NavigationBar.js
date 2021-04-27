import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect fixed='top' expand='sm' bg='light' variant='light'>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='justify-content-start'>
          <LinkContainer to='/'>
            <Nav.Link>Andy Marshall</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/About'>
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/Contact'>
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
