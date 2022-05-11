import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageInventory from '../ManageInventory/ManageInventory';
import './ManageInventories.css'

const ManageInventories = () => {
    const [manageInventories, setmanageInventories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/manageinventory")
            .then(res => res.json())
            .then(data => setmanageInventories(data))
    }, []);

    return (
        <div className='manage-inventories'>
            <h4 className='text-center'>Manage All Inventories:</h4>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr className='text-warning'>
                        <th>#</th>
                        <th>Picture</th>
                        <th>Inventory</th>
                        <th>Supplier</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageInventories.map(manageInventory => <ManageInventory
                            key={manageInventory._id}
                            manageInventory={manageInventory}
                        ></ManageInventory>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageInventories;