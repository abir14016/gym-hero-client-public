import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const VerifyEmail = () => {
    setTimeout(function () {
        window.location.reload(1);
    }, 3000);
    const [user, loading] = useAuthState(auth);
    console.log(user.emailVerified)
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    return (
        <div>
            <h3 className='text-danger'>Your email is not varified</h3>
            <h4>Plz check your email</h4>
            <p>or</p>
            <button className='btn btn-danger'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('email sent');
                }}
            >
                Send verification email
            </button>
        </div>
    );
};

export default VerifyEmail;