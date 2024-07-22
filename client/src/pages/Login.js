import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.loginUser({ email, password });
            localStorage.setItem('authToken', data.token);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="my-5">
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <h1>Sign In</h1>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Button type="submit" variant="primary">
                            Sign In
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
