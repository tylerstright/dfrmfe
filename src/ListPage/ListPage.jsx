import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import PageHeader from '../Page/PageHeader';
import ListTable from '../Tables/ListTable';

import selectKeys from '../functions/selectKeys';
import flatten from '../functions/flatten';
import simplifyKeys from '../functions/simplifyKeys';
import toTitleCase from '../functions/toTitleCase';

import headerImage from '../images/background.jpg';

export default function ListPage({ target, keys }) {
    const [list, setList] = useState(null);

    const data = useLoaderData();
    // console.log(data);

    // prep data using keys
    useEffect(() => {
        var flatResponse = [];
        data.forEach(x => flatResponse.push(simplifyKeys(flatten(x))));
        // console.log(flatResponse);

        // add view and edit using object.id to assist in routing
        let readyList = flatResponse.map(o => ({ ...o, view: `/${target}/${o.id}/`, edit: `/${target}/${o.id}/edit/` })).map(selectKeys(keys))
        // console.log(readyList);
        setList(readyList);
    }, [data])

    if (!list) {
        return <></>;
    }

    return (
        <>
            <PageHeader title={`${toTitleCase(target)} List`} image={headerImage} />
            <Container className='mt-5 d-flex justify-content-end'>
                <Link className="btn btn-primary" to={`/${target}/new/`} >{`Add New ${toTitleCase(target)}`} </Link>
            </Container>
            <ListTable data={list} />

        </>
    )
}