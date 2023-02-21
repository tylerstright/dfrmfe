import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import PageHeader from '../Page/PageHeader';
import Description from '../Page/Description';
import EmployeeCard from '../Cards/EmployeeCard';

import headerImage from '../images/background.jpg';

export default function ProjectDetail() {

    const project = useLoaderData();
    console.log(project);

    return (
        <>
            <PageHeader title={project.name} image={headerImage} />
            <Description description={project.description} />

            <Row className="bg-dark" >
                <Col className='my-4' md={{ span: 8, offset: 2 }}>
                    <Row className='g-3 row-cols-md-3 justify-content-around'>
                        {project.project_leader.map(pl => {
                            return (
                                <EmployeeCard key={pl.id} employee={pl} />
                            );
                        })}
                    </Row>
                </Col>
            </Row>

            <Outlet />
        </>
    )
}