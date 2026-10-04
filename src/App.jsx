import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/Landingpage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import './App.css';
import ForgotPassword from './components/Auth/ForgotPassword';
import VerifyCode from './components/Auth/VerifyCode';
import SetPassword from './components/Auth/SetPassword';


/** Home = Navbar + landing page content + Footer, grouped together. */
function HomeLayout() {
  return (
    <>
      <Header activeLink="Home" cartCount={2} />
      <LandingPage />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/set-password" element={<SetPassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}