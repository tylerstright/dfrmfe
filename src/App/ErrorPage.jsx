import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouteError } from 'react-router-dom';
import errorFace from '../images/errorFace.png';

export default function ErrorPage() {

  let error = useRouteError();
  console.log(error);

  return (
    <Container id='error-page' className='my-4' >
      <br />
      <Row>
        <Col></Col>
        <Col classname='justify-content-center'>
          <h1 className='text-center'>Oops!</h1>
          <p className='text-center'>Sorry, an unexpected error has occurred.</p>
          <img src={errorFace} alt='Ill stick figure.' className='mx-auto d-block' />
        </Col>
        <Col></Col>
      </Row>
      <br />
    </Container>
  )
}