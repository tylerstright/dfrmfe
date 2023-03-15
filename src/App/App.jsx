import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// import axios from 'axios';


import Layout from './Layout';
import Home from '../Page/Home';
import LoginForm from '../Forms/LoginForm';
import SignUpForm from '../Forms/SignUpForm';
import ConfirmEmail from '../Page/ConfirmEmail';
import SignOut from '../Page/SignOut';
import ErrorPage from './ErrorPage';

import Documents from '../Page/Documents';
import News from '../Page/News';
import Status from '../Page/Status';

import ListPage from '../Page/ListPage';
import EditPage from '../Page/EditPage';
import AddPage from '../Page/AddPage';

import IncludeMap from '../Page/IncludeMap';

import Projects from '../About/Projects';
import Facilities from '../About/Facilities';
import Divisions from '../About/Divisions';

import ProjectDetail from '../Detail/ProjectDetail';
import SubProjectDetail from '../Detail/SubProjectDetail';
import TaskDetail from '../Detail/TaskDetail';
import FacilityDetail from '../Detail/FacilityDetail';
import DivisionDetail from '../Detail/DivisionDetail';

import UserProfile from '../User/UserProfile';

export default function App() {
  const [userId, setUserId] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(null);

  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout fullName={fullName} isAdmin={isAdmin} />} >
        <Route index element={<Home />} />
        <Route path="/accounts/login/"
          element={<LoginForm
            setUserId={setUserId}
            setToken={setToken}
            setFullName={setFullName}
            setIsAdmin={setIsAdmin} />} />
        <Route path="/accounts/signup/" element={<SignUpForm setUser={setUserId} />} />
        <Route path='/accounts/confirm-email/' element={<ConfirmEmail />} />

        <Route path='/accounts/signout/'
          element={<SignOut
            setUserId={setUserId}
            setToken={setToken}
            setFullName={setFullName}
            setIsAdmin={setIsAdmin} />} />

        <Route
          path="/profile/"
          element={<UserProfile userId={userId} />}
          loader={async () => { return fetch(`/api/accounts/${userId}/`); }}
          errorElement={<ErrorPage />}
        />

        <Route
          path='/status/'
          element={<Status />}
          loader={async () => { return fetch('https://www.cbr.washington.edu/dart/cs/php/rpt/adult_annual.php?sc=1&outputFormat=csv&proj=LWG&startdate=1%2F1&enddate=12%2F31&run='); }}
          errorElement={<ErrorPage />}
        />
        <Route
          path='/news/'
          element={<News />}
          // loader={async () => { return fetch('/api/document/'); }}
          errorElement={<ErrorPage />}
        />
        <Route
          path='/docs/'
          element={<Documents />}
          // loader={async () => { return fetch('/api/document/'); }}
          errorElement={<ErrorPage />}
        />

        <Route
          path="/project/"
          element={<Projects />}
          loader={async () => { return fetch('/api/project/'); }}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/project/:id/"
          element={<ProjectDetail />}
          loader={async ({ params }) => { return fetch(`/api/project/${params.id}/`); }}
          errorElement={<ErrorPage />}
        >
          <Route
            path="/project/:id/"
            element={<SubProjectDetail />}
            loader={async ({ params }) => {
              return fetch(`/api/subproject/`)
                .then(response => response.json())
                .then(data => data.filter(sub => sub.project.id === params.id)) // data type don't need to match\ (string vs. number "2"==2)
            }
            }
            errorElement={<ErrorPage />}
          > <Route
              path="/project/:id/"
              element={<TaskDetail />}
              loader={async ({ params }) => {
                return fetch(`/api/task/`)
                  .then(response => response.json())
                  .then(data => data.filter(task => task.subproject.project.id === params.id)) // data type don't need to match\ (string vs. number "2"==2)
              }
              }
              errorElement={<ErrorPage />}
            />
          </Route>
        </Route>



        <Route
          path="/facility/"
          element={<Facilities />}
          loader={async () => { return fetch('/api/facility/'); }}
          errorElement={<ErrorPage />}
        >
          <Route
            path="/facility/"
            element={<IncludeMap />}
            loader={async () => {
              return fetch('/api/facility/points/')
                .then(response => response.json())
                .then(data => data.features);
            }}
            errorElement={<ErrorPage />}
          />
        </Route>
        <Route
          path="/facility/:id/"
          element={<FacilityDetail />}
          loader={async ({ params }) => { return fetch(`/api/facility/${params.id}/`); }}
          errorElement={<ErrorPage />}
        />

        <Route
          path="/division/"
          element={<Divisions />}
          loader={async () => { return fetch('/api/division/'); }}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/division/:id/"
          element={<DivisionDetail />}
          loader={async ({ params }) => { return fetch(`/api/division/${params.id}/`); }}
          errorElement={<ErrorPage />}
        />



        <Route
          path="/employee/list/"
          element={<ListPage
            target='employee'
            keys={['first name', 'title', 'work phone', 'mobile phone', 'active', 'view', 'edit']} />}
          loader={async () => { return fetch(`/api/employee/`); }}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/project/list/"
          element={
            <ListPage
              target='project'
              keys={['name', 'created', 'active', 'view', 'edit']} />
          }
          loader={async () => { return fetch(`/api/project/`); }}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/division/list/"
          element={<ListPage
            target='division'
            keys={['name', 'director', 'deputy director', 'administrative assistant', 'facility', 'view', 'edit']} />}
          loader={async () => { return fetch(`/api/division/`); }}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/department/list/"
          element={<ListPage
            target='department'
            keys={['name', 'manager', 'deputy manager', 'administrative assistant', 'facility', 'view', 'edit']} />}
          loader={async () => { return fetch(`/api/department/`); }}
          errorElement={<ErrorPage />} />


        <Route path="/employee/new/" element={<AddPage token={token} />} />
        <Route path="/department/new/" element={<AddPage token={token} />} />
        <Route path="/division/new/" element={<AddPage token={token} />} />
        <Route path="/project/new/" element={<AddPage token={token} />} />

        <Route path="/project/:id/edit/" element={<EditPage token={token}/>} />



        <Route path="/facility" element={<Facilities />} />
      </Route>
    )
  )


  // the common elements throughout the website are the NavBar and the background image.
  return (
    <RouterProvider router={router} errorElement={<ErrorPage />} />
  );
}
