import React, { useEffect, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

import SubHeader from '../Page/SubHeader';


export default function SubProjectDetail() {
    const [subs, setSubs] = useState(null);

    const subProjects = useLoaderData();
    console.log(subProjects);

    useEffect(() => {
        setSubs([...new Set(subProjects.map(sub => sub.name))]);
    }, [subProjects])

    if (subProjects.length === 0 || !subs) {
        return (<></>);
    }

    return (
        <>
            <SubHeader title={'Project Components'} />
            <Container>
                {subs.map((sub, index) => {
                    return (
                        <>
                            <h3>{subProjects[index].division.name}</h3>
                            <hr />
                            <Col className='mb-5'md={{ offset: 1 }}>
                                <h4 className='ml-5'>{subProjects[index].name}</h4>
                                <Outlet context={subs[index]} />
                            </Col>
                        </>
                    )
                })}
            </Container>
        </>
    )
}