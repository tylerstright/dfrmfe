import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function SignUpForm(props) {
    const navigate = useNavigate();

    function handleSignOut(event) {
        event.preventDefault();
        props.setUserId(null);
        props.setToken(null);
        props.setFullName(null);
        props.setIsAdmin(false);
        navigate('/');
    }

    return (
        <Container className='my-5' >
            <Row>
                <Col></Col>
                <Col className='text-center'>
                    <h1 style={{ color: 'black' }}>Sign Out</h1>
                    <p style={{ fontSize: '1.2rem' }}>Are you sure you want to sign out?</p>
                    <Button className='my-3' onClick={handleSignOut} variant='danger' size='lg' >Sign Out</Button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}