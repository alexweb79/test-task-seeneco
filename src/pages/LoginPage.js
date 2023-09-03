import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {login} from '../redux/auth/authActions';
import {ROUTES} from '../constants';
import {Alert, Button, Col, Form, Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Title from '../components/Title';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {isAuthenticated, error} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate(ROUTES.profile)
        }
    }, [isAuthenticated, navigate])

    const submitForm = (event) => {
        event.preventDefault();
        dispatch(login({username, password}))
    };

    return (
        <>
            <Title title="Login Page"/>
            <Container>
                <Row>
                    <Col md="auto">
                        <Form onSubmit={submitForm}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    onChange={e => setUsername(e.target.value)}
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>

                        {error && <Alert variant="danger">{error}</Alert>}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LoginPage;
