import React from 'react';
// import axios from 'axios';

import TextInput from '../Inputs/TextInput';
import TextAreaInput from '../Inputs/TextAreaInput';
import MultiSelectInput from '../Inputs/MultiSelectInput';
import ImageInput from '../Inputs/ImageInput';
import DateInput from '../Inputs/DateInput';
import SelectInput from '../Inputs/SelectInput';

import { Form, Button, Table } from 'react-bootstrap';

export default function ProjectForm(props) {

    // if (!data) {
    //     return <></>;
    // }

    return (
        <Form>
            {/* <TextInput type='text' label='Project Name:' placeholder='Enter Project Name' rows={2} />
            <TextAreaInput type='textarea' label='Project Description:' placeholder={null} rows={'5'} /> */}
            <MultiSelectInput label={'Project Leader:'} api='/api/employee' />
            <DateInput label='Project Created:' />
            {/* <Form.Check
                label={'Active Project'}
                className={'mb-3 bigCheckBox'}                
            /> */}
            <ImageInput label={'Project Image:'} />
            <hr />
            <h2>Sub-Projects</h2>
            <SelectInput label={'Choose Employee'} api='/api/employee/' />
            <Table striped>
                <thead>
                    <tr>
                        <th>Subproject Name:</th>
                        <th>Subproject Division:</th>
                        <th>Subproject Supervisor:</th>
                        <th>Delete:</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td><TextInput type='text' label={'test'} includeLabel={false} placeholder={'test'} /></td>
                            <td><SelectInput label={'Choose Employee'} includeLabel={false} api='/api/division/' /></td>
                            <td><SelectInput label={'Choose Employee'} includeLabel={false} api='/api/employee/' /></td>
                            <td><Form.Check id={'bigCheckBox'} label={null} /></td>
                        </tr>
                </tbody>
            </Table>
            <hr />
            {/* <Button type='submit' value='Save' size='lg' className='float-end' >Save</Button> */}
        </Form>
    )
}