import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

//Pages
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/SingIn/SignIn';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Profile from './Pages/Profile/Profile';
import AfterRegister from './Pages/Register/AfterRegister';

//Components
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer.jsx';

//Redux
import { keepLogin } from './Redux/Actions/userActions';


function App() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLoginReducer);
  const { userInfo, checkstorage } = userLogin;

  const token = localStorage.getItem('userInfoToken');
  useEffect(() => {
    const userData = JSON.parse(token);
    console.log(userData);
    dispatch(keepLogin(userData));
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charSet='utf-8' />
        <title>Sehat Y</title>
      </Helmet>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login/forgot-password' element={<ForgotPassword />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/afterRegister' element={<AfterRegister />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
