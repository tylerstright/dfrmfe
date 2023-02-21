import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function EmployeeCard({ employee }) {

    const navigate = useNavigate();
    function redirect() {
        navigate(`${employee.id}`);
    };


    return (
        <Col>
            <Card
                className='bg-dark text-white text-center h-100'
                onClick={redirect}
                style={{ cursor: 'pointer' }}>
                <Card.Body>
                    <Card.Img className='rounded-circle' src={employee.name.profile_picture} style={{ height: '200px', width: '200px' }} />
                    <Card.Header as='h4' style={{ color: '#ABE7FC' }} >{`${employee.name.user.first_name} ${employee.name.user.last_name}`}</Card.Header>
                    <Card.Text as='h5' className={'text-muted'}>
                        {employee.title}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}