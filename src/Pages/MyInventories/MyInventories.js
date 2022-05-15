import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import MyInventory from '../MyInventory/MyInventory';
import './MyInventories.css';

const MyInventories = () => {
    const [user] = useAuthState(auth);
    const [myInventories, setMyInventories] = useState([]);
    useEffect(() => {


        const getMyInventories = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myInventories?email=${email}`;
            const { data } = await axios.get(url);
            setMyInventories(data);
        }
        getMyInventories();
    }, [user]);

    console.log(user.email);
    return (
        <div>
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
                            key={myInventory}
                            myInventory={myInventory}
                            myInventories={myInventories}
                            setMyInventories={setMyInventories}
                        ></MyInventory>)
                    }
                </div> : <div>
                    <h1 className='text-secondary text-center'>You din not added any inventory yet</h1>
                    <div className='text-center'>
                        <Link to="/addinventory" className='btn btn-primary'>Please Add</Link>
                    </div>
                </div>
            }

        </div>
    );
};

export default MyInventories;