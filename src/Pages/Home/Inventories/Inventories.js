import React from 'react';
import { Link } from 'react-router-dom';
import UseInventories from '../../../Hooks/UseInventories';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
    const [inventories] = UseInventories();

    return (
        <div className='py-5' id='inventories'>
            <h1 className='text-center text-primary mb-5'>Our Inventories: {inventories.length}</h1>
            <div className="container inventories-container card-deck">
                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>
            <div className='container text-center mt-5'>
                <Link className='btn btn-dark' to="/manageinventories">Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Inventories;