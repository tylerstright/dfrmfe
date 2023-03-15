import React from 'react';
import { useLoaderData } from 'react-router-dom';

import profilePic from '../images/parr.jpg';

export default function UserProfile() {

    const profile = useLoaderData();
    console.log(profile);

    // this needs to be fixed, but this is fine for now.
    const avatarCSS = {
        maxWidth:'300px',
        maxHeight: '300px',
        overflow: 'hidden',
    }

    const first_name = 'Tyber';
    const last_name = 'Stryte';
    const position_class = 'Bio Wan';
    const title = 'Bio';
    const email = 'ts@npt.o';


    return (
        <>
            <div className="container">
                <h1 className="border-bottom my-5 pt-5">{first_name} {last_name} </h1>
                <div className="container">
                    <br />
                    <div className="d-flex flex-row justify-content-around align-items-center">
                            <img className="p-2 rounded-circle" style={avatarCSS} src={profilePic} alt={'User profile.'} ></img>
                            <div className='p-2'>
                            <h3>Department of Fisheries Resources Management</h3>
                            <p><strong>Position Class:</strong> {position_class}</p>
                            <p><strong>Title:</strong> {title}</p>
                            <p><strong>Email:</strong> {email}</p>
                            {/* {% if profile.work_phone %}<p><strong>Work Phone:</strong> {{ profile.work_phone }}</p>{% endif %}
                        {% if profile.mobile_phone %}<p><strong>Mobile Phone:</strong> {{ profile.mobile_phone }}</p>{% endif %}
                        {% else %}
                        {% if profile.organization %}<p><strong>Organization:</strong> {{ profile.organization }}</p>{% endif %}
                        {% endif %}
                        {% if profile.city and profile.state %}<p><strong>Residence:</strong> {{ profile.city }}, {{ profile.state }}</p>{% endif %} */}
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        {/* {% if profile.bio %}<p>{{ profile.bio | safe }}</p>{% endif %} */}
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