import React from 'react';
import google from '../../../images/social/google-logo.png';
import facebook from '../../../images/social/facebook-logo.png';
import github from '../../../images/social/github-logo.png';
import './SocialLogin.css';
import { useAuthState, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);

    const [user] = useAuthState(auth);

    const location = useLocation();
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    if (googleUser || githubUser || facebookUser) {
        navigate(from, { replace: true });
    }
    // console.log(user?.displayName);


    let errorElement;
    if (googleError || githubError || facebookError) {
        errorElement = <span>Error: {googleError?.message} {githubError?.message} {facebookError?.message}</span>
    }
    let loadingElemrnt;
    if (googleLoading || githubLoading || facebookLoading) {
        loadingElemrnt = <span>Loading...</span>
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>

            <p style={{ color: "red" }}>{errorElement}</p>
            <p>{loadingElemrnt}</p>

            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary d-block mx-auto social-login-button'>
                    <img style={{ width: "32px" }} src={google} alt="" />
                    <span className='px-2'>Google sign in</span>
                </button>

                <button onClick={() => signInWithFacebook()} className='btn btn-primary d-block mx-auto my-3 social-login-button'>
                    <img style={{ width: "32px" }} src={facebook} alt="" />
                    <span className='px-2'>Facebook sign in</span>
                </button>

                <button onClick={() => signInWithGithub()} className='btn btn-primary d-block mx-auto social-login-button'>
                    <img style={{ width: "32px" }} src={github} alt="" />
                    <span className='px-2'>Github sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;