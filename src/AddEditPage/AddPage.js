import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeader from '../Page/PageHeader';

import FormBuilder from '../Forms/FormBuilder';

import { useLocation } from 'react-router';

import headerImage from '../images/background.jpg';
import toTitleCase from '../functions/toTitleCase';
import objToArray from '../functions/objToArray';

export default function AddPage() {
    const [target, setTarget] = useState(null); //project, divison, etc.
    const [api, setApi] = useState(null);
    const [options, setOptions] = useState(null);

    const location = useLocation();

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

    if (!options) {
        return <></>;
    }

    return (
        <>
            <PageHeader title={`Add ${toTitleCase(target)}`} image={headerImage} />
            <FormBuilder options={objToArray(options.actions.POST)} />
        </>
    )
}