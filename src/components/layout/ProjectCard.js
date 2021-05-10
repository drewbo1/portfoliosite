import React from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popover from 'react-bootstrap/Popover';

const popover = (
  <Popover id='popover-basic'>
    <Popover.Title as='h3'>Code</Popover.Title>
    <Popover.Content>
      This code is in a private repository. Access can be granted on request.
    </Popover.Content>
  </Popover>
);

const ProjectCard = ({
  title,
  subTitle,
  text,
  button1,
  button1ref,
  button2,
  button2ref,
  iOSUrl,
  androidUrl,
  singleButton,
  handleClick,
}) => {
  return (
    <div className='project-card'>
      <div className='title'>{title}</div>
      <div className='sub-title'>{subTitle}</div>
      <div className='body-text' onClick={() => handleClick()}>
        {text}
      </div>
      <div className='button-box'>
        <Row>
          <Col>
            {button1 && (
              <Button variant='outline-dark' href={button1ref}>
                {button1}
              </Button>
            )}
          </Col>
          <Col>
            {button2 && (
              <Button variant='outline-dark' href={button2ref}>
                {button2}
              </Button>
            )}
          </Col>
        </Row>
      </div>

      <div className='button-box'>
        <Row>
          <Col>
            {iOSUrl && (
              <Button href={iOSUrl} className='store-button'>
                <i className='fa fa-apple'></i>
              </Button>
            )}
          </Col>
          <Col>
            {singleButton && (
              <OverlayTrigger
                trigger='click'
                placement='bottom'
                overlay={popover}
              >
                <Button variant='outline-dark' className='single-button'>
                  {singleButton}
                </Button>
              </OverlayTrigger>
            )}
          </Col>
          <Col>
            {androidUrl && (
              <Button href={androidUrl} className='store-button'>
                <i className='fa fa-android'></i>
              </Button>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProjectCard;
