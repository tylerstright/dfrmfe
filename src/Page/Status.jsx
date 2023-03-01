import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import PageHeader from './PageHeader';
import headerImage from '../images/wallowalake.jpg';

export default function Status() {

    // const documents = useLoaderData();
    // console.log(documents);

    return (
        <>
            <PageHeader title={'Snake Basin Fish Status'} image={headerImage} />
            <Container>
                <h1>Lets do it!</h1>
            </Container>
        </>
    )
}