import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Footer from './Footer';
import SignIn from '../SignIn/SignIn';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
import Divisions from '../Divisions/Divisions';
import Facilities from '../Facilities/Facilities';
import News from '../News/News';
import Documents from '../Documents/Documents';
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);

  // the common elements throughout the website are the NavBar and the background image.
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn user={user} setUser={setUser} />} />
        <Route path="/divisions" element={<Divisions />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/news" element={<News />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
