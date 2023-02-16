import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function FacilityCard({ link, data }) {

    const navigate = useNavigate();
    function redirect() {
        navigate(link);
    };


    return (
        <Col>
            <Card
                className='bg-dark border-primary text-white text-center h-100'
                onClick={redirect}
                style={{ cursor: 'pointer' }}>
                <Card.Body>
                    <Card.Img variant="top" src={data.facility_image} />
                    <Card.Header as='h4' style={{ color: '#ABE7FC' }} >{data.name}</Card.Header>
                    <Card.Text>{data.phone_number}</Card.Text>
                    <Card.Text>{data.street_address}</Card.Text>
                    <Card.Text>{data.mailing_address}</Card.Text>
                    <Card.Text className={'text-muted'}>Manager: {data.manager}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}