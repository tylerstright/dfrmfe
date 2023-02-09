import { useEffect } from 'react';

import { Form } from 'react-bootstrap';

// https://react-bootstrap.github.io/forms/form-text/

export default function TextInput(props) {


    let controlId; 

    useEffect(() => {
        controlId = props.label.replace(' ', '_').toLowerCase();
        console.log(controlId);
    }, [props])

    if (!props) {
        return <></>;
    }

    return (
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} />
        </Form.Group>
    )
}