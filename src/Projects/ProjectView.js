import React from 'react';
import { useLoaderData } from 'react-router-dom';

// import axios from 'axios';
import PageHeader from '../Page/PageHeader';
import Description from '../Page/Description';
import EmployeeCard from '../Page/EmployeeCard';

import headerImage from '../images/background.jpg';
import Projects from './Projects';

export default function ProjectView() {
    // const [project, setProject] = useState(null);
    
    const project = useLoaderData();
    // console.log(project);

    return (
        <>
            <PageHeader title={project.name} image={headerImage} />
            <Description description={project.description} />
            <EmployeeCard />
        </>
    )
}