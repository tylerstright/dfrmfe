import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeader from '../Page/PageHeader';
import Description from '../Page/Description';
import EmployeeCard from '../Page/EmployeeCard';

import headerImage from '../images/background.jpg';

export default function ProjectView() {
    const [project, setProject] = useState(null);
    
    // get API url
    var api = '/api' + window.location.pathname;

    useEffect(() => {
         axios.get(api) // USE THE PROXY!
            .then(response => {
                console.log('/api/project/:id/ response:');
                console.log(response);
                setProject(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    } ,[api])


    if (!project) {
        return <></>;
    }

    return (
        <>
            <PageHeader title={project.name} image={headerImage} />
            <Description description={project.description} />
            <EmployeeCard />
        </>
    )
}