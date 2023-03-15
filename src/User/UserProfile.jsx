import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

export default function UserProfile(props) {

    const profile = useLoaderData();
    console.log(profile);

    const position_class = 'Bio Wan';
    const title = 'Bio';


    return (
        <Container>
            <h1 className="border-bottom my-5 pt-5">{profile.user.first_name} {profile.user.last_name} </h1>
            <Container>
                <br />
                <Row className="d-flex flex-row">
                    <Col className='d-flex p-2 justify-content-center' >
                        <img className="rounded-circle" src={profile.profile_picture} alt={'User profile.'} ></img>
                    </Col>
                    <Col className='p-2'>
                        <h3>Organization: {profile.organization}</h3>
                        <p><strong>Position Class:</strong> {position_class}</p>
                        <p><strong>Title:</strong> {title}</p>
                        <p><strong>Email:</strong> {profile.user.email}</p>
                        {profile.work_phone ? <p><strong>Work Phone:</strong> {profile.work_phone}</p> : <></>}
                        {profile.mobile_phone ? <p><strong>Mobile Phone:</strong> {profile.mobile_phone}</p> : <></>}
                        {profile.city && profile.state ? <p><strong>Residence:</strong> {profile.city}, {profile.state}</p> : <></>}
                    </Col>
                </Row>
                <Row className="d-flex flex-row">
                    {profile.bio ? <div className='my-3' dangerouslySetInnerHTML={{ __html: profile.bio }} /> : <></>}
                </Row>
                <h4 className="border-bottom mb-4">Projects</h4>
                <Container>
                    <ul>
                        <li>TBD</li>
                    </ul>
                </Container>
                <h4 className="border-bottom mb-4">Publications</h4>
                <Container>
                    <ul>
                        <li>TBD</li>
                    </ul>
                </Container>
                {profile.user.id === props.userId ?
                    <Container className='my-5 d-flex justify-content-end'>
                        <Link className="btn btn-primary" to={`/accounts/profile/${props.userId}/edit/`} >Edit Profile </Link>
                    </Container>
                    : <></>}
            </Container>
        </Container>
    )
}