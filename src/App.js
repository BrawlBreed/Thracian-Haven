import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Login from './forms/Login';
import Signup from './forms/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from './store/auth/authAPI';
import axios from 'axios';
import ForgotPassword from './forms/ForgotPassword';

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(authUser())
    
    return () => axios.post('http://localhost:8000/api/refresh', {}, {
      withCredentials: true
    })
  }, [])

  useEffect(() => {
    console.log(user)
  }, [user])
  return (
      <div className='mx-auto bg-white'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/property/:id' element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </div>    
  );
};

export default App;
