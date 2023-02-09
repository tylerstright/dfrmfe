import React from 'react';
// import axios from 'axios';

import TextInput from './TextInput';
import CheckboxInput from './CheckboxInput';

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


            <CheckboxInput key={'project-active'} id={'project-active'} label={'Active Project (check for yes)'}/>


            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </Form>
    )
}