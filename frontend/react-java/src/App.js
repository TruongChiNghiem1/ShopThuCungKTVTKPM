import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PaymentPage from './components/PaymentPage';
import QrPaymentPage from './components/QrPaymentPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/qr-payment" element={<QrPaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
