import '../App.css'
import '../styles/Auth.css'
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';
var axios = require('axios');
var qs = require('qs');

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseCode, setReponseCode] = useState(0);

    const history = useHistory();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }


    function SaveCredentials(token, log) {
        Cookies.set("token", token)
        Cookies.set("isLoggedIn", log)
    }

    function handleSubmit(event) {
        event.preventDefault();

        var data = qs.stringify({
            email, password 
        });

        var config = {
            method: 'post',
            url: 'http://login.thepcvit.com/login',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        axios(config).then((res) => {
            setReponseCode(1);
            SaveCredentials(res.data.token, responseCode);
            history.push('/dashboard');
            console.log("Logged In!");
        }).catch(e => console.log(e));
    }

    return (
        <div className="container">
            <Form className="auth-form" onSubmit={handleSubmit}>
                <Form.Group className="auth-form-group" size='lg' controlId="email">
                    <Form.Label className="form-label">Email</Form.Label>
                    <Form.Control
                        className="auth-input"
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e =>setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group  className="auth-form-group" size="lg" controlId="password">
                    <Form.Label className="form-label">Password</Form.Label>
                    <Form.Control
                        className="auth-input"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <div className="auth-options">
                    <Link to='/register'>Register instead</Link>
                    <Button className="button" block size="lg" type="submit" disabled={!validateForm()}>Login</Button>
                </div>
            </Form>
        </div>
    )
}

export default Login
