import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddInventory from './Pages/AddInventory/AddInventory';
import Home from './Pages/Home/Home/Home';
import InventoryDetail from './Pages/InventoryDetail/InventoryDetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import MyInventories from './Pages/MyInventories/MyInventories';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='inventory/:inventoryId' element={<InventoryDetail></InventoryDetail>}></Route>
        <Route path='/manageinventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/addinventory' element={<AddInventory></AddInventory>}></Route>
        <Route path='myinventories' element={<MyInventories></MyInventories>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
