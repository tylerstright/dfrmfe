import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import npt1855 from '../images/NPT.png';

export default function SignIn(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

        // submitting Login information...
        const handleSubmit = (event) => {
            event.preventDefault();
            axios.post('/services/api/v1/account/login', {
                Username: username,
                Password: password
            })
                .then(response => { //on success
                    if (response.status === 200) {
                        //console.log(response);
                        props.setUser({
                            loginStatus: response.status,
                            Id: response.data.User.Id,
                            Username: response.data.User.Username,
                            FullName: response.data.User.Fullname,
                        });
                        console.log('Login.js: Successful Login: ' + response.status);
                        props.setLoginStatus(response.status);
                        // hide login container / modal thing
                        document.getElementsByClassName('login-container')[0].style.display = 'none';
                    }
                })
                .catch(error => { //on failure
                    console.log('Login failed!')
                    console.log(error);
                    alert('Username and Password combination not accepted, please try again.');
                    document.getElementById('usernameInput').value = '';
                    document.getElementById('passwordInput').value = '';
                });
        }
    

    return (
        <Container style={{backgroundColor: 'pink'}}>
            <form onSubmit={handleSubmit} >
                <img src={npt1855} alt='Nez Perce Tribe 1855 Logo' /> <br />
                <input
                    id='usernameInput'
                    type='text'
                    className='username'
                    placeholder='CDMS Username'
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    required
                /> <br />
                <input
                    id='passwordInput'
                    type='Password'
                    className='password'
                    placeholder='Password'
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                /> <br />
                <button type='submit' >Login</button>
            </form>
        </Container>
    )
}