import React from 'react';
import { useLoaderData } from 'react-router-dom';

import profilePic from '../images/parr.jpg';

export default function UserProfile() {

    const profile = useLoaderData();
    console.log(profile);

    const position_class = 'Bio Wan';
    const title = 'Bio';


    return (
        <>
            <div className="container">
                <h1 className="border-bottom my-5 pt-5">{profile.user.first_name} {profile.user.last_name} </h1>
                <div className="container">
                    <br />
                    <div className="d-flex flex-row justify-content-around align-items-center">
                        <img className="p-2 rounded-circle" src={profile.profile_picture} alt={'User profile.'} ></img>
                        <div className='p-2'>
                            <h3>Organization: {profile.organization}</h3>
                            <p><strong>Position Class:</strong> {position_class}</p>
                            <p><strong>Title:</strong> {title}</p>
                            <p><strong>Email:</strong> {profile.user.email}</p>
                            {profile.work_phone ? <p><strong>Work Phone:</strong> {profile.work_phone}</p> : <></>}
                            {profile.mobile_phone ? <p><strong>Mobile Phone:</strong> {profile.mobile_phone}</p> : <></>}
                            {profile.city && profile.state ? <p><strong>Residence:</strong> {profile.city}, {profile.state}</p> : <></>}
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        {profile.bio ? <div className='my-3' dangerouslySetInnerHTML={{ __html: profile.bio }} /> : <></>}
                    </div>
                    <h4 className="border-bottom mb-4">Projects</h4>
                    <div className="container">
                        <ul>
                            <li>TBD</li>
                        </ul>
                    </div>
                    <h4 className="border-bottom mb-4">Publications</h4>
                    <div className="container">
                        <ul>
                            <li>TBD</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}