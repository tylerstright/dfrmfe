import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import HomeHeader from '../images/background.jpg'
import DFRM from '../images/DFRM.png';
import NPT from '../images/NPT.png';

export default function Home() {
    return (
        <>
            <div style={{ height: '500px', width: '100%', overflow: 'hidden' }}>
                <img src={HomeHeader}
                    style={{
                        minWidth: '100%',
                        minHeight: '500px',
                        position: 'relative',
                        top: '50%',
                        transform: 'translateY(-50%) translateX(-50%)',
                        left: '50%',
                    }} alt=''></img>
            </div>
            <Row className='p-5 bg-dark' >
                <Col md={{ span: 2, offset:1 }}>
                    <img src={NPT}  className='mx-auto d-block' height={150} />
                </Col>
                <Col md={{ span: 6 }}>
                    <h1 style={{ 
                            color: '#ABE7FC', 
                            textAlign: 'center', 
                            fontWeight: 'bold', 
                            fontSize: '4rem' }} >Department of Fisheries Resources Management</h1>
                </Col>
                <Col md={{ span: 2 }} >
                    <img src={DFRM} className='mx-auto d-block' height={150} />
                </Col>
            </Row>
        </>
    )
}