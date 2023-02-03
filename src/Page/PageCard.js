import React from 'react';

import cardImage from '../images/parr.jpg';

export default function PageCard(props) {

    // currently set up for Projects

    return (
        <>
            <div className="container">
                <div className="card text-light bg-dark border-dark my-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={cardImage} className="img-fluid rounded-start" alt='' />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <a className="stretched-link" href="{% url 'division_detail' pk=d.pk %}">
                                    <h3 className="card-title" style={{ color: '#ABE7FC' }}>{props.data.name}</h3>
                                </a>
                                {/* the description contains html in it, so this is necessary. Is this a best practice, or should be avoided? https://reactjs.org/docs/dom-elements.html*/}
                                <div dangerouslySetInnerHTML={{ __html: props.data.description.slice(0,500)}} />
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Director: {props.data.project_leader[0]}</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}