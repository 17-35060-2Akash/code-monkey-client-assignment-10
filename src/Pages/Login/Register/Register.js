import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import Modal from 'react-bootstrap/Modal';
import './Register.css';


const Register = () => {
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const { createUser, updateUserProfile } = useContext(AuthContext);

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
                handleUpdateProfile(name, photoURL);
                toast.success('Successfully Signed Up!');
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);

            })
    };

    const handleUpdateProfile = (name, photoURL) => {
        updateUserProfile({
            displayName: name,
            photoURL: photoURL
        })
            .then(() => { })
            .catch(error => console.error(error))
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
                        label={<>Accept all the <Link onClick={() => setShow(true)} >Terms & Conditions</Link> </>} required />
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
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        <span className='text-success fw-normal'>Terms and Conditions</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <strong>Links To Other Web Sites</strong><br />
                        Our Service may contain links to third-party web sites or services that are not owned or controlled
                        by My Company (change this).
                        My Company (change this) has no control over, and assumes no responsibility for, the content,
                        privacy policies, or practices of any third party web sites or services. You further acknowledge and
                        agree that My Company (change this) shall not be responsible or liable, directly or indirectly, for any
                        damage or loss caused or alleged to be caused by or in connection with use of or reliance on any
                        such content, goods or services available on or through any such web sites or services.
                        <br /><br />
                        <strong>Changes</strong><br />
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                        revision is material we will try to provide at least 30 (change this) days' notice prior to any new terms
                        taking effect. What constitutes a material change will be determined at our sole discretion.
                        <br /><br />
                        <strong>Contact Us</strong><br />
                        If you have any questions about these Terms, please contact us.
                    </p>
                </Modal.Body>
            </Modal>

        </Container>
    );
};

export default Register;