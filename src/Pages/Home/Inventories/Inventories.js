import React from 'react';
import UseInventories from '../../../Hooks/UseInventories';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
    const [inventories] = UseInventories();

    return (
        <div id='inventories'>
            <h1 className='text-center text-primary'>Our Services: {inventories.length}</h1>
            <div className="container inventories-container card-deck">
                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;