import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeader from '../Page/PageHeader';

import ProjectForm from '../Forms/ProjectForm';

import { Container } from 'react-bootstrap';


import headerImage from '../images/background.jpg';
import toTitleCase from '../functions/toTitleCase';

export default function EditPage() {
    const [target, setTarget] = useState(null); //project, divison, etc.
    const [id, setId] = useState(null);
    const [api, setApi] = useState(null);
    const [data, setData] = useState(null);

    // 1. get target and id
    useEffect(() => {
        // clear the shiz
        setApi(null);
        setData(null);
        // reset listType
        setTarget(window.location.pathname.split('/')[1]);
        setId(window.location.pathname.split('/')[2]);
    }, [window.location.pathname])

    // 2. get API url
    useEffect(() => {
        // url: /project/list/
        // api: /api/project/
        if (target && id) {
            setApi(`/api/${target}/${id}/edit/`)
            console.log('API set to: ' + api);
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

    function testTypes(data) {
        for (let i of Object.keys(data)) {
            console.log(typeof (i));
        }
    }

    if (!data) {
        return <></>;
    }

    return (
        <>
            <PageHeader title={`Add/Edit ${toTitleCase(target)}`} image={headerImage} />
            <button onClick={() => console.log(data)}>data</button>
            <button onClick={() => testTypes(data)}>types</button>

            <Container>
                <ProjectForm />
            </Container>
            <br /><br />

        </>
    )
}