import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
var axios = require('axios');
var qs = require('qs');

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {

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
              
              axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
              })
              .catch(function (error) {
                console.log(error);
              });
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size='lg' controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e =>setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>Login</Button>
                <Link to='/register'>Register</Link>
            </Form>
        </div>
    )
}

export default Login
