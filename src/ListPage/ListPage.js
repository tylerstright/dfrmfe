import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeader from '../Page/PageHeader';
import ListTable from '../Tables/ListTable';

import { selectKeys } from '../functions/selectKeys';
import { flatten } from '../functions/flatten';
import { simplifyKeys } from '../functions/simplifyKeys';

import headerImage from '../images/background.jpg';
import toTitleCase from '../functions/toTitleCase';

export default function ListPage() {
    const [target, setTarget] = useState(null); //project, divison, etc.
    const [list, setList] = useState(null);
    const [api, setApi] = useState(null);
    const [keys, setKeys] = useState(null);

    // 1. get target
    useEffect(() => {
        // clear the shiz
        setList(null);
        setApi(null);
        setKeys(null)
        // reset target
        setTarget(window.location.pathname.split('/')[1]);
    }, [window.location.pathname])

    // 2. get API url and keys
    useEffect(() => {
        // url: /project/list/
        // api: /api/project/
        setApi(`/api/${target}/`)
        console.log('API set to: ' + api);
        // keys
        // if (target === 'employee') setKeys(['name', 'title', 'work phone', 'mobile phone', 'active', 'view', 'edit']);
        if (target === 'employee') setKeys(['first name', 'title', 'work phone', 'mobile phone', 'active', 'view', 'edit']);

        if (target === 'project') setKeys(['name', 'created', 'active', 'view', 'edit']);
        if (target === 'division') setKeys(['name', 'director', 'deputy director', 'administrative assistant', 'facility', 'view', 'edit']);
        if (target === 'department') setKeys(['name', 'manager', 'deputy manager', 'administrative assistant', 'facility', 'view', 'edit']);

    }, [target])

    // query api based on url
    useEffect(() => {
        // if all values exist, fetch.
        if (api && target && keys) {
            axios.get(api) // USE THE PROXY!
                .then(response => {
                    console.log(response);
                    // console.log(response.data[0]);
                    var flatResponse = [];
                    response.data.forEach(x => flatResponse.push(simplifyKeys(flatten(x))));
                    // console.log(flatten(response.data[0]));
                    console.log(flatResponse);

                    // add view and edit using project.id to assist in routing
                    let readyList = flatResponse.map(o => ({ ...o, view: `/${target}/${o.id}/`, edit: `/${target}/${o.id}/edit/` })).map(selectKeys(keys))
                    console.log(readyList);
                    setList(readyList);
                    // setList(response.data.map(o => ({ ...o, view: `/${target}/${o.id}/`, edit: `/${target}/${o.id}/edit/` })).map(selectKeys(keys)));
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [api, target, keys])

    if (!list) {
        return <></>;
    }

    return (
        <>
            <PageHeader title={`${toTitleCase(target)} List`} image={headerImage} />
            <ListTable data={list} />
        </>
    )
}