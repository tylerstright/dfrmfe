import React from 'react';
import { Card, Col, Stack } from 'react-bootstrap';
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
                    <Card.Img className='overflow-hidden' src={facility.facility_image} style={{ minWidth: '300px', maxHeight: '300px' }} />

                    <Card.Header as='h4' className ='mt-3' style={{ color: '#ABE7FC' }} >{facility.name.name}</Card.Header>
                    <Card.Text className={'text-muted'}>Manager: {`${facility.manager.name.user.first_name} ${facility.manager.name.user.last_name}`}</Card.Text>
                    <Stack className='my-3' gap={0}>
                        <Card.Text>{facility.phone_number} </Card.Text>
                        <Card.Text>{facility.street_address}</Card.Text>
                        <Card.Text >{facility.mailing_address}</Card.Text>
                    </Stack>
                </Card.Body>
            </Card>
        </Col>
    )
}