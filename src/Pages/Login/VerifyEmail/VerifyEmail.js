import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import auth from '../../../firebase.init';

const VerifyEmail = () => {
    const [user] = useAuthState(auth);
    console.log(user.emailVerified)
    const [sendEmailVerification] = useSendEmailVerification(auth);
    return (
        <div>
            <PageTitle title="Verify"></PageTitle>
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