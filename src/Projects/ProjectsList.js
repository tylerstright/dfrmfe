import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeader from '../Page/PageHeader';
import HTLink from '../HT/HTLink';

import { selectKeys } from '../functions/selectKeys';

import headerImage from '../images/background.jpg';

export default function ProjectsList() {
    const [projectsList, setProjectsList] = useState(null);

    const keepKeys = ['name', 'created', 'active'];

    // query departments on first page visit.
    useEffect(() => {
        axios.get('/api/project/') // USE THE PROXY!
            .then(response => {
                console.log('/api/project/ response:');
                console.log(response);
                setProjectsList(response.data.map(selectKeys(keepKeys)));
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    if (!projectsList) {
        return <></>;
    }

    return (
        <>
            <PageHeader title='Projects List' image={headerImage} />
            <HTLink data={projectsList} />
        </>
    )
}