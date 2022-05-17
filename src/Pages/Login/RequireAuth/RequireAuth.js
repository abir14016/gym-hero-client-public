import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './RequireAuth.css'

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='container verification-container mx-auto shadow-lg border rounded-3 mt-5 p-4'>
            <h3 className='text-danger'>You did not verify your email</h3>
            <p>we sent a email to you. Please check your mail</p>
            <p>or</p>
            <p>if u want to get verification mail again, click the button bellow</p>
            <button className='btn btn-danger'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('email sent');
                }}
            >
                Send verification email
            </button>
            <p className='text-danger'>*After varification, plz refresh the page</p>
        </div>
    }
    return children;
};

export default RequireAuth;