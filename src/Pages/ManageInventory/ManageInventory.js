import React from 'react';
import './ManageInventory.css'

const ManageInventory = ({ manageInventory }) => {
    const { index, picture, name, price, supplier } = manageInventory;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className='text-center manage-inventory'>
                    <img className='border' style={{ width: 50 }} src={picture} alt="" />
                </div>
            </td>
            <td>{name}</td>
            <td>{supplier}</td>
            <td>
                <button className='btn btn-danger'>X</button>
            </td>
        </tr>

    );
};

export default ManageInventory;