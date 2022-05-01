import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import InventoryItems from './components/InventoryItems/InventoryItems';
import ItemDetail from './components/InventoryItems/ItemDetail';
import Login from './components/LoginRegistration/Login';
import Register from './components/LoginRegistration/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/items' element={<InventoryItems></InventoryItems>}></Route>
        <Route path='/items/:itemsId' element={<ItemDetail></ItemDetail>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
