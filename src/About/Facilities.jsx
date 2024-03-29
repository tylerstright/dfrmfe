import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';

import PageHeader from '../Page/PageHeader';
import FacilityCard from '../Cards/FacilityCard';
import headerImage from "../images/Clearwater_River_Home_Page.jpg";

export default function Facilities() {

    const facilities = useLoaderData();
    console.log(facilities);

    return (
        <>
            <PageHeader title='Department Facilities' image={headerImage} />
            <Outlet />
            <Container className='my-5'>
                <Row className='g-3 row-cols-md-3'>
                    {facilities.map(facility => {
                        return (
                            <FacilityCard key={facility.id} facility={facility} />
                        )
                    })}
                </Row>
            </Container>
        </>
    );
}