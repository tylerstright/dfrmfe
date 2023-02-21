import React from 'react';
import { useLoaderData } from 'react-router-dom';

import PageHeader from '../Page/PageHeader';
import EmployeeCard from '../Cards/EmployeeCard';
import FacilityContact from '../Page/FacilityContact';

import headerImage from '../images/background.jpg';

export default function FacilityDetail() {
    
    const facility = useLoaderData();
    console.log(facility);

    return (
        <>
            <PageHeader title={facility.name.name} image={headerImage} />
            <FacilityContact facility={facility} />
            <EmployeeCard employee={facility.manager}/> 
        </>
    )
}