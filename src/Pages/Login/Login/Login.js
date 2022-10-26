import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

    }

    return (
        <Container className=' py-5 login-container d-flex justify-content-center align-items-center'>
            <Form onSubmit={handleLogin} className='text-start' style={{ width: '28rem' }}>
                <h2 className='display-5 text-center py-5'>Please Login Here</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept all the cookies" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button><br />

                <div className='my-5 py-3 text-end'>
                    <h2 className='display-6'>New To codeMonkey?</h2>
                    <Link to='/register'>
                        <Button variant='danger' className='px-5 pb-2 mt-2 my-bg-red'>Sign Up</Button>
                    </Link>
                </div>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;