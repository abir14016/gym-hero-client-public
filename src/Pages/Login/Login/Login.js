import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [user1] = useAuthState(auth);

    const navigate = useNavigate();
    if (user) {
        navigate('/');
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        console.log(user1);
    }

    return (
        <div className='pt-5'>
            <PageTitle title="Login"></PageTitle>
            <h2 className='text-primary text-center'>Welcome To Login Page</h2>
            <Form onSubmit={handleLogin} className='form-container bg-dark text-white p-4 my-4 rounded'>
                <h4 className='text-center'>please login</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
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