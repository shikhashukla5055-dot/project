
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter,Route,Routes }from "react-router-dom";
import Navbar from '../component/Navbar.jsx';
import Login from '../component/login.jsx';
import Register from '../component/Register.jsx';
import View from '../component/view.jsx';


function App() {
  return(
  <>
  <BrowserRouter>
  <Navbar/> 
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/view' element={<View/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
 
       
}

export default App
