import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            <h4 className='text-center'>Manage All Inventories: {manageInventories.length}</h4>
            <Table className='text-center' striped bordered hover variant="dark">
                <thead>
                    <tr className='text-warning'>
                        <th>Picture</th>
                        <th>Inventory</th>
                        <th>Supplier</th>
                        <th>Price($)</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageInventories.map(manageInventory => <ManageInventory
                            key={manageInventory._id}
                            manageInventory={manageInventory}
                            setmanageInventories={setmanageInventories}
                            manageInventories={manageInventories}
                        ></ManageInventory>)
                    }
                </tbody>
            </Table>
            <div className='container text-center mt-5'>
                <Link className='btn btn-dark' to="/addinventory">Add Inventory</Link>
            </div>
        </div>
    );
};

export default ManageInventories;