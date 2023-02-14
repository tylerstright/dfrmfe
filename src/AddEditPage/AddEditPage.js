import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeader from '../Page/PageHeader';

// import ProjectForm from '../Forms/ProjectForm';
import HookForm from '../Forms/HookForm';

import { useLocation } from 'react-router';


import headerImage from '../images/background.jpg';
import toTitleCase from '../functions/toTitleCase';

export default function EditPage() {
    const [target, setTarget] = useState(null); //project, divison, etc.
    const [id, setId] = useState(null);
    const [api, setApi] = useState(null);
    const [data, setData] = useState(null);

    const location = useLocation();

    // 1. get target and id
    useEffect(() => {
        // clear the shiz
        setApi(null);
        setData(null);
        // reset listType
        setTarget(location.pathname.split('/')[1]);
        setId(location.pathname.split('/')[2]);
    }, [location.pathname])

    // 2. get API url
    useEffect(() => {
        // url: /project/list/
        // api: /api/project/
        if (target && id) {
            setApi(`/api/${target}/${id}/`)
            // console.log('API set to: ' + api);
        }
    }, [target, id])

    // 3. API call
    useEffect(() => {
        // if all values exist, fetch.
        if (api && target && id) {
            axios.get(api) // USE THE PROXY!
                .then(response => {
                    console.log(response.data);
                    setData(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [api, target, id])

    function getOptions() {
        console.log('fire')
        axios.options(api) // USE THE PROXY!
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function newAPI() {
        console.log('fire')
        axios.post('/api/division/new/') // USE THE PROXY!
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    if (!data) {
        return <></>;
    }

    return (
        <>
            <PageHeader title={`Add/Edit ${toTitleCase(target)}`} image={headerImage} />
            <button onClick={() => console.log(data)}>data</button>
            <button onClick={getOptions}>options request</button>
            <button onClick={() => console.log(location.pathname)}>location.pathname</button>
            <button onClick={newAPI}>new division api</button>
            <HookForm data={data} />
        </>
    )
}