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

//Pages
import LandingPage from "./Pages/LandingPage/LandingPage";
// ----- // Article Page
import Article1 from "./Pages/LandingPage/Articles/Article1";
import Article2 from "./Pages/LandingPage/Articles/Article2";
import Article3 from "./Pages/LandingPage/Articles/Article3";
//----// Hospital Page
import Hospital1 from "./Pages/LandingPage/Hospitals/Hospital1";
import Hospital2 from "./Pages/LandingPage/Hospitals/Hospital2";
import Hospital3 from "./Pages/LandingPage/Hospitals/Hospital3";
//---// Doctor Page
import Doctor1 from "./Pages/LandingPage/Doctors/Doctor1";
import Doctor2 from "./Pages/LandingPage/Doctors/Doctor2";
import Doctor3 from "./Pages/LandingPage/Doctors/Doctor3";
import Doctor4 from "./Pages/LandingPage/Doctors/Doctor4";
import Doctor5 from "./Pages/LandingPage/Doctors/Doctor5";
import Doctor6 from "./Pages/LandingPage/Doctors/Doctor6";

import Product from "./Pages/Product/Product";
import ProductDetail from "./Pages/Product/ProductDetail";

//Components
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer.jsx';

//Redux
import { fetchActiveAddress, fetchAddress, keepLogin, profileDetail, fetchUserPrescriptionOrder, userPaymentDetail } from './Redux/Actions/userActions';


function App() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLogin;
  const navbar = useSelector((state) => state.userKeepLoginReducer);
  const { userLoginInfo } = navbar;
  const { userPaymentID } = useSelector((state) => state.paymentIDReducer);

  const token = localStorage.getItem('userInfoToken');
  const userInfoLocalStorage =
    localStorage.getItem('userInfoToken') ?
      JSON.parse(localStorage.getItem('userInfoToken'))
      :
      null;
  useEffect(() => {
    if (token) {
      dispatch(profileDetail());
      dispatch(fetchAddress());
      dispatch(fetchActiveAddress());
      dispatch(fetchUserPrescriptionOrder());
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
          <Route path='/' element={<LandingPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login/forgot-password' element={<ForgotPassword />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/afterRegister' element={<AfterRegister />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/verif/:token' element={<VerificationPage />} />
          <Route path='/resetPassword/:token' element={<ResetPassword />} />
          <Route path='/payments/' element={<PaymentPage />} />
          <Route path="/articles/article1" element={<Article1 />} />
          <Route path="/articles/article2" element={<Article2 />} />
          <Route path="/articles/article3" element={<Article3 />} />
          <Route path="/hospitals/hospital1" element={<Hospital1 />} />
          <Route path="/hospitals/hospital2" element={<Hospital2 />} />
          <Route path="/hospitals/hospital3" element={<Hospital3 />} />
          <Route path="/doctors/doctor1" element={<Doctor1 />} />
          <Route path="/doctors/doctor2" element={<Doctor2 />} />
          <Route path="/doctors/doctor3" element={<Doctor3 />} />
          <Route path="/doctors/doctor4" element={<Doctor4 />} />
          <Route path="/doctors/doctor5" element={<Doctor5 />} />
          <Route path="/doctors/doctor6" element={<Doctor6 />} />
          <Route path="/products" element={<Product />} />
          <Route
            path="/products/product-detail/:SKU"
            element={<ProductDetail />}
          />
          {/* <Route path="/cart" element={<CartComp />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
