import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='pt-5'>
            <PageTitle title="Login"></PageTitle>
            <h2 className='text-primary text-center'>Welcome To Login Page</h2>
            <Form className='form-container bg-dark text-white p-4 my-4 rounded'>
                <h4 className='text-center'>please login</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>

                <p>New to GYM HERO? <Link to="/register" className='text-primary text-decoration-none'>Please Register</Link></p>

                <p>Forget password?<button className='text-primary text-decoration-none btn btn-link'>Reset Password</button></p>

                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Login;