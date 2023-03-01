import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import PageHeader from './PageHeader';
import headerImage from '../images/hatcheryparr.jpg';

export default function Documents() {

    // const documents = useLoaderData();
    // console.log(documents);

    return (
        <>
            <PageHeader title={'Department Documents'} image={headerImage} />
            <Container>
                <h1>We need to build Documents API</h1>
            </Container>
        </>
    )
}