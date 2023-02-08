import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeader from '../Page/PageHeader';

import headerImage from '../images/background.jpg';
import toTitleCase from '../functions/toTitleCase';

export default function EditPage() {
    const [target, setTarget] = useState(null); //project, divison, etc.
    const [id, setId] = useState(null);
    const [api, setApi] = useState(null);
    const [data, setData] = useState(null);

    // 1. get listType
    useEffect(() => {
        // clear the shiz
        setApi(null);
        setData(null);
        // reset listType
        setTarget(window.location.pathname.split('/')[1]);
        setId(window.location.pathname.split('/')[2]);
    }, [window.location.pathname])

    // 2. get API url and keys
    useEffect(() => {
        console.log('target: '+target);
        console.log('id: '+id);
        // url: /project/list/
        // api: /api/project/
        if (target && id) {
            setApi(`/api/${target}/${id}/`)
            console.log('API set to: ' + api);
        }
    }, [target, id])

    // query api based on url
    useEffect(() => {
        // if all values exist, fetch.
        if (api && target && id) {
            axios.get(api) // USE THE PROXY!
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [api, target, id])

    if (!data) {
        return <></>;
    }

    return (
        <>
            <PageHeader title={`Add/Edit ${toTitleCase(target)}`} image={headerImage} />
            <button onClick={()=> console.log(data)}>data</button>
        </>
    )
}