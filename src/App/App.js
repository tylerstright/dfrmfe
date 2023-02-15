import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Footer from './Footer';
import SignInForm from '../Forms/SignInForm';
import NavBar from './NavBar';

import StatusPage from '../StatusPage/StatusPage';
import ListPage from '../ListPage/ListPage';
import EditPage from '../AddEditPage/EditPage';
import AddPage from '../AddEditPage/AddPage';


import Projects from '../Projects/Projects';
import ProjectView from '../Projects/ProjectView';

import Departments from '../Departments/Departments';
import Facilities from '../Facilities/Facilities';
import News from '../News/News';
import Documents from '../Documents/Documents';
import UserProfile from '../User/UserProfile';

export default function App() {
  const [user, setUser] = useState(null);

  // the common elements throughout the website are the NavBar and the background image.
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/status/' element={<StatusPage />} />
        <Route path="/login/" element={<SignInForm user={user} setUser={setUser} />} />
        {/* <Route path="/division/" element={<Departments />} /> */}

        <Route path="/project/" element={<Projects />} />
        <Route path="/project/:id/" element={<ProjectView />} />
        
        <Route path="/employee/list" element={<ListPage />} />
        <Route path="/project/list/" element={<ListPage />} />
        <Route path="/division/list" element={<ListPage />} />
        <Route path="/department/list" element={<ListPage />} />

        <Route path="/employee/new/" element={<AddPage />} />
        <Route path="/department/new/" element={<AddPage />} />
        <Route path="/division/new/" element={<AddPage />} />
        <Route path="/project/new/" element={<AddPage />} />

        <Route path="/project/:id/edit/" element={<EditPage />} />
        


        <Route path="/facility" element={<Facilities />} />
        <Route path="/news" element={<News />} />
        <Route path="/docs/" element={<Documents />} />
        <Route path="/profile/" element={<UserProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
