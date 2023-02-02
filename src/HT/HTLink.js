import React, { useState, useEffect, useRef } from 'react';
// import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react';
import 'handsontable/dist/handsontable.full.min.css';

// register Handsontable's modules
registerAllModules(); // not positive what this does 11/30/22

export default function HTLink(props) {
    const hotRef = useRef(null);
    // const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);
    const [colHeaders, setColHeaders] = useState(null);
    const [columns, setColumns] = useState(null);

    // grab data from props
    useEffect(() => {
        // setOriginalData(props.data);
        setData(props.data);
        setColHeaders(Object.keys(props.data[0]));
    }, []);


    // if no data, Loading screen...
    if (!data || !colHeaders) {
        return (
            <></>
        )
    };

    return (
        <div className='Handson'>
            <HotTable
                ref={hotRef} // API
                data={data}
                // rowHeaders={true}
                colHeaders={colHeaders}
                manualColumnResize={true}
                dropdownMenu={['filter_by_condition', 'filter_action_bar']}
                filters={true}
                // contextMenu={['clear_column', 'freeze_column', 'unfreeze_column']} // this gives a menu on rightClick
                height="800px"
                width="100%"
                licenseKey="non-commercial-and-evaluation" // for non-commercial use only
            />
        </div>
    )

}