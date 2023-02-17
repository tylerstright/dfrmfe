import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import cardImage from '../images/parr.jpg';

export default function EmployeeCard({ link, data }) {

    const navigate = useNavigate();
    function redirect() {
        navigate(link);
    };


    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row">
                    {/* loop when ready */}
                    <div className="col-4 mx-auto">
                        <div className="card text-light bg-dark border-dark mx-auto text-center border-0 mb-3 mx-2 my-3" style={{width: '200px'}}>
                            <img src={cardImage} className="card-img-top rounded-circle" alt='' width="200px" height="200px" />
                                <div className="card-body">
                                    <a className="stretched-link" href=''><h4 className="card-title" style={{color:'#ABE7FC'}}>Employee Name</h4></a>
                                    <h5 className="text-muted">Position Title</h5>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <Col>
        //     <Card
        //         className='bg-dark border-primary text-white text-center h-100'
        //         onClick={redirect}
        //         style={{ cursor: 'pointer' }}>
        //         <Card.Body>
        //             <Card.Header as='h4' style={{ color: '#ABE7FC' }} >{data.name}</Card.Header>
        //             <Card.Text className={'text-muted'}>Project Leader: {data.project_leader} </Card.Text>
        //             <Card.Img className='rounded-circle' variant="top" src={data.project_image1} />
        //             <div dangerouslySetInnerHTML={{ __html: data.description.slice(0, 500) }} />
        //             {/* <Card.Footer className={'text-muted'} >{data.project_leader}</Card.Footer> */}
        //         </Card.Body>
        //     </Card>
        // </Col>
    )
}