import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import CSRFtoken from './CSRFtoken';

import Cookies from 'js-cookie';

export default function SignInForm(props) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('submit login...');
        console.log(data)

        // console.log(csrftoken);

        // request
        // axios.post('/accounts/login/', {
        //     Username: document.getElementById('login'),
        //     Password: document.getElementById('password')
        // }
        //     // , {
        //     //     headers: {
        //     //         "X-CSRFToken": csrftoken,  // django will convert this into "HTTP_X_CSRFTOKEN", which is the default CSRF_HEADER_NAME.
        //     //         'Accept': 'application/json',
        //     //         'Content-Type': 'application/json'
        //     //     }
        //     // }
        // )
        //     .then(response => { // success
        //         console.log(response);
        //         console.log('Login.js: Successful Login: ' + response.status);
        //         // redirect to home, hide SignIn link.
        //     })
        //     .catch(error => { // failure
        //         console.log('Login failed!')
        //         console.log(error);
        //         alert('Username and Password combination not accepted, please try again.');
        //         document.getElementById('login').value = '';
        //         document.getElementById('password').value = '';
        //     });
    }

    function tryUsers() {
        const csrftoken = Cookies.get('csrftoken');

        // axios.get('/api/employee/', {
        // axios.get('/api/employee/2/', {
        // axios.options('/api/employee/' //,
        axios.head('/api/employee/' //,
            // {
            //     headers: {
            //         "X-CSRFToken": csrftoken,  // django will convert this into "HTTP_X_CSRFTOKEN", which is the default CSRF_HEADER_NAME.
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     }
            // }
        )
            .then(response => { // success
                console.log(response);
            })
            .catch(error => { // failure
                console.log(error);
            });
    }

    return (
        <Container className='my-4' >
            <br />
            <Row>
                <Col></Col>
                <Col>
                    <button onClick={tryUsers}>tryAPI w/ token</button>
                    <h1 className={'text-center'} style={{ color: 'black' }}>Sign In</h1>
                    <p className={'text-center'} style={{ color: 'black' }}>If you have not created an account, please <a href='#'>sign up</a>!</p>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId={'Username'}>
                            <Form.Control
                                type='email'
                                placeholder='Username'
                                {...register('Username', {
                                    required: 'You must provide your username.' //,
                                    // pattern: {
                                    //     value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    //     message: 'You must enter a valid email to submit the form.'
                                    //}
                                })}
                                required
                            />
                            {errors['UserName'] && <p className="errorMsg">{errors['UserName'].message}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId={'Password'}>
                            <Form.Control
                                type='password'
                                placeholder='Password'
                                {...register('Password', {required: 'You must provide a password.'})}
                                required
                            />
                            {errors['Password'] && <p className="errorMsg">{errors['Password'].message}</p>}
                        </Form.Group>
                        <Button className='my-3' type='submit' value='Save' size='lg' >Sign In</Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}