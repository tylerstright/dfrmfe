import React from 'react';
import { useLoaderData } from 'react-router-dom';

import PageHeader from '../Page/PageHeader';
import Description from '../Page/Description';
import EmployeeCard from '../Cards/EmployeeCard';

import headerImage from '../images/background.jpg';

export default function DivisionDetail() {
    
    const division = useLoaderData();
    console.log(division);

    return (
        <>
            <PageHeader title={division.name} image={headerImage} />
            <Description description={division.description} />
            <EmployeeCard />
        </>
    )
}