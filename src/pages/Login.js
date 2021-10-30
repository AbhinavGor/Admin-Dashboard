import axios from 'axios';
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const req_body = JSON.stringify({
                email, password
            });

            console.log(req_body);

            let response = await axios.post('http://login.thepcvit.com/login', req_body);
            console.log(response);
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
            </Form>
        </div>
    )
    return (
        <div>
            
        </div>
    )
}

export default Login
