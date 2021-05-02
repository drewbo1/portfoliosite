import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const FrontCard = ({ title, imageUrl, handleClick, color, isTouch }) => {
  const cardColor = `plain-card ${color}`;
  return (
    <div className={cardColor}>
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
        {isTouch && (
          <Row className='info-icon-row'>
            <i class='fas fa-info-circle black' onClick={() => handleClick()} />
          </Row>
        )}
      </Col>
    </div>
  );
};

export default FrontCard;
