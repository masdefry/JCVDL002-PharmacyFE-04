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
import Admin from './Pages/Admin/Admin';
import Notification from './Pages/Notification/Notification';
import VerificationPage from './Pages/Verification/Verification';
import ResetPassword from './Pages/ForgotPassword/ResetPassword';
import PaymentPage from './Pages/Payment/Payment';

//Components
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer.jsx';

//Redux
import { fetchActiveAddress, fetchAddress, keepLogin, profileDetail } from './Redux/Actions/userActions';


function App() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLogin;
  const navbar = useSelector((state) => state.userKeepLoginReducer);
  const { userLoginInfo } = navbar;

  const token = localStorage.getItem('userInfoToken');
  useEffect(() => {
    if (token) {
      dispatch(profileDetail());
      dispatch(fetchAddress());
      dispatch(fetchActiveAddress());
    }
    const userData = JSON.parse(token);
    console.log("appJs" + userData);
    console.log("appJs" + userInfo);
    console.log("appJs" + userLoginInfo);
  }, []);

  // console.log(window.location.pathname);

  return (
    <div className="App">
      <Helmet>
        <meta charSet='utf-8' />
        <title>SehatY</title>
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
          <Route path='/admin' element={<Admin />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/verif/:token' element={<VerificationPage />} />
          <Route path='/resetPassword/:token' element={<ResetPassword />} />
          <Route path='/payments' element={<PaymentPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
