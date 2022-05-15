import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
        toast.success("Login successfull");
    }


    const handleLogin = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        // if (user) {
        //     toast.success("Login successfull");
        // }
    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);



    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Email Sent');
        }
        else {
            toast.error("Plz enter your email");
        }
    }

    return (
        <div className='pt-5'>
            <PageTitle title="Login"></PageTitle>
            <h2 className='text-primary text-center'>Welcome To Login Page</h2>
            <Form onSubmit={handleLogin} className='form-container bg-dark text-white p-4 my-4 rounded'>
                <h4 className='text-center'>please login</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" name='password' placeholder="Password" />
                </Form.Group>

                {
                    error && <p style={{ color: "red" }}>{error.message}</p>
                }
                {
                    loading && <p className='text-warning'>Loading...</p>
                }

                <div className='text-center'>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </div>

                <p>New to GYM HERO? <Link to="/register" className='text-primary text-decoration-none'>Please Register</Link></p>

                <p>Forget password?<button onClick={handleResetPassword} className='text-primary text-decoration-none btn btn-link'>Reset Password</button></p>

                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Login;