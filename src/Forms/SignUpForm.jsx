import React from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import Cookies from 'js-cookie';

import { TextInput } from './Inputs';

export default function SignUpForm(props) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const csrftoken = Cookies.get("csrftoken");

        console.log('submit login...');

        if (data.password !== document.getElementById('password-repeat').value) {
            console.log('Passwords did not match.');
            return alert('Woops! Your passwords do not match! Please try again.');
        } else {
            console.log('data:');
            console.log(data);
            console.log("response:")
            axios.post('/api/user/', data
                , {
                    headers: {
                        "X-CSRFToken": csrftoken,  // django will convert this into "HTTP_X_CSRFTOKEN", which is the default CSRF_HEADER_NAME.
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            )
                .then(response => { // 200 doesn't necessarily mean I was given authorization. Should it be returning an auth token??
                    console.log(response);
                })
                .catch(error => { // failure
                    console.log('SignUp failed!')
                    console.log(error);
                });
        }
    }


    function tryNew() {
        console.log('tryNew...');
        const csrftoken = Cookies.get("csrftoken");


        axios.get('/api/user/' //, {
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
            });
    }

    return (
        <Container className='my-4' >
            <br />
            <button onClick={tryNew}>tryNew</button>
            <Row>
                <Col></Col>
                <Col>
                    <h1 className={'text-center'} style={{ color: 'black' }}>Sign Up</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <Form.Group className="mb-3" controlId={'username'}>
                            <Form.Label>E-mail Address*</Form.Label>
                            <Form.Control
                                type='email'
                                {...register('username', {
                                    required: 'You must provide an email.' //,
                                    // pattern: {
                                    //     value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    //     message: 'You must enter a valid email to submit the form.'
                                    //}
                                })}
                                required
                            />
                            {errors['username'] && <p className="errorMsg">{errors['username'].message}</p>}
                        </Form.Group>
                        
                        <TextInput
                            name='first_name'
                            label='First Name'
                            type='text'
                            placeholder={null}
                            register={register}
                            errors={errors}
                            validationSchema={{ required: 'First name is required' }}
                            required={true}
                        />

                        <TextInput
                            name='last_name'
                            label='Last Name'
                            type='text'
                            placeholder={null}
                            register={register}
                            errors={errors}
                            validationSchema={{
                                required: 'Last name is required',
                            }}
                            required={true}
                        />

                        <Form.Group className="mb-3" controlId={'password'}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                {...register('password', { required: 'You must provide a password.' })}
                                required
                            />
                            {errors['password'] && <p className="errorMsg">{errors['password'].message}</p>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password (repeat)</Form.Label>
                            <Form.Control
                                id='password-repeat'
                                type='password'
                                // {...register('password-repeat', { required: 'You must provide a password.' })}
                                required
                            />
                            {errors['password-repeat'] && <p className="errorMsg">{errors['password-repeat'].message}</p>}
                        </Form.Group>

                        <Button className='my-3' type='submit' value='Save' size='lg' >Sign Up</Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}