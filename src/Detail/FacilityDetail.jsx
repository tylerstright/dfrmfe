import React from 'react';
import { useLoaderData } from 'react-router-dom';

import PageHeader from '../Page/PageHeader';
import Description from '../Page/Description';
import EmployeeCard from '../Cards/EmployeeCard';

import headerImage from '../images/background.jpg';

export default function FacilityDetail() {
    
    const facility = useLoaderData();
    // console.log(facility);

    return (
        <>
            <PageHeader title={facility.name} image={headerImage} />
            <Description description={facility.description} />
            <EmployeeCard />
        </>
    )
}