import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import PageHeader from './PageHeader';
import headerImage from '../images/wallowalake.jpg';

export default function News() {

    // const documents = useLoaderData();
    // console.log(documents);

    return (
        <>
            <PageHeader title={'Department News'} image={headerImage} />
            <Container>
                <h1>We need to build News API</h1>
            </Container>
        </>
    )
}