import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import PageHeader from '../Page/PageHeader';
import SubHeader from '../Page/SubHeader';
import DivisionCard from '../Cards/DivisionCard';
import EmployeeCard from '../Cards/EmployeeCard';
import headerImage from "../images/Clearwater_River_Home_Page.jpg";
import Description from '../Page/Description';

export default function Divisions() {

    const divisions = useLoaderData();
    console.log(divisions);

    return (
        <>
            <PageHeader title='Fisheries Resources Management' image={headerImage} />
            <Description description='mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus 
            arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut p
            lacerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque 
            viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque 
            massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo' />

            <Container className='my-5' >
                <Row className='g-3 row-cols-md-3'>
                    
                    
                </Row>
            </Container>
            <SubHeader title={'Department Divisions'} />
            <Container className='m-5'>
                <Row className='g-3 row-cols-md-3'>
                    {divisions.map(division => {
                        return (
                            <DivisionCard key={division.id} division={division} />
                        )
                    })}
                </Row>
            </Container>
        </>
    );
}