import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import cardImage from '../images/parr.jpg';

//https://react-bootstrap.github.io/layout/grid/

export default function Description(props) {

    // currently set up for Projects

    return (
        <Container className='p-5'>
            <Row>
                <Col xs={10} className='mx-auto'>
                    <div className='lead text-muted' dangerouslySetInnerHTML={{ __html: props.description }} />
                </Col>
            </Row>
        </Container>
    )
}