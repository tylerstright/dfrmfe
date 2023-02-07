import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeader from '../Page/PageHeader';
import HTLink from '../HT/HTLink';
import ListTable from '../Tables/ListTable';


import { selectKeys } from '../functions/selectKeys';

import headerImage from '../images/background.jpg';

export default function ProjectsList() {
    const [projectsList, setProjectsList] = useState(null);


    // query departments on first page visit.
    useEffect(() => {

        // fields to be shown on list
        const keepKeys = ['name', 'created', 'active', 'view', 'edit'];

        axios.get('/api/project/') // USE THE PROXY!
            .then(response => {
                // console.log('/api/project/ response:');
                // console.log(response);
                // add view and edit using project.id to assist in routing
                const listData = response.data.map(o => ({...o, view: `/project/${o.id}/`, edit: `/project/${o.id}/edit/`})).map(selectKeys(keepKeys));
                setProjectsList(listData);
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
            <button type='button' onClick={()=> console.log(projectsList)}>projectsList</button>
            <PageHeader title='Projects List' image={headerImage} />
            {/* <HTLink data={projectsList} /> */}
            <ListTable data={projectsList} />
        </>
    )
}