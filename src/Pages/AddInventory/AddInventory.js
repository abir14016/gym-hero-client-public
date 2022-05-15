import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import PageTitle from '../Shared/PageTitle/PageTitle';
import axios from 'axios'
import './AddInventory.css';
import addInventoryLogo from '../../images/utilities/add-inventory-logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const AddInventory = () => {
    const [user] = useAuthState(auth);

    const handleAddInventory = event => {
        event.preventDefault();
        const name = event.target.inventory.value;
        const deccription = event.target.deccription.value;
        const supplier = event.target.supplier.value;
        const quantity = event.target.inventory.value;
        const price = event.target.price.value;
        const picture = event.target.imgurl.value;
        const email = event.target.email.value;

        const data = { name, email, picture, deccription, quantity, price, supplier };
        const url = `http://localhost:5000/manageinventory`;

        axios.post('http://localhost:5000/myInventories', data)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    //comment
                }
            })

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success("Successfully Added");
                event.target.reset();
            });
    };

    return (
        <div className='pt-5'>
            <PageTitle title="Add Inventory"></PageTitle>
            <h2 className='text-primary text-center'>Welcome To Add Inventory Page</h2>
            <Form onSubmit={handleAddInventory} className='form-container bg-dark text-white p-4 my-4 rounded'>
                <div className='text-center'>
                    <img style={{ width: 80 }} src={addInventoryLogo} alt="" />
                    <h4 className='text-center'>Add Inventory</h4>
                </div>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Inventory Name</Form.Label>
                    <Form.Control type="text" name='inventory' placeholder="Enter Inventory Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" as="textarea" name='deccription' placeholder="Description" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSupplier">
                    <Form.Label>Supplier</Form.Label>
                    <Form.Control type="text" name='supplier' placeholder="Enter Supplier Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text" name='quantity' placeholder="Quantity" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImgURL">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name='imgurl' defaultValue="https://i.ibb.co/McHVQNG/power-builder-1.jpg" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" name='price' placeholder="Enter Price" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' defaultValue={user?.email} readOnly />
                </Form.Group>
                <div className='text-center'>
                    <Button variant="success" type="submit">
                        Add Inventory
                    </Button>
                </div>
            </Form>
            <div className='container'>
                <h5 className='text-end text-secondary'>Want to see your added items?<Link className='btn btn-primary' to="/myinventories">Click Here</Link></h5>
            </div>
        </div>
    );
};

export default AddInventory;