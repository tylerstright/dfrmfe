import React from 'react';
// import axios from 'axios';

import TextInput from '../Inputs/TextInput';
import TextAreaInput from '../Inputs/TextAreaInput';
import CheckboxInput from '../Inputs/CheckboxInput';
import MultiSelectInput from '../Inputs/MultiSelectInput';
import ImageInput from '../Inputs/ImageInput';
import DateInput from '../Inputs/DateInput';
import SelectInput from '../Inputs/SelectInput';

import { Form, Button } from 'react-bootstrap';

export default function ProjectForm(props) {

    // if (!data) {
    //     return <></>;
    // }

    return (
        <Form>
            <TextInput type='text' label='Project Name:' placeholder='Enter Project Name' rows={2}/>
            <TextAreaInput type='textarea' label='Project Description:' placeholder={null} rows={'5'} />
            <MultiSelectInput label={'Project Leader:'} api='/api/employee' />
            <DateInput label='Project Created:' />
            <CheckboxInput id={'project-active'} label={'Active Project (check for yes)'}/>
            <ImageInput label={'Project Image:'} />
            <hr />
            <h2>Sub-Projects</h2>
            <SelectInput label={'Choose Employee'} api='/api/employee/' />
            <hr />
            <Button type='submit' value='Save' size='lg' className='float-end' >Save</Button>
            <br /> <br />
        </Form>
    )
}