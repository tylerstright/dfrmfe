import React from 'react';
import { Form } from 'react-bootstrap';

// https://react-bootstrap.github.io/forms/form-text/
// https://jujuontheweb.medium.com/how-to-use-react-hook-form-with-your-custom-form-components-a86a1a77cf3c

export default function HiddenId({ id, register }) {

    return (
        <Form.Group className="d.none" controlId={'id'}>
            <Form.Control
                type={'hidden'}
                value={id}
                readOnly
                {...register('id')}
            />
        </Form.Group>
    )
}
