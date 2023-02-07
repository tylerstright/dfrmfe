import React from 'react';

import cardImage from '../images/parr.jpg';

export default function EmployeeCard(props) {

    // currently set up for Projects

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
    )
}