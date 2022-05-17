import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import MyInventory from '../MyInventory/MyInventory';
import './MyInventories.css';
import PageTitle from '../Shared/PageTitle/PageTitle';

const MyInventories = () => {
    const [user] = useAuthState(auth);
    const [myInventories, setMyInventories] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {


        const getMyInventories = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myInventories?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyInventories(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getMyInventories();
    }, [user, myInventories, navigate]);

    return (
        <div>
            <PageTitle title="My Items"></PageTitle>
            <div className='profile-container p-4'>
                <div className='container d-flex justify-content-between align-items-center'>
                    <div className='text-secondary'>
                        <img className='rounded-circle' style={{ width: 60 }} src={user.photoURL} alt="" />
                        <h3>{user.displayName}</h3>
                        <p>{user.email}</p>
                    </div>
                    <div>
                        <Link to="/" className='btn btn-primary rounded-pill'>Home</Link>
                    </div>
                </div>
            </div>

            {
                myInventories.length > 0 ? <div className='myInventories-container bg-dark p-5 container'>
                    <h4 className='text-white text-center'>My Inventories</h4>
                    {
                        myInventories.map(myInventory => <MyInventory
                            key={myInventory._id}
                            myInventory={myInventory}
                            myInventories={myInventories}
                            setMyInventories={setMyInventories}
                        ></MyInventory>)
                    }
                </div> : <div>
                    <h1 className='text-secondary text-center'>No Item To Show Here.</h1>
                    <div className='text-center'>
                        <Link to="/addinventory" className='btn btn-primary'>Please Add</Link>
                    </div>
                </div>
            }

        </div>
    );
};

export default MyInventories;