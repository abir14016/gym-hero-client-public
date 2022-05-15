import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import VerifyEmail from '../VerifyEmail/VerifyEmail';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        // return <VerifyEmail></VerifyEmail>
        return <button className='btn btn-danger'
            onClick={async () => {
                await sendEmailVerification();
                toast('email sent');
            }}
        >
            Send verification email
        </button>
    }
    return children;
};

export default RequireAuth;