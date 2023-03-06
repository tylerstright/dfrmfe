import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { ActiveCheck, EditButton, ViewButton } from '../HT/HTButtons';

import toTitleCase from '../functions/toTitleCase';
import 'leaflet/dist/leaflet.css';


export default function ListTable(props) {

    if (!props.data) {
        return <></>;
    }

    return (
        <Container className='p-5'>
            <Table striped bordered variant='dark'>
                <thead>
                    <tr>
                        {/* check permissions to show edit button */}
                        {Object.keys(props.data[0]).map(field => (<th key={field} >{toTitleCase(field)}</th>))}
                    </tr>
                </thead >
                <tbody>
                    {props.data.map((rec, index) => {
                        return (
                            <tr key={index}>
                                {Object.values(rec).map((val, index) => {
                                    // it will throw an error here because I'm not passing keys.. 2/7/23
                                    switch (Object.keys(rec)[index]) {
                                        case 'view':
                                            return <td key={index} ><ViewButton value={val} /></td>;
                                        case 'edit':
                                            return <td key={index} ><EditButton value={val} /></td>;
                                        case 'active':
                                            return <td key={index} className='align-middle'><ActiveCheck value={val} /></td>
                                        default:
                                            return <td key={index} >{val}</td>;
                                    }

                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}