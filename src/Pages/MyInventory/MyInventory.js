import React from 'react';
import { toast } from 'react-toastify';
import './MyInventory.css'

const MyInventory = ({ myInventory }) => {

    const { name, picture, price, _id, myInventories, setMyInventories } = myInventory;

    const handleDeleteMyInventory = (id) => {
        const proced = window.confirm("Are you sure?");
        if (proced) {
            const url = `https://gentle-cove-36367.herokuapp.com/myInventories/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = myInventories?.filter(myInventory => myInventory._id !== id);
                    setMyInventories(remaining);
                    toast("Deleted");
                });
        }
    }

    return (
        <div className='bg-white rounded-pill my-4 py-2 d-flex justify-content-around align-items-center'>
            <div className='text-center'>
                <img style={{ cursor: "pointer" }} className='myInventory-image' src={picture} alt="" />
                <h6>{name}</h6>
            </div>
            <div>
                <h4>$ {price}</h4>
            </div>
            <div>
                <button onClick={() => handleDeleteMyInventory(_id)} className='btn btn-danger'>X</button>
            </div>
        </div>
    );
};

export default MyInventory;