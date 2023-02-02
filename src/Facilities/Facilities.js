import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeader from '../Page/PageHeader';

import headerImage from "../images/Clearwater_River_Home_Page.jpg";

export default function Facilities() {
    const [facilities, setFacilities] = useState(null);

    // query departments on first page visit.
    useEffect(() => {
        axios.get('/api/facility/') // USE THE PROXY!
            .then(response => {
                console.log('/api/facility/ response:');
                console.log(response);
                setFacilities(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    // facilities must exist or .map throws error
    if (!facilities) {
        return <></>;
    }

    return (
        <>
            <PageHeader title='Facilities' image={headerImage} />
            {/* <Leaflet/>*/}
            <div className='container'>
                <table className="table table-striped">
                    <thead className='border-dark border-bottom border-2'>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Manager</th>
                            <th>Administrative Assistant</th>
                            <th>View</th>
                        </tr>
                    </thead >
                    <tbody>
                        {facilities.map((f, i) => {
                            return (
                                <tr key={i}>
                                    <td>{f.name}</td>
                                    <td>{f.street_address}, {f.city}, {f.state} {f.zipcode}</td>
                                    <td>{f.phone_number}</td>
                                    <td>{f.manager}</td>
                                    <td>{f.administrative_assistant}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}