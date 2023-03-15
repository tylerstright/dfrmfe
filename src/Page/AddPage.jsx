import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeader from './PageHeader';

import Cookies from 'js-cookie';

import FormBuilder from '../Forms/FormBuilder';

import { useLocation } from 'react-router';

import headerImage from '../images/background.jpg';
import toTitleCase from '../functions/toTitleCase';
import objToArray from '../functions/objToArray';

export default function AddPage(props) {
    const [target, setTarget] = useState(null); //project, divison, etc.
    const [api, setApi] = useState(null);
    const [options, setOptions] = useState(null);

    const location = useLocation();

    const csrftoken = Cookies.get('csrftoken');


    // 1. get target and id
    useEffect(() => {
        // clear the shiz
        setApi(null);
        setOptions(null);
        // reset listType
        setTarget(location.pathname.split('/')[1]);
    }, [location.pathname])

    // 2. get API url for OPTIONS call
    useEffect(() => {
        if (target) { setApi(`/api/${target}/`) }
    }, [target])

    // 3. API call
    useEffect(() => {
        // if all values exist, fetch.
        if (api && target) {
            axios.options(api)
                .then(response => {
                    console.log(response.data);
                    setOptions(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [api, target])

    function makeProj() {
        axios.post(api,
            {
                // id: ,
                name: 'test1',
                description: 'testing project make',
                created: '2022-02-02',
                active: true,
                project_image1: 'puzzl2.png',
                project_leader: 29
            },
            {
                headers: {
                    "X-CSRFToken": csrftoken,  // django will convert this into "HTTP_X_CSRFTOKEN", which is the default CSRF_HEADER_NAME.
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': props.token 
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    if (!options) {
        return <></>;
    }

    return (
        <>
            <PageHeader title={`Add ${toTitleCase(target)}`} image={headerImage} />
            <button onClick={() => console.log(api)}>addpage API</button>
            <button onClick={makeProj}>makeProj {props.token}</button>
            <FormBuilder options={objToArray(options.actions.POST)} />
        </>
    )
}