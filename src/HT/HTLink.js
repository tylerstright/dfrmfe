import React, { useState, useEffect, useRef } from 'react';
// import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';
import { HotTable, HotColumn } from '@handsontable/react';
import { ActiveCheck, EditButton, ViewButton } from './HTButtons';
import 'handsontable/dist/handsontable.full.min.css';

import toTitleCase from '../functions/toTitleCase';

// register Handsontable's modules
registerAllModules(); // not positive what this does 11/30/22

export default function HTLink(props) {
    const hotRef = useRef(null);
    // const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);
    const [colHeaders, setColHeaders] = useState(null);
    // const [columns, setColumns] = useState(null);

    // grab data from props
    useEffect(() => {
        // setOriginalData(props.data);
        setData(props.data);
        setColHeaders(Object.keys(props.data[0]));
    }, [props.data]);


    // if no data, Loading screen...
    if (!data || !colHeaders) {
        return (
            <></>
        )
    };

    return (
        <div className='container p-5'>
            <button type='button' onClick={() => console.log(props.data)}>log data</button>
            <HotTable
                ref={hotRef} // API
                data={data}
                colHeaders={colHeaders.map(field => toTitleCase(field))}
                manualColumnResize={true}
                disableVisualSelection={true}
                height="800px"
                width="1200px"
                licenseKey="non-commercial-and-evaluation" // for non-commercial use only
            >
                {/* We need to loop through, generate the view/edit buttons, and have other fields read Only text. */}
                {colHeaders.map((column, index) => {
                    if (column === 'view') return (
                        <HotColumn className='htCenter htMiddle' key={index} data={column} width={75} readOnly={true}>
                            <ViewButton hot-renderer />
                        </HotColumn>
                    )
                    if (column === 'edit') return (
                        <HotColumn className='htCenter htMiddle' key={index} data={column} width={75} readOnly={true}>
                            <EditButton hot-renderer />
                        </HotColumn>
                    )
                    if (column === 'name') return (
                        <HotColumn key={index} data={column} width={500} readOnly={true} />
                    )
                    if (column === 'active') return (
                        <HotColumn className='htCenter htMiddle' key={index} data={column} width={75} readOnly={true}>
                            <ActiveCheck hot-renderer />
                        </HotColumn>
                    )
                    return <HotColumn key={index} data={column} width={200} readOnly={true} />
                })}
            </HotTable>
        </div>
    )

}