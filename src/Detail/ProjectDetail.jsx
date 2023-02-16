import React from 'react';
import { useLoaderData } from 'react-router-dom';

import PageHeader from '../Page/PageHeader';
import Description from '../Page/Description';
import EmployeeCard from '../Cards/EmployeeCard';

import headerImage from '../images/background.jpg';

export default function ProjectDetail() {
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