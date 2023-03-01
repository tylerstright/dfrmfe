import React from 'react';
import { Container } from 'react-bootstrap';

import HomeHeader from '../images/background.jpg';

export default function PageHeader(props) {

    // sets desired size of container
    const imgContainerCSS = {
        height: '500px',
        width: '100%',
        overflow: 'hidden',
    }

    // image will fill to one of the min X/Y requirements, center, and overflow as necessary - never losing aspect ratio
    const imgCSS = {
        minWidth: '100%',
        minHeight: '500px',
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%) translateX(-50%)',
        left: '50%',

    }

    return (
        <>
            <div style={imgContainerCSS}>
                <img src={HomeHeader} style={imgCSS} alt=''></img>
            </div>
            <div className="bg-dark">
                <Container className="py-5">
                    <h1 className="text-center text-light">{props.title}</h1>
                </Container>
            </div>
        </>
    )
}