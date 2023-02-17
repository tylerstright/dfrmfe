import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import axios from 'axios';

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
            <Row className='g-3 row-cols-md-3'>
                    {/* {project.project_leader.map(pl => {
                        return (
                            <ProjectCard link={`/project/${project.id}/`} data={project} />
                            <EmployeeCard link={'em'} data= {pl}/>
                        )
                    })} */}
                </Row>
        </>
    )
}