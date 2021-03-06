import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AddNewItem from './components/InventoryItems/AddItem/AddNewItem';
import InventoryItems from './components/InventoryItems/InventoryItems';
import ItemDetail from './components/InventoryItems/ItemDetail';
import MyItems from './components/MyItems/MyItems';
import Login from './components/LoginRegistration/Login';
import Register from './components/LoginRegistration/Register';
import RequireAuth from './components/LoginRegistration/RequireAuth';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/items' element={
          <RequireAuth>
            <InventoryItems></InventoryItems>
          </RequireAuth>
        }></Route>
        <Route path='/items/:itemsId' element={
          <RequireAuth>
            <ItemDetail></ItemDetail>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddNewItem></AddNewItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
