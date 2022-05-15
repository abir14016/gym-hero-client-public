import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
// const axios = require('axios').default;
import UseInventoryDetail from '../../Hooks/UseInventoryDetail';
import './InventoryDetail.css'

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = UseInventoryDetail(inventoryId)
    const { _id, name, picture, deccription, price, quantity, supplier } = inventory;

    // const navigate = useNavigate();


    const handleDelivered = () => {
        const { quantity, ...rest } = inventory;
        const updatedInventory = {
            quantity: parseInt(quantity) - 1, ...rest,
        }
        if (updatedInventory.quantity < 0) {
            return toast.error("Stock Out");
        }
        else {
            const proced = window.confirm(`Please confirm to deliver 1 ${name} `);
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

    const handleRestock = event => {
        event.preventDefault();
        const restockNumber = parseInt(event.target.restock.value);
        const { quantity, ...rest } = inventory;
        const updatedInventory = {
            quantity: parseInt(quantity) + restockNumber, ...rest,
        }
        const proced = window.confirm("Do you want to restock this inventory");
        if (proced) {
            if (!restockNumber >= 1) {
                return toast.error("Enter a valid number");
            }
            const url = `http://localhost:5000/inventory/${_id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedInventory)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(updatedInventory);
                    console.log('success', data);
                    setInventory(updatedInventory);
                    toast.success("Restock Successfull");
                    event.target.reset();
                })
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
                        <form onSubmit={handleRestock} className='restock-form d-flex justify-content-around'>
                            <input className="w-50 text-center fw-bolder" type="number" name="restock" min={1} max={Infinity} placeholder='Add Quantity' id="restock" />
                            <input type="submit" value="Restock" className='btn btn-primary'></input>
                        </form>
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
                <h2>Description:</h2>
                <p>{deccription}</p>
            </div>
        </div>
    );
};

export default InventoryDetail;