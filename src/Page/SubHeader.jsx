import React from 'react';

export default function SubHeader(props) {

    return (
        <>
            <div>
                <div className="container py-5">
                    <h2 className="text-center">{props.title}</h2>
                </div>
            </div>
        </>
    )
}