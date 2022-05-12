import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    return (
        <div className='pt-5'>
            <PageTitle title="Register"></PageTitle>
            <h2 className='text-primary text-center'>Welcome To Rgister Page</h2>
            <Form className='form-container bg-dark text-white p-4 my-4 rounded'>
                <h4 className='text-center'>please Register</h4>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className={agree ? 'text-success' : 'text-danger'} onClick={() => setAgree(!agree)} type="checkbox" name='terms' label="Accept terms & condition" />
                </Form.Group>
                <div className='text-center'>
                    <Button variant="primary" type="submit" disabled={!agree}>
                        Register
                    </Button>
                </div>
                <p>Already have an acount? <Link to="/login" className='text-primary text-decoration-none'>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Register;