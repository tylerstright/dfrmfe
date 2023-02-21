import React from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

export default function TaskDetail() {

    const subproject = useOutletContext();

    const tasks = useLoaderData();
    console.log(tasks);
    console.log(subproject);

    if (tasks.length === 0) {
        return (<></>);
    }

    return (
        <>
            {tasks.map(task => {
                if (task.subproject.name === subproject) {
                    return (
                        <Col md={{ offset:1}}>
                            <ul>
                                <li>{task.name}</li>
                                <ul>
                                    <li>{`Supervisor: ${task.supervisor.name.user.first_name} ${task.supervisor.name.user.last_name}`}</li>
                                    <li>{task.description}</li>
                                </ul>
                            </ul>
                        </Col>
                    )
                } else {
                    return null;
                }
            })}
        </>
    )
}