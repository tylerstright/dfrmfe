import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import PageHeader from '../Page/PageHeader';
import FacilityCard from '../Cards/FacilityCard';
import headerImage from "../images/Clearwater_River_Home_Page.jpg";

export default function Facilities() {

    const facilities = useLoaderData();
    console.log(facilities);

    return (
        <>
            <PageHeader title='Department Facilities' image={headerImage} />
            <Container className='my-5'>
                <Row className='g-3 row-cols-md-3'>
                    {facilities.map(facility => {
                        return (
                            <FacilityCard link={`/facility/${facility.id}/`} data={facility} />
                        )
                    })}
                </Row>
            </Container>
        </>
    );
}