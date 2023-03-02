import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import { CartesianGrid, Label, Legend, Line, LineChart, ReferenceLine,  ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import PageHeader from './PageHeader';
import headerImage from "../images/background.jpg";

export default function Status() {
    const [rechartsData, setRechartsData] = useState(null);

    const dart = useLoaderData();
    // console.log(dart);

    //https://gka.github.io/palettes/#/9|d|00429d,96ffea,ffffe0|ffffe0,ff005e,93003a|1|1
    const colorblindPalette = ['#00429d', '#4771b2', '#73a2c6', '#a5d5d8', '#ffffe0', '#ffbcaf', '#f4777f', '#cf3759', '#93003a'];

    // prep data for table
    useEffect(() => {
        let stringNoNotes = dart.split('Notes:')[0]; // remove notes

        // split on newline, split on commas - result = array of arrays.
        let array = stringNoNotes.split(/\r?\n/).map(rec => rec.split(','));
        array.pop() // remove oddball record at end (empty quote)

        var headerNames = array.shift();

        // initialize new array, map over array and push objects (make JSON)
        let objArray = [];

        // build JSON for the data table.
        array.forEach(rec => {
            let tmpObj = {};
            headerNames.forEach((field, index) => { field === 'Project' ? tmpObj[field] = rec[index] : tmpObj[field] = Number(rec[index]) });
            objArray.push(tmpObj);
        })

        setRechartsData(objArray);
    }, [dart])



    function test() {
        console.log(Object.keys(rechartsData[0], [2, rechartsData.length]));
    }

    if (!rechartsData) {
        return (
            <Container>
                <p>Loading...</p>
                <button onClick={() => console.log(dart)} >DART</button>
                <button onClick={() => console.log(rechartsData)}>recharts</button>
            </Container>
        )

    }


    return (
        <>
            <PageHeader title={'Snake Basin Fish Status'} image={headerImage} />
            <button onClick={() => console.log(dart)} >DART</button>
            <button onClick={() => console.log(rechartsData)}>recharts</button>
            <button onClick={test}>keys</button>
            <Container className='py-5' style={{ height: '50vh', width: '80vw' }}>
                <ResponsiveContainer width={'100%'} height={'100%'}>
                    <LineChart data={rechartsData}>
                        <CartesianGrid stroke='#ccc' strokeDasharray={'3 3'} />
                        {/* {Object.keys(rechartsData[0]).map((dataKey, index) => {
                            if(dataKey === 'Project' || dataKey === 'Year') return null;
                            else {return <Line key={dataKey} type='monotone' dataKey={dataKey} stroke={colorblindPalette[index]} />}
                        })} */}
                        <Line type='monotone' dataKey='Wild Steelhead' stroke='blue' />
                        <Line type='monotone' dataKey='Chinook' stroke='green' />
                        <XAxis dataKey='Year' padding={{ left: 30, right: 30 }} >
                            <Label value='Year' position='bottom' />
                        </XAxis>
                        <YAxis />
                        <ReferenceLine y={15000} label={{value:"Critical Threshold: 15000", position:'insideBottomLeft'}} type='dashed' stroke="red" strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend align='right' />
                    </LineChart>
                </ResponsiveContainer>
            </Container>
            <Container>
                <Table striped bordered variant='dark' >
                    <thead>
                        <tr>
                            {Object.keys(rechartsData[0]).map(field => {
                                if (field === 'Project') return null;
                                return <th>{field}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {rechartsData.map(rec => {
                            return (
                                <tr>
                                    {Object.values(rec).map(val => {
                                        if (val === 'Lower Granite') return null;
                                        return <td>{val}</td>;
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>

                </Table>

            </Container>
        </>
    )
}