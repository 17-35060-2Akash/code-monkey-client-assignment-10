import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useState } from 'react';




const Login = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { providerLoginGoogle, signIn, providerLoginGithub, setLoading } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [error, setError] = useState('');

    const [accepted, setAccepted] = useState(false);
    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }


    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                toast.success('Welcome!');
                // navigate('/');
                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => setLoading(false))

    };

    const handleGoogleSignIn = () => {
        providerLoginGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    };

    const handleGithubSignIn = () => {
        providerLoginGithub(githubProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    };

    return (
        <section className='login-container'>
            <Container className='login-form d-flex flex-column justify-content-center align-items-center ps-5'>
                <Form onSubmit={handleLogin} className='text-start' style={{ width: '28rem' }}>
                    <h2 className='display-5 text-center py-5'>Please Login Here</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" onClick={handleAccepted} label="Accept all cookies" required />
                    </Form.Group>

                    <Form.Text className="text-danger fs-6 fw-normal">
                        {error}
                    </Form.Text> <br />

                    <Button variant="primary" type="submit" className='px-5 pb-2 mt-3' disabled={!accepted}>
                        Login
                    </Button><br />

                    <div className='my-5 py-3 text-end'>
                        <h2 className='display-6'>New To codeMonkey?</h2>
                        <Link to='/register'>
                            <Button variant='danger' className='px-5 pb-2 mt-3 my-bg-red'>Sign Up</Button>
                        </Link>
                    </div>

                </Form>
            </Container>

            <div className='bg-light'>
                <h4 className='fs-3 fw-lighter pt-4'>or login by</h4>
                <div className='other-options-form '>
                    <Button onClick={handleGoogleSignIn} variant='outline-dark' className='my-2 py-3 auth-sign-in-btn'><span className='d-flex flex-row justify-content-center align-items-center'><FaGoogle className='text-primary me-2 fs-4'></FaGoogle><span className='text-nowrap'>Google Login</span></span></Button>
                    <Button onClick={handleGithubSignIn} variant='outline-dark' className='my-2 py-3 auth-sign-in-btn'><span className='d-flex flex-row justify-content-center align-items-center'><FaGithub className='text-success me-2 fs-4'></FaGithub><span className='text-nowrap'>Github Login</span></span></Button>
                </div>
            </div>
        </section>
    );
};

export default Login;