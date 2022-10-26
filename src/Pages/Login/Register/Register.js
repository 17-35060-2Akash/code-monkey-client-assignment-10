import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import './Register.css';


const Register = () => {
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                toast.success('Successfully Signed Up!');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);

            })
    };

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    };


    return (
        <Container className=' py-5 register-container d-flex justify-content-center align-items-center'>
            <Form onSubmit={handleRegister} className='text-start' style={{ width: '28rem' }}>
                <h2 className='display-5 text-center py-5'>Please Sign Up here</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Photo URL" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handleAccepted}
                        label={<>Accept all the <Link to='/terms'>Terms & Conditions</Link> </>} required />
                </Form.Group>

                <Form.Text className="text-danger fs-6 fw-normal">
                    {error}
                </Form.Text> <br />


                <Button variant='primary' type="submit" className='px-5 mt-3 my-bg-red' disabled={!accepted}>
                    Sign Up
                </Button><br />
                <div className='my-5 py-3 text-end'>
                    <h2 className='display-6'>Already Have an account?</h2>
                    <Link to='/login'>
                        <Button variant='danger' className='px-5 pb-2 mt-2 my-bg-red'>Login</Button>
                    </Link>
                </div>

            </Form>
        </Container>
    );
};

export default Register;