import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
// const axios = require('axios').default;
import UseInventoryDetail from '../../Hooks/UseInventoryDetail';
import './InventoryDetail.css'

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = UseInventoryDetail(inventoryId)
    const { _id, name, picture, deccription, price, quantity, supplier } = inventory;

    const navigate = useNavigate();


    const handleDelivered = () => {
        const { quantity, _id, ...rest } = inventory;
        const updatedInventory = {
            quantity: quantity - 1, ...rest
        }
        if (updatedInventory.quantity < 0) {
            return toast.error("Stock Out");
        }
        else {
            const proced = window.confirm(`Please confirm to deliver one ${name} `);
            if (proced) {
                (async function () {
                    console.log(updatedInventory);
                    const { data } = await axios.put(`http://localhost:5000/inventory/${_id}`, updatedInventory);
                    // navigate('/');
                    console.log(data);
                })();
                setInventory(updatedInventory);
                toast.success("Successfully delivered");
            }
        }
    }

    return (
        <div>
            <h2 className='text-center'>Detailed Information For: {name}</h2>
            <div className="card mb-3 detail-container mx-auto bg-dark text-white">
                <div className="row g-0">
                    <div className="col-md-4 text-center">
                        <img src={picture} className="img-fluid rounded-start" alt="" />
                        <h6 className='text-center mt-2'>ID: {_id}</h6>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center border">
                            <h5 className="card-title">{name}</h5>
                            <p>Price: {price}</p>
                            <p>Quantity: {quantity}</p>
                            <p>Supplier: {supplier}</p>
                            <button onClick={handleDelivered} className='btn btn-success'>Delivered</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <h2>Detail Information:</h2>
                <p>{deccription}</p>
            </div>
        </div>
    );
};

export default InventoryDetail;