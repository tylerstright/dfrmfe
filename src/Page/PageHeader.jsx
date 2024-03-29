import React from 'react';
import { Container } from 'react-bootstrap';

export default function PageHeader({title, image}) {

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
                <img src={image} style={imgCSS} alt=''></img>
            </div>
            <div className="bg-dark">
                <Container className="py-5">
                    <h1 className="text-center text-light">{title}</h1>
                </Container>
            </div>
        </>
    )
}