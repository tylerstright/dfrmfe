import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function FacilityCard({ facility }) {

    const navigate = useNavigate();
    function redirect() {
        navigate(`/facility/${facility.id}/`);
    };


    return (
        <Col>
            <Card
                className='bg-dark border-primary text-white text-center h-100'
                onClick={redirect}
                style={{ cursor: 'pointer' }}>
                <Card.Body>
                    <Card.Img variant="top" src={facility.facility_image} />
                    <Card.Header as='h4' style={{ color: '#ABE7FC' }} >{facility.name.name}</Card.Header>
                    <Card.Text>{facility.phone_number}</Card.Text>
                    <Card.Text>{facility.street_address}</Card.Text>
                    <Card.Text>{facility.mailing_address}</Card.Text>
                    <Card.Text className={'text-muted'}>Manager: {`${facility.manager.name.user.first_name} ${facility.manager.name.user.last_name}`}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}