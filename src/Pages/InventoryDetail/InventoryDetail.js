import React from 'react';
import { useParams } from 'react-router-dom';
import UseInventories from '../../Hooks/UseInventories';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory] = UseInventories(inventoryId)
    return (
        <div>
            <h2>Detail for: {inventory.name}</h2>
        </div>
    );
};

export default InventoryDetail;