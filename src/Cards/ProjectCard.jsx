import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ project }) {

    const navigate = useNavigate();
    function redirect() {
        navigate(`/project/${project.id}/`);
    };

    return (
        <Col>
            <Card 
                className='bg-dark border-primary text-white text-center h-100'
                onClick={redirect} 
                style={{ cursor: 'pointer' }}>
                <Card.Body>
                    <Card.Header as='h4' style={{ color: '#ABE7FC' }} >{project.name}</Card.Header>
                    <Card.Text className={'text-muted'}>
                        {'Project Leader: '}
                        {project.project_leader.map((pl, index) => {
                                if(index === 0) {
                                    return `${pl.name.user.first_name} ${pl.name.user.last_name}`;
                                } else{
                                    return `, ${pl.name.user.first_name} ${pl.name.user.last_name}`;
                                }
                                
                        })} 
                        </Card.Text>
                    <Card.Img className='rounded' variant="top" src={project.project_image1} />
                    <div className='my-3' dangerouslySetInnerHTML={{ __html: project.description.slice(0, 500) }} />
                </Card.Body>
            </Card>
        </Col>
    )
}