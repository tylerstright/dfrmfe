import React from 'react';
import { Container } from 'react-bootstrap';

export default function SubHeader(props) {

    return (
        <Container className="py-5">
            <h2 className="text-center">{props.title}</h2>
        </Container>
    )
}