import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const FrontCard = ({ title, imageUrl }) => {
  return (
    <div className='plain-card'>
      <Col className='card-col'>
        <Row className='plain-card-row'>
          <div className='card-image'>
            <Image src={imageUrl} fluid />
          </div>
        </Row>
        <Row className='plain-card-row'>
          <div className='card-title'>
            <h4>{title}</h4>
          </div>
        </Row>
      </Col>
    </div>
  );
};

export default FrontCard;
