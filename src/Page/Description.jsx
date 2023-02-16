import React from 'react';
import { Container } from 'react-bootstrap';
import cardImage from '../images/parr.jpg';

export default function Description(props) {

    // currently set up for Projects

    return (
        <section className="py-5 container">
            <div className="row py-lg-5">
                <div className="col-lg-8 mx-auto">
                    <p className='lead text-muted'>
                    <div dangerouslySetInnerHTML={{ __html: props.description}} />
                    </p>
                </div>
            </div>
        </section>
    )
}