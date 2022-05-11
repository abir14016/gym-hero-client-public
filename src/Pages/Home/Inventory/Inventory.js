import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {

    const { _id, name, picture, deccription, price, quantity, supplier } = inventory;
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className="card card-container text-center bg-dark">
            <div className='p-3'>
                <img className="card-img-top" src={picture} alt="Card cap" />
                <div className='mt-4 py-2 inventory-info text-warning d-flex justify-content-around align-items-center'>
                    <h6>Quantity: {quantity}</h6>
                    <h6>Supplier: {supplier}</h6>
                </div>
                {/* <hr /> */}
            </div>
            <div className="card-body">
                <h3 className="card-title text-white">{name}</h3>
                <p className="card-text card-description">{deccription}<button>see more</button></p>
                <h6 className='text-warning fs-4'>$ {price}</h6>
            </div>
            <div className='text-center'>
                <button onClick={() => navigateToInventoryDetail(_id)} className='stock-update-button'>STOCK UPDATE</button>
            </div>
        </div>
    );
};

export default Inventory;