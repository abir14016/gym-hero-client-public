import React from 'react';
import './ManageInventory.css'

const ManageInventory = ({ manageInventory, manageInventories, setmanageInventories }) => {
    const { index, picture, name, _id, supplier } = manageInventory;

    const handleDeleteInventory = id => {
        const proced = window.confirm("Are you sure?");
        if (proced) {
            const url = `http://localhost:5000/manageinventory/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = manageInventories.filter(manageInventory => manageInventory._id !== id);
                    setmanageInventories(remaining);
                })
        }
    }

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
                <button onClick={() => handleDeleteInventory(_id)} className='btn btn-danger'>X</button>
            </td>
        </tr>

    );
};

export default ManageInventory;