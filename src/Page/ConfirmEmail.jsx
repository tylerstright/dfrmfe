import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function ConfirmEmail() {

    return (
        <Container className='my-5' >
            <Row>
                <Col className='text-center'>
                    <h1 style={{ color: 'black' }}>Account Created!</h1>
                    <p style={{ fontSize: '1.2rem' }}>
                        We have sent an e-mail to you for verification.
                        Follow the link provided to finalize the signup process. 
                        If you do not see the verification e-mail in your main inbox, check your spam folder.
                        Please contact us if you do not receive the verification e-mail within a few minutes.</p>
                </Col>
            </Row>
        </Container>
    )
}