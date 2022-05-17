import React from 'react';
import running from '../../../images/success/running-image.png';
import exercise from '../../../images/success/exercise-image.png';
import training from '../../../images/success/training-image.png';
import './Success.css';

const Success = () => {
    return (
        <div className='container success-container mt-2 py-5'>
            <div className='success-division'>
                <div>
                    <div className='text-center'>
                        <div className='text-center'>
                            <h3 className='text-center'>Running</h3>
                        </div>
                        <div className='text-center success-image-container'>
                            <img style={{ width: 200 }} src={running} alt="" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='text-center'>
                        <div className='text-center'>
                            <h3 className='text-center'>Exercise</h3>
                        </div>
                        <div className='text-center'>
                            <img style={{ width: 200 }} src={exercise} alt="" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='text-center'>
                        <div className='text-center'>
                            <h3 className='text-center'>Training</h3>
                        </div>
                        <div className='text-center'>
                            <img style={{ width: 200 }} src={training} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='text-center'>Way to Success</h2>
        </div>
    );
};

export default Success;