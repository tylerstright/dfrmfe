import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeader from '../Page/PageHeader';
import ListTable from '../Tables/ListTable';

import { selectKeys } from '../functions/selectKeys';

import headerImage from '../images/background.jpg';
import toTitleCase from '../functions/toTitleCase';

export default function ListPage() {
    const [list, setList] = useState(null);
    const [api, setApi] = useState(null);

    // get API url
    useEffect(() => {
        setApi('/api' + window.location.pathname)
    }, [window.location.pathname])

    // pull title from url
    var title = toTitleCase(window.location.pathname
        .substring(1, window.location.pathname.length-1) // remove leading and trailing slash
        .replace(/\//g, ' ') // replace middle slash
        );

    // // query api based on url
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
            <button type='button' onClick={()=> console.log(api)}>api</button>
            {/* <button type='button' onClick={()=> console.log(list)}>list</button> */}
            <PageHeader title={title} image={headerImage} />
            <ListTable data={list} />
        </>
    )
}