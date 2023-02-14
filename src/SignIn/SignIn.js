import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CSRFtoken from './CSRFtoken';

import Cookies from 'js-cookie';

export default function SignIn(props) {

    const handleSubmit = (event) => {
        console.log('submit login...');
        event.preventDefault();
        // login credentials
        // const loginCreds = new FormData();
        // loginCreds.set('csrfmiddlewaretoken', document.getElementById('csrfmiddlewaretoken').value);
        // loginCreds.set('login', document.getElementById('login').value);
        // loginCreds.set('password', document.getElementById('password').value);
        // log key:value pairs
        // for (let pair of loginCreds.entries()) {
        //     console.log(pair[0] + ': ' + pair[1]);
        // }

        // console.log(csrftoken);

        // request
        axios.post('/accounts/login/', {
            Username: document.getElementById('login'),
            Password: document.getElementById('password')
        }
            // , {
            //     headers: {
            //         "X-CSRFToken": csrftoken,  // django will convert this into "HTTP_X_CSRFTOKEN", which is the default CSRF_HEADER_NAME.
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     }
            // }
        )
            .then(response => { // success
                console.log(response);
                console.log('Login.js: Successful Login: ' + response.status);
                // redirect to home, hide SignIn link.
            })
            .catch(error => { // failure
                console.log('Login failed!')
                console.log(error);
                alert('Username and Password combination not accepted, please try again.');
                document.getElementById('login').value = '';
                document.getElementById('password').value = '';
            });
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
        <Container>
            <br />
            <Row>
                <Col></Col>
                <Col>
                    <button onClick={tryUsers}>tryAPI w/ token</button>
                    <h1 className={'text-center'} style={{ color: 'black' }}>Sign In</h1>
                    <p className={'text-center'} style={{ color: 'black' }}>If you have not created an account, please <a href='#'>sign up</a>!</p>
                    <form action={'/accounts/login/'} method={'post'} >
                        {/* <CSRFtoken /> */}
                        <input id={'login'} name='login' type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                        <input id={'password'} name='password' type="password" className="form-control" placeholder="Password" />
                        <button type='submit'>Send</button>
                    </form>
                    {/* <form id={'login-form'} onSubmit={handleSubmit}>
                        <CSRFtoken />
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input id={'login'} name='login' type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input id={'password'} name='password' type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form> */}

                    {/* <div className="input-group mb-3">
                        <span className="input-group-text" style={{ width: '100px' }} >Username</span>
                        <input id={'usernameInput'} type="text" className="form-control" aria-label="Username" onChange={event => setUsername(event.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" style={{ width: '100px' }} >Password</span>
                        <input id={'passwordInput'} type="password" className="form-control" aria-label="Password" onChange={event => setPassword(event.target.value)} />
                    </div>
                    <div className={'text-center'}>
                        <button className={'btn btn-primary text-center'} type='submit' onClick={submitLogin}>Sign In</button>
                    </div>
                    <br />
                    <a className={'text-center'} style={{ display: 'block' }} href="#">Forgot password?</a>
                    <br /> */}
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}