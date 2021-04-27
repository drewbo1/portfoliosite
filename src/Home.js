import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import { Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Row noGutters={true}>
      <Col>
        <div className='hero-image'>
          <div className='hero-text'>
            <div
              data-aos='fade-in'
              data-aos-delay='500'
              data-aos-duration='2000'
            >
              <h1>Andy Marshall</h1>
            </div>
            <div
              data-aos='fade-in'
              data-aos-delay='1200'
              data-aos-duration='2400'
            >
              <h3>Frontend developer</h3>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='container'>
            <div className='project-heading'>
              <h2>Projects</h2>
            </div>

            <Row className='card-row'>
              <Col lg={4}>
                <Card className='project-card'>
                  <Card.Title>One</Card.Title>
                </Card>
              </Col>
              <Col lg={4}>
                <Card className='project-card'>
                  <Card.Title>Two</Card.Title>
                </Card>
              </Col>
              <Col lg={4}>
                <Card className='project-card'>
                  <Card.Title>Three</Card.Title>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Home;
