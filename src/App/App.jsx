import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// import axios from 'axios';


import Layout from './Layout';
import Home from '../Home/Home';
import LoginForm from '../Forms/LoginForm';
import SignUpForm from '../Forms/SignUpForm';
import ErrorPage from './ErrorPage';

import ListPage from '../ListPage/ListPage';
import EditPage from '../AddEditPage/EditPage';
import AddPage from '../AddEditPage/AddPage';

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
  const [user, setUser] = useState(null);

  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/accounts/login/" element={<LoginForm user={user} setUser={setUser} />} />
        <Route path="/accounts/signup/" element={<SignUpForm user={user} setUser={setUser} />} />

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
                .then(data => data.filter(sub => sub.project.id == params.id)) // data type don't need to match\ (string vs. number "2"==2)
            }
            }
            errorElement={<ErrorPage />}
          > <Route
              path="/project/:id/"
              element={<TaskDetail />}
              loader={async ({ params }) => {
                return fetch(`/api/task/`)
                  .then(response => response.json())
                  .then(data => data.filter(task => task.subproject.project.id == params.id)) // data type don't need to match\ (string vs. number "2"==2)
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
            loader={async () => { return fetch('/api/facility/points/'); }}
            err
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
  return (
    <RouterProvider router={router} errorElement={<ErrorPage />} />
  );
}
