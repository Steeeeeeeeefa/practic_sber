import "./styles/main.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Login from './pages/login';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
                    <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
