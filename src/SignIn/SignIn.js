import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CSRFtoken from './CSRFtoken';

export default function SignIn(props) {

    return (
        <Container>
            <br />
            <Row>
                <Col></Col>
                <Col>
                    <h1 className={'text-center'} style={{ color: 'black' }}>Sign In</h1>
                    <p className={'text-center'} style={{ color: 'black' }}>If you have not created an account, please <a href='#'>sign up</a>!</p>
                    <form action={'/accounts/login/'} method={'post'} >
                        <CSRFtoken />
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input name='login' type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input name='password' type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

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