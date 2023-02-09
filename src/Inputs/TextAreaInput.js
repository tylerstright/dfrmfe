import { useEffect } from 'react';

import { Form } from 'react-bootstrap';

// https://react-bootstrap.github.io/forms/form-text/

export default function TextAreaInput(props) {

    let controlId; 

    useEffect(() => {
        controlId = props.label.replace(' ', '_').toLowerCase();
    }, [props])

    if (!props) {
        return <></>;
    }

    return (
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control as={props.type} placeholder={props.placeholder} rows={props.rows} />
        </Form.Group>
    )
}