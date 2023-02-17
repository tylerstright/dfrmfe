import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import PageHeader from '../Page/PageHeader';
import ProjectCard from '../Cards/ProjectCard';
import headerImage from '../images/background.jpg';

export default function Projects() {

    const projects = useLoaderData();
    console.log(projects);

    return (
        <>
            <PageHeader title='Department Projects' image={headerImage} />
            <Container className='my-5'>
                <Row className='g-3 row-cols-md-3'>
                    {projects.map(project => {
                        return (
                            <ProjectCard project={project} />
                        );
                    })}
                </Row>
            </Container>
        </>
    )
}