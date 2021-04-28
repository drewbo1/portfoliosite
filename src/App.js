import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../src/components/layout/Header';
import ProjectCard from './components/layout/ProjectCard';
import FrontCard from './components/layout/FrontCard';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);

  return (
    <Container fluid={true} className='p-0'>
      <Row noGutters>
        <Col>
          <div className='hero-image'>
            <Header />
            <div className='hero-text white'>
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
                <h3>Front End Developer</h3>
              </div>
            </div>
          </div>
          <div className='small-section light'>
            <div className='container'>
              <div className='project-heading black'>
                <h2>About me</h2>
                <div className='sub-heading black pt-5'>
                  <h4>
                    I am a Front End web and app developer. I love creating
                    beautiful, responsive pages and learning new technologies. I
                    have a particular interest in JavaScript-based libraries
                    such as React and React Native. I love to solve problems and
                    talk coding.
                  </h4>
                  <Row className='icon-row'>
                    <a href='mailto:ajmarshall@mail.com'>
                      <i class='fas fa-envelope black'></i>
                    </a>
                    <a href='https://linkedin.com/in/andy-j-marshall'>
                      <i class='devicon-linkedin-plain black'></i>
                    </a>
                    <a href='https://github.com/drewbo1'>
                      <i class='devicon-github-original black'></i>
                    </a>
                  </Row>
                </div>
              </div>
            </div>
          </div>
          <div className='section medium'>
            <div className='container'>
              <div className='project-heading'>
                <h2>Projects</h2>
              </div>
              <div className='sub-heading'>
                <h3>App</h3>
              </div>
              <Row className='card-row'>
                <Col lg={6} md={6}>
                  <div
                    onClick={() => {
                      setHovered1(!hovered1);
                    }}
                    onMouseEnter={() => {
                      setHovered1(!hovered1);
                    }}
                    onMouseLeave={() => {
                      setHovered1(!hovered1);
                    }}
                  >
                    {hovered1 ? (
                      <ProjectCard
                        title='Dog Destinations'
                        subTitle='React Native, Hooks, Redux, Firebase'
                        text='Dog Destinations is a multi platform app built with React Native and deployed to both Apple and Google app stores. A user sharing platform for dog owners to share information about locations as well as search locations, rate them and write reviews. Integrates Auth functionality, with Apple, Google and email signup. CRUD actions for the storage of information about users and the locations, image storage and cloud functions.'
                        singleButton='Code'
                        androidUrl='https://play.google.com/store/apps/details?id=com.andrewmarshall.dogdestinations'
                        iOSUrl='https://apps.apple.com/ie/app/dog-destinations/id1534439374#?platform=iphone'
                      />
                    ) : (
                      <FrontCard
                        title='Dog Destinations'
                        imageUrl='https://res.cloudinary.com/dujftalas/image/upload/v1619639711/logo2black_kn3nkw.png'
                      />
                    )}
                  </div>
                </Col>
              </Row>
              <div className='sub-heading'>
                <h3>Websites</h3>
              </div>
              <Row className='card-row'>
                <Col lg={6} md={6}>
                  <div
                    onClick={() => {
                      setHovered2(!hovered2);
                    }}
                    onMouseEnter={() => {
                      setHovered2(!hovered2);
                    }}
                    onMouseLeave={() => {
                      setHovered2(!hovered2);
                    }}
                  >
                    {hovered2 ? (
                      <ProjectCard
                        title='Mrs Marshmallow'
                        subTitle='HTML5, CSS3, JavaScript, PHP, JQuery, Bootstrap'
                        text='A website built for the bespoke cake business of a family member. PHP sessions were used to pass information between the pages of the ordering system. Bootstrap was used for responsiveness and component styling. The site includes a JQuery based image gallery and custom JavaScript form validation. The original site was completed in 2016, but it has been refreshed in 2021. Although the business has now ceased trading, the site is still available below.   '
                        button1='Live site'
                        button1ref='http://www.mrsmarshmallow.co.uk'
                        button2='Code'
                        button2ref='https://github.com/drewbo1/MrsMarshmallow'
                      />
                    ) : (
                      <FrontCard />
                    )}
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  <ProjectCard
                    title='Learn to Drive NI'
                    subTitle='HTML5, CSS3, JavaScript, PHP, mySQL'
                    text='A website design for a way to search for driving instructors in Northern Ireland. Uses Google Maps Geocode API to centre map on entered postcode and loads information from mySQL database. This information is used to populate map with custom markers and complete a  table of information about the locations.  '
                    button1='Live site'
                    button1ref='http://www.marshmallowwebdesign.co.uk/learn-to-drive-ni/index.php'
                    button2='Code'
                    button2ref='https://github.com/drewbo1/learntodrive'
                  />
                </Col>
                <Col lg={6} md={6}>
                  <ProjectCard
                    title='Portfolio'
                    subTitle='React, CSS3, Bootstrap'
                    text='A portfolio site to showcase my projects. This site was built using React, with React-Bootstrap used to create responsive styling and attractive components. It is deployed through Netlify.'
                    button1='Live site'
                    button1ref='https://andy-marshall-portfolio.netlify.app/'
                    button2='Code'
                    button2ref='https://github.com/drewbo1/portfoliosite'
                  />
                </Col>
                <Col lg={6} md={6}>
                  <ProjectCard
                    title='Dog Destinations Website'
                    subTitle='Next.js, Bootstrap, Firebase Cloud Functions'
                    text='A Next.js based React site to compliment the app that I have in the App Store and Play Store.'
                    button1='Live site'
                    button1ref='https://www.dogdestinations.co.uk'
                    button2='Code'
                    button2ref='https://github.com/drewbo1/dd-next-site'
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
