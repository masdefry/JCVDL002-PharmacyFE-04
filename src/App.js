import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Pages
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/SingIn/SignIn';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';

//Components
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
