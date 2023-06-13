import logo from './logo.svg';
import './App.css';
import Addfertilizer from './pages/addfertilizer';
import {Route,Routes} from 'react-router-dom';
import Signup from './pages/signup';
import Home from './pages/home';
import Login from './pages/login';
import Update from './pages/update';
import Delete from './pages/delete';
import Order from './pages/order';
import AdminLogin from './pages/adminlogin';
import AdminSignup from './pages/adminsignup';
import Ferthome from './pages/ferthome';
import Card from './pages/card';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/addfertilizer" element={<Addfertilizer/>}></Route>
      
      <Route path="/update/:id" element={<Update/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/delete" element={<Delete/>}></Route>
      <Route path="/order" element={<Order/>}></Route>
      <Route path="/adminsignup" element={<AdminSignup/>}></Route>
      <Route path="/adminlogin" element={<AdminLogin/>}></Route>
      <Route path="/ferthome" element={<Ferthome/>}></Route>
      <Route path="/card" element={<Card/>}></Route>
      <Route path="/" element={<Login/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
