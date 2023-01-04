import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/logo.png'
import facebook from '../images/footer-facebook.png';
import twitter from '../images/large-twitter.png';
import instagram from '../images/footer-instagram.png';
import './Footer.css';

export default function Footer() {
    return (
        <>
            <div className={'bottom-bar'}> 
                {/* <div className={'container-fluid'}></div> */}
            </div>
            <div className={'footer-content'}>
                <Container >
                    <Row>
                        <Col className={'row text-center'}>
                            <a href="/"><img src={logo} alt="Nez Perce Tribe Logo" /></a>
                        </Col>
                        <Col>
                            <ul>
                                <li className={'footer-li'} ><a className={'footer-a'} href="/" aria-current="page">Fisheries Home</a></li>
                                <li className={'footer-li'} ><a className={'footer-a'} href="https://nezperce.org" target="_blank" rel="noreferrer nofollow">Nez Perce Tribe Home</a></li>
                                <li className={'footer-li'} ><a className={'footer-a'} href="https://nezperce.org/about/" target="_blank" rel="noreferrer nofollow">About the Nez Perce Tribe</a></li>
                                <li className={'footer-li'} ><a className={'footer-a'} href="https://nezperce.org/contact/employment/" target="_blank" rel="noreferrer nofollow">Employment Opportunities</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h5 className={'footer-h5'} >Contact Us</h5>
                            <address>
                                100 Agency Road<br />
                                P.O. Box 305<br />
                                Lapwai, ID 83540
                            </address>
                            <p>Administration Office: <a className={'footer-a'} href="tel:+12088437323" style={{ color: 'white', textDecoration: 'underline' }}>208-843-2253</a></p>
                            {/* <p>Sweetwater Office: <a href="tel:+12088437145" style={{ color: 'white', textDecoration: 'underline' }}>208-843-2253</a></p>
                    <p>Orofino Office: <a href="tel:+12084767417" style={{ color: 'white', textDecoration: 'underline' }}>208-843-2253</a></p>
                    <p>Joseph Office: <a href="tel:+15414322500" style={{ color: 'white', textDecoration: 'underline' }}>208-843-2253</a></p>
                    <p>McCall Office: <a href="tel:+12086345290" style={{ color: 'white', textDecoration: 'underline' }}>208-843-2253</a></p> */}
                        </Col>
                        <Col>
                            <h5 className={'footer-h5'}>Follow us on</h5>
                            <a className={'p-1'} href="https://www.facebook.com/Nez-Perce-Tribe-1653756024857496" target="_blank" rel="noreferrer nofollow"><img src={facebook} alt="Facebook" /></a>
                            <a className={'p-1'} href="https://twitter.com/NezPerce_Tribe" target="_blank" rel="noreferrer nofollow"><img src={twitter} alt="Twitter" /></a>
                            <a className={'p-1'} href="https://www.instagram.com/nezpercetribe/" target="_blank" rel="noreferrer nofollow"><img src={instagram} alt="Instagram" /></a>
                        </Col>
                    </Row>
                    <Row className={'justify-content-center pb-4'} >
                        Nez Perce Tribe Department of Fisheries Resources Management. Copyright © 2022 Nez Perce Tribe. All rights reserved.
                    </Row>
                </Container>
            </div>
        </>
    )
}