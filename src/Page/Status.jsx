import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import Plot from 'react-plotly.js';

import PageHeader from './PageHeader';
import headerImage from "../images/background.jpg";

export default function Status() {
    // const [data, setData] = useState(null);
    const [plotlyData, setPlotlyData] = useState(null);
    const [headers, setHeaders] = useState(null);

    const dart = useLoaderData();
    console.log(dart);

    // prep data for plotly
    useEffect(() => {
        setPlotlyData(null);
        setHeaders(null);
        let stringNoNotes = dart.split('Notes:')[0]; // remove notes

        // split on newline, split on commas - result = array of arrays.
        let array = stringNoNotes.split(/\r?\n/).map(rec => rec.split(','));
        array.pop() // remove oddball record at end (empty quote)

        // // capture headers from first index, which is removed by shift (alters array) dope!!!!!!!!
        let headerNames = array.shift();
        setHeaders(headerNames)

        let arrayData = [];

        array.map((rec, index) => {
            if (index === 0) for (let i = 0; i < rec.length; i++) { arrayData.push([]) }; // first iteration add empty arrays
            rec.map((num, index) => arrayData[index].push(Number(num)));
        });
        setPlotlyData(arrayData);

    }, [dart])

    // prep data for table
    useEffect(() => {
        // initialize new array, map over array and push objects (make JSON)
        // let objArray = [];

        // // // build JSON for the data table.
        // array.map(rec => {
        //     let tmpObj = {};
        //     headers.map((field, index) => { field === 'Project' ? tmpObj[field] = rec[index] : tmpObj[field] = Number(rec[index]) });
        //     objArray.push(tmpObj);
        // })
        // setData(objArray);
    }, [plotlyData])

    if (!plotlyData) {
        return (
            <Container>
                <p>Loading...</p>
                <button onClick={() => console.log(plotlyData[4])}>test</button>
                <button onClick={() => console.log(headers)} >headers</button>
                <button onClick={() => console.log(headers.indexOf('Steelhead'))} >headersIndex</button>
                <button onClick={() => console.log(plotlyData[headers.indexOf('Steelhead')])}>test</button>
                <button onClick={() => console.log(dart)} >DART</button>
            </Container>
        )

    }


    return (
        <>
            <PageHeader title={'Snake Basin Fish Status'} image={headerImage} />
            <button onClick={() => console.log(plotlyData[4])}>test</button>
            <button onClick={() => console.log(headers)} >headers</button>
            <button onClick={() => console.log(headers.indexOf('Steelhead'))} >headersIndex</button>
            <button onClick={() => console.log(plotlyData[headers.indexOf('Steelhead')])}>test</button>
            <button onClick={() => console.log(dart)} >DART</button>
            <Container className='my-5' style={{ backgroundColor: 'blue' }}>
                <Plot
                    data={[
                        {
                            x: plotlyData[headers.indexOf('Year')],
                            y: plotlyData[headers.indexOf('Steelhead')],
                            type: 'scatter',
                            mode: 'lines',
                            marker: { color: 'blue' },

                        },
                    ]}
                    layout={{
                        title: 'Steelhead Counts at Lower Granite Dam',
                        xaxis: {
                            title: 'Steelhead'
                        },
                        yaxis: {
                            title: 'Window Count'
                        }

                    }}
                />
            </Container>

        </>
    )
}