import {Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
var axios = require('axios');
var qs = require('qs');


function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repPass, setRepPass] = useState('');
    const [name, setName] = useState("");
    const [dept, setDept] = useState("");

    const history = useHistory();
    function validateForm() {
        return email.length > 0 && password.length > 0 && password === repPass;
    }

    function SaveCredentials(token) {
        Cookies.set("token", token)
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {

            var data = qs.stringify({
                name, email, password, department: dept
              });

              var config = {
                method: 'post',
                url: 'http://login.thepcvit.com/signup',
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data : data
              };
              
              axios(config)
              .then(function (response) {
                SaveCredentials(response.token);
                history.push("/dashboard");
              })
              .catch(function (error) {
                console.log(error);
                history.push("/");
              });
        } catch (error) {
            alert(error.message);
            history.push("/");
        }
    }

    return (
        <div className="login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>
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
                <Form.Group size="lg" controlId="repPassword">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={repPass}
                        onChange={e => setRepPass(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="dept">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                        type="text"
                        value={dept}
                        onChange={e => setDept(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>Register</Button>
                <Link to='/'>Login instead</Link>
            </Form>
        </div>
    )
}

export default Login
