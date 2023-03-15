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
                <Col md={{ span: 2, offset: 1 }}>
                    <img src={NPT} className='mx-auto d-block' height={150} />
                </Col>
                <Col md={{ span: 6 }}>
                    <h1 style={{
                        color: '#ABE7FC',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '4rem'
                    }} >Department of Fisheries Resources Management</h1>
                </Col>
                <Col md={{ span: 2 }} >
                    <img src={DFRM} className='mx-auto d-block' height={150} />
                </Col>
            </Row>
            <Container className='p-5' >
                <Col md={{ span: 8 }}>
                    <p className={'lead text-muted'}>
                        The land and its waters define the Nez Perce way. Over the course
                        of thousands of years, nature has taught us how to live with her.
                        This intimate and sacred relationship unifies us, stabilizes us, humbles
                        us. It is what makes us a distinct people and what gives us our identity.
                        We cannot be separated from the land or our rights without losing
                        what makes us Nez Perce. We defend our rights to preserve who we are
                        and what we hold sacred.
                    </p>
                    <p className={'lead text-muted'}>
                        The Nimiipúu fished, hunted, gathered, pastured
                        livestock and traded over an enormously broad area
                        that includes what is today, Idaho, Washington,
                        Oregon, Montana and Wyoming. This land of rolling
                        hills, towering peaks, prairies, clear mountain
                        streams, and deep canyons has been the Nimiipúu’s
                        homeland since time immemorial. Relative to this
                        extensive area in which they have always lived, the
                        Nimiipúu have accumulated a deep repository of
                        ecological knowledge and wisdom concerning the
                        land, water, and other natural resources. Spirituality
                        and proper respect (in the form of prayer) were
                        incorporated into every aspect of traditional Nimiipúu
                        life: digging roots, hunting and fishing, weaving,
                        teaching children, or taking sweat baths. All activities
                        were conducted according to the Nimiipúu
                        belief system (or Indian way of life). The love and
                        respect for the gifts of the Creator and the Creation
                        guided Nimiipúu activities to avoid acts of greed or selfishness such that the natural resources were
                        not depleted. These traditional guidelines have been
                        learned and passed down over the millennia through
                        Nimiipúu oral traditions (myths and stories), songs,
                        prayers, dances, rituals, and ceremonies.
                    </p>
                </Col>
                <Col></Col>
            </Container>
        </>
    )
}