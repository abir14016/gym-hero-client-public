import { Route, Routes } from 'react-router-dom';
import AddInventory from './Pages/AddInventory/AddInventory';
import Home from './Pages/Home/Home/Home';
import InventoryDetail from './Pages/InventoryDetail/InventoryDetail';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
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
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
