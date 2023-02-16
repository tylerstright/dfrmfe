import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

import PageHeader from '../Page/PageHeader';
import PageCard from '../Page/PageCard';
import headerImage from '../images/background.jpg';

export default function Projects() {
    const [projects, setProjects] = useState(null);

    // // query departments on first page visit.
    // useEffect(() => {
    //     axios.get('/api/project/') // USE THE PROXY!
    //         .then(response => {
    //             console.log('/api/project/ response:');
    //             console.log(response);
    //             setProjects(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, [])

    // if (!projects) {
    //     return <></>;
    // }

    return (
        <>
            <PageHeader title='Projects' image={headerImage} />
            {projects.map(p => {
                return (
                    <PageCard data={p} />
                )
            })}
        </>
    )
}