import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LogIn from './Components/LogIn/LogIn';
import Home from './Components/HomeSection/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import SingleInventoryProduct from './Components/SingleInventoryProduct/SingleInventoryProduct';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import AddItems from './Components/ManageInventory/Additems/AddItems';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import NotFound from './Components/NotFound/NotFound';
import Blog from './Components/Blog/Blog';
import ContactUs from './ContactUs/ContactUs';




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/inventory/:id' element={
        <RequireAuth>
          <SingleInventoryProduct/>
        </RequireAuth>
           }></Route>
        <Route path='/add-items' element={
        <RequireAuth>
          <AddItems/>
        </RequireAuth>
           }></Route>
        <Route path='/manage-inventory' element={
          <RequireAuth>
          <ManageInventory/>
        </RequireAuth>
        
        
        }></Route>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/add-item' element={<AddItems/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
