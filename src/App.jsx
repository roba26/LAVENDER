import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import LandingPage from './pages/Landingpage';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';
import VerifyCode from './components/Auth/VerifyCode';
import SetPassword from './components/Auth/SetPassword';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app">
          <Routes>
            {/* الصفحات اللي فيها Header + Footer */}
            <Route element={<Layout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
            </Route>

            {/* صفحات الـ Auth بدون Header/Footer */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-code" element={<VerifyCode />} />
            <Route path="/set-password" element={<SetPassword />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}