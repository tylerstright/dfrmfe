import React from 'react';
// import axios from 'axios';

import TextInput from './TextInput';

import { Form } from 'react-bootstrap';

export default function ProjectForm() {



    // if (!data) {
    //     return <></>;
    // }

    return (
        <Form>
            <TextInput type='text' label='Project Name' placeholder='Enter Project Name' />
            
            <TextInput type='text' label='Lochsa' placeholder='River' />

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Project Description</Form.Label>
                <Form.Control as="textarea" rows={4} />
            </Form.Group>
        </Form>
    )
}