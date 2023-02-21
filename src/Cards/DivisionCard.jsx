import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function DivisionCard({ division }) {

    const navigate = useNavigate();
    function redirect() {
        navigate(`/division/${division.id}/`);
    };

    return (
        <Col>
            <Card 
                className='bg-dark border-primary text-white text-center h-100'
                onClick={redirect} 
                style={{ cursor: 'pointer' }}>
                <Card.Body>
                    <Card.Header as='h4' style={{ color: '#ABE7FC' }} >{division.name}</Card.Header>
                    <Card.Text className={'text-muted'}>
                        {`Director: ${division.director.name.user.first_name} ${division.director.name.user.last_name}`} 
                        </Card.Text>
                    <Card.Img className='rounded' variant="top" src={division.project_image1} />
                    <div className='my-3' dangerouslySetInnerHTML={{ __html: division.description.slice(0, 500) }} />
                </Card.Body>
            </Card>
        </Col>
    )
}