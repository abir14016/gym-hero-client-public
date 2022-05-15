import React from 'react';
import { Link } from 'react-router-dom';
import support from '../../../images/utilities/support.png';
import './Support.css'

const Support = () => {
    return (
        <div className='bg-secondary py-4 support-division'>
            <div className='support-container container'>
                <div className='text-center'>
                    <img className='support-image' src={support} alt="" />
                </div>
                <div className='border right bg-white p-4 shadow-lg'>
                    <h1>Our support is always on</h1>
                    <h5>24/7 support</h5>
                    <Link to="/supportsession" className='btn btn-primary rounded-pill'>Support</Link>
                </div>
            </div>
        </div>
    );
};

export default Support;