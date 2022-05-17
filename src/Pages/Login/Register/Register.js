import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';
import registerImage from '../../../images/utilities/register-logo.png';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [err, setErr] = useState('');
    const [name, setName] = useState('');
    const [photoURL, setPhoURL] = useState('');


    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    let errorElement;
    let errormessage;
    if (error) {
        errormessage = error.message.slice(9, error?.message?.length);
        errorElement = <p style={{ color: "red" }}>Error: {errormessage}</p>
    }

    const [updateProfile] = useUpdateProfile(auth);


    if (user) {
        navigate(from, { replace: true });
    }


    const handleNameField = (e) => {
        setName(e.target.value)
    }

    const handleImageField = (e) => {
        setPhoURL(e.target.value);
    }



    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password.length > 5) {
            errormessage = '';
        }
        if (password === confirmPassword) {
            setErr('');
        }
        if (password !== confirmPassword) {
            setErr("Two password didn't matched");
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='pt-5'>
            <PageTitle title="Register"></PageTitle>
            <h2 className='text-primary text-center'>Welcome To Rgister Page</h2>
            <Form onSubmit={handleRegister} className='form-container bg-dark text-white p-4 my-4 rounded'>
                <div className='text-center p-2'>
                    <img style={{ width: 80 }} src={registerImage} alt="" />
                </div>
                <h4 className='text-center'>please Register</h4>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleNameField} type="text" name='name' placeholder="Enter Your Name" required />
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

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPhotoURL">
                    <Form.Label>Your photoURL</Form.Label>
                    <Form.Control onBlur={handleImageField} type="text" name='photoURL' placeholder="upload photo" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className={agree ? 'text-success' : 'text-danger'} onClick={() => setAgree(!agree)} type="checkbox" name='terms' label="Accept terms & condition" />
                </Form.Group>

                {
                    loading && <p>Loading...</p>
                }

                <div className='text-center'>
                    <Button onClick={async () => {
                        await updateProfile({ displayName: name, photoURL: photoURL });
                        alert('Updated profile');
                    }} variant="primary" type="submit" disabled={!agree}>
                        Register
                    </Button>
                </div>
                <p>Already have an acount? <Link to="/login" className='text-primary text-decoration-none'>Please Login</Link></p>
                {error && errorElement}

                {
                    <p style={{ color: "red" }}>{err}</p>
                }
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Register;