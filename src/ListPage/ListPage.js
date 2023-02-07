import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeader from '../Page/PageHeader';
import ListTable from '../Tables/ListTable';

import { selectKeys } from '../functions/selectKeys';

import headerImage from '../images/background.jpg';

export default function ListPage() {
    const [list, setList] = useState(null);

    // get API url
    var api = '/api' + window.location.pathname;

    // query api based on url
    useEffect(() => {

        axios.get(api) // USE THE PROXY!
            .then(response => {
                // console.log('/api/project/ response:');
                console.log(response);
                // add view and edit using project.id to assist in routing
                // const listData = response.data.map(o => ({...o, view: `/project/${o.id}/`, edit: `/project/${o.id}/edit/`})).map(selectKeys(keepKeys));?
                setList(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [api])

    if (!list) {
        return <></>;
    }

    return (
        <>
            <button type='button' onClick={()=> console.log(list)}>list</button>
            <PageHeader title='List Page' image={headerImage} />
            {/* <HTLink data={projectsList} /> */}
            <ListTable data={list} />
        </>
    )
}