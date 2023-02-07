import React from 'react';
import { ActiveCheck, EditButton, ViewButton } from '../HT/HTButtons';

import toTitleCase from '../functions/toTitleCase';

export default function ListTable(props) {

    if (!props.data) {
        return <></>;
    }

    return (
        <div className='container p-5'>

            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        {/* check permissions to show edit button */}
                        {Object.keys(props.data[0]).map(field => (<th>{toTitleCase(field)}</th>))}
                    </tr>
                </thead >
                <tbody>
                    {props.data.map(rec => {
                        return (
                            <tr>
                                {Object.values(rec).map((val, index) => {

                                    switch (Object.keys(rec)[index]) {
                                        case 'view':
                                            return <td><ViewButton value={val} /></td>;
                                        case 'edit':
                                            return <td><EditButton value={val} /></td>;
                                        case 'active':
                                            return <td className='align-middle'><ActiveCheck value= {val} /></td>
                                        default:
                                            return<td>{val}</td>;
                                    }

                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}