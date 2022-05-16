
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import User from './components/User/User';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SubmitOrder from './components/SubmitOrder/SubmitOrder';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/Checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/user' element={<User></User>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/ordersubmitted' element={<SubmitOrder></SubmitOrder>}></Route>
      </Routes>
    </div >
  );
}

export default App;
