import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import axios from 'axios';


import Layout from './Layout';
import Home from '../Home/Home';
// import Footer from './Footer';
import LoginForm from '../Forms/LoginForm';
import SignUpForm from '../Forms/SignUpForm';
// import NavBar from './NavBar';

import ListPage from '../ListPage/ListPage';
import EditPage from '../AddEditPage/EditPage';
import AddPage from '../AddEditPage/AddPage';


import Projects from '../Projects/Projects';
import ProjectView from '../Projects/ProjectView';

import Facilities from '../Facilities/Facilities';
import UserProfile from '../User/UserProfile';


export default function App() {
  const [user, setUser] = useState(null);

  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/accounts/login/" element={<LoginForm user={user} setUser={setUser} />} />
        <Route path="/accounts/signup/" element={<SignUpForm user={user} setUser={setUser} />} />
  
        <Route path="/project/" element={<Projects />} />
  
        {/* https://reactrouter.com/en/main/route/route */}
        <Route
          element={<ProjectView />}
          path="/project/:id/"
          loader={async ({ params }) => {
            console.log('ProjectView Route.loader fired!');
            return fetch(`/api/project/${params.id}.json`);
            // axios.get(api) // USE THE PROXY!
            //   .then(response => {
            //     console.log('/api/project/:id/ response:');
            //     console.log(response);
            //     setProject(response.data);
            //   })
            //   .catch(error => {
            //     console.log(error);
            //   });
          }}
        // action
        // errorElement
        />
  
        <Route path="/employee/list" element={<ListPage />} />
        <Route path="/project/list/" element={<ListPage />} />
        <Route path="/division/list" element={<ListPage />} />
        <Route path="/department/list" element={<ListPage />} />
  
        {/* <Route path={['/employee/list/', '/project/list/','/division/list/','/department/list/']} element={<ListPage />} /> */}
  
        <Route path="/employee/new/" element={<AddPage />} />
        <Route path="/department/new/" element={<AddPage />} />
        <Route path="/division/new/" element={<AddPage />} />
        <Route path="/project/new/" element={<AddPage />} />
  
        <Route path="/project/:id/edit/" element={<EditPage />} />
  
  
  
        <Route path="/facility" element={<Facilities />} />
        <Route path="/profile/" element={<UserProfile />} />
      </Route>
    )
  )


  // the common elements throughout the website are the NavBar and the background image.
  return ( <RouterProvider router={router} />
    // <BrowserRouter>
    //   <NavBar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />

    //     <Route path="/accounts/login/" element={<LoginForm user={user} setUser={setUser} />} />
    //     <Route path="/accounts/signup/" element={<SignUpForm user={user} setUser={setUser} />} />

    //     <Route path="/project/" element={<Projects />} />

    //     {/* https://reactrouter.com/en/main/route/route */}
    //     <Route
    //       element={<ProjectView />}
    //       path="/project/:id/"
    //       loader={async ({ params }) => {
    //         console.log('ProjectView Route.loader fired!');
    //         return fetch(`/api/project/${params.id}.json`);
    //         // axios.get(api) // USE THE PROXY!
    //         //   .then(response => {
    //         //     console.log('/api/project/:id/ response:');
    //         //     console.log(response);
    //         //     setProject(response.data);
    //         //   })
    //         //   .catch(error => {
    //         //     console.log(error);
    //         //   });
    //       }}
    //     // action
    //     // errorElement
    //     />

    //     <Route path="/employee/list" element={<ListPage />} />
    //     <Route path="/project/list/" element={<ListPage />} />
    //     <Route path="/division/list" element={<ListPage />} />
    //     <Route path="/department/list" element={<ListPage />} />

    //     {/* <Route path={['/employee/list/', '/project/list/','/division/list/','/department/list/']} element={<ListPage />} /> */}

    //     <Route path="/employee/new/" element={<AddPage />} />
    //     <Route path="/department/new/" element={<AddPage />} />
    //     <Route path="/division/new/" element={<AddPage />} />
    //     <Route path="/project/new/" element={<AddPage />} />

    //     <Route path="/project/:id/edit/" element={<EditPage />} />



    //     <Route path="/facility" element={<Facilities />} />
    //     <Route path="/profile/" element={<UserProfile />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
  );
}
