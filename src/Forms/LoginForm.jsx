import React from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Cookies from 'js-cookie';

export default function LoginForm(props) {

    const csrftoken = Cookies.get('csrftoken');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('submit login...');
        // console.log(data);

        // request
        // axios.post('/api/accounts/login/', data
        axios.get('/api/accounts/' //, data
            // , {
            //     headers: {
            //         "X-CSRFToken": csrftoken,  // django will convert this into "HTTP_X_CSRFTOKEN", which is the default CSRF_HEADER_NAME.
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     }
            // }
        )
            .then(response => { // 200 doesn't necessarily mean I was given authorization. Should it be returning an auth token??
                console.log(response);
            })
            .catch(error => { // failure
                console.log('Login failed!')
                console.log(error);
                // alert('Username and Password combination not accepted, please try again.');
            });
    }

    return (
        <Container className='my-4' >
            <br />
            <Row>
                <Col><button onClick={() => console.log(csrftoken)}>csrf token</button></Col>
                <Col>
                    <h1 className={'text-center'} style={{ color: 'black' }}>Sign In</h1>
                    <p className={'text-center'} style={{ color: 'black' }}>If you have not created an account, please <Link to={'/accounts/signup/'} >sign up</Link>!</p>
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <Form.Group className="mb-3" controlId={'username'}>
                            <Form.Label>E-mail Address</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='username'
                                {...register('username', {
                                    required: 'You must provide your username.' //,
                                    // pattern: {
                                    //     value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    //     message: 'You must enter a valid email to submit the form.'
                                    //}
                                })}
                                required
                            />
                            {errors['userName'] && <p className="errorMsg">{errors['userName'].message}</p>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId={'password'}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Password'
                                {...register('password', { required: 'You must provide a password.' })}
                                required
                            />
                            {errors['password'] && <p className="errorMsg">{errors['password'].message}</p>}
                        </Form.Group>

                        <Button className='my-3' type='submit' value='Save' size='lg' >Login</Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}