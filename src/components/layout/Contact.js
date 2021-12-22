import React, { Fragment, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleIsLoadingToggle = () => {
    setIsLoading((isLoading) => !isLoading);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = formData;
    handleIsLoadingToggle();
    let templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Andy',
      message: message,
    };
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === 'OK') {
            alert('Your mail is sent!');
            handleIsLoadingToggle();
          }
        },
        (error) => {
          console.log(error.text);
          alert('There was a problem, your mail could not be sent.');
          handleIsLoadingToggle();
        }
      );
    clearForm();
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Fragment>
      <Container>
        <Card className='contact-card'>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                placeholder='Name'
                onChange={updateInput}
                value={formData.name || ''}
              />
            </Form.Group>
            <Form.Group controlId='formEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Email'
                onChange={updateInput}
                value={formData.email || ''}
              />
            </Form.Group>
            <Form.Group controlId='formMessage'>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as='textarea'
                name='message'
                placeholder='Message'
                onChange={updateInput}
                value={formData.message || ''}
                rows={3}
              />
            </Form.Group>
            {isLoading ? (
              <Spinner animation='border' variant='dark' />
            ) : (
              <Button variant='dark' type='submit'>
                Submit
              </Button>
            )}
          </Form>
        </Card>
      </Container>
    </Fragment>
  );
};

export default Contact;
