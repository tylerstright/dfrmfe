import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ link, data }) {

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
                    <Card.Header as='h4' style={{ color: '#ABE7FC' }} >{data.name}</Card.Header>
                    <Card.Text className={'text-muted'}>Project Leader: {data.project_leader} </Card.Text>
                    <Card.Img variant="top" src={data.project_image1} />
                    <div dangerouslySetInnerHTML={{ __html: data.description.slice(0, 500) }} />
                    {/* <Card.Footer className={'text-muted'} >{data.project_leader}</Card.Footer> */}
                </Card.Body>
            </Card>
        </Col>
    )
}