import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';

const FrontCard = ({ title, imageUrl, handleClick, color, isTouch, alt }) => {
  const cardColor = `plain-card ${color}`;
  const altText = `${alt}`;
  return (
    <div className={cardColor}>
      <Col className='card-col'>
        <Row className='plain-card-row'>
          <div className='card-image'>
            <Image src={imageUrl} fluid alt={altText} />
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

FrontCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  isTouch: PropTypes.bool.isRequired,
  alt: PropTypes.string.isRequired,
};

export default FrontCard;
