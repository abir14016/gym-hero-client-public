import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ManageInventory.css'

const ManageInventory = ({ manageInventory, manageInventories, setmanageInventories }) => {
    const { price, picture, name, _id, supplier } = manageInventory;
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }

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
                    toast("Deleted");
                })
        }
    }

    return (
        <tr>
            <td>
                <div className='manage-inventory'>
                    <img className='border manage-inventory-image' style={{ cursor: "pointer", width: 50 }} onClick={() => navigateToInventoryDetail(_id)} src={picture} alt="" />
                </div>
            </td>
            <td>{name}</td>
            <td>{supplier}</td>
            <td>{price}</td>
            <td>
                <button onClick={() => handleDeleteInventory(_id)} className='btn btn-danger'>X</button>
            </td>
        </tr>
    );
};

export default ManageInventory;