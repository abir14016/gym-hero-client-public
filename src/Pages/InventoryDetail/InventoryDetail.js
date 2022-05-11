import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import UseInventoryDetail from '../../Hooks/UseInventoryDetail';
import './InventoryDetail.css'

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory] = UseInventoryDetail(inventoryId)
    const { _id, name, picture, deccription, price, quantity, supplier } = inventory;


    const [reduceQuantity, setReduceQuantity] = useState(quantity);
    const handleDelivered = () => {
        setReduceQuantity(quantity - 1);
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
                            <p>Quantity: {reduceQuantity}</p>
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