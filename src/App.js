import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Menu from './pages/Menu.js';
import Contact from './pages/Contact.js';
import Register from './pages/Register.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = sessionStorage.getItem('isLoggedIn');
    return saved === 'true';
  });

  useEffect(() => {
    sessionStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Register setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/home" element={isLoggedIn ? <><Navbar /><Home /></> : <Navigate to="/" />} />
          <Route path="/about" element={isLoggedIn ? <><Navbar /><About /></> : <Navigate to="/" />} />
          <Route path="/menu" element={isLoggedIn ? <><Navbar /><Menu /></> : <Navigate to="/" />} />
          <Route path="/contact" element={isLoggedIn ? <><Navbar /><Contact /></> : <Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;