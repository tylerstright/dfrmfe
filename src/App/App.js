import react from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import './App.css';

export default function App() {

  // the common elements throughout the website are the NavBar and the background image.
  return (
    <BrowserRouter>
    <h1>App.js</h1>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

// createBrowserRouter

    // <Router>
    //   <h1>Nez Perce Tribe Department of Fisheries Resources Management Data Access</h1>
    //   { loginStatus === 200 ? null :<button onClick={loginModal}>CDMS Login</button> }
    //   {loginStatus === 200 ?
    //     <nav>
    //       <Link to='/'>Dashboard</Link>
    //       <Link to='/projects'>Projects</Link>
    //       <Link to='/projects2'>Proj2</Link>
    //       <Link to='/datasets'>Datasets</Link>
    //       <Link to='/grid'>THE GRID</Link>
    //       <Link to='/handson'>HANDSON</Link>
    //       <p>Welcome to NPTDMS, {userInfo.fullName}!</p>
    //     </nav>
    //     : null}
    //   <Routes>
    //     <Route index element={<Dashboard loginStatus={loginStatus} />} />
    //     <Route path='login' element={<Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} handleLogin={handleLogin} modalDisplay={modalDisplay} setModalDisplay={setModalDisplay} />} />
    //     <Route path='projects' element={<Projects loginStatus={loginStatus} />} />
    //     <Route path='projects2' element={<Projects2 loginStatus={loginStatus} />} />
    //     <Route path='project/:id' element={<Project loginStatus={loginStatus} />} />
    //     <Route path='datasets' element={<Datasets loginStatus={loginStatus} userInfo={userInfo} />} />
    //     <Route path='grid' element={<AgGrid loginStatus={loginStatus} userInfo={userInfo} />} />
    //     <Route path='handson' element={<Handson loginStatus={loginStatus} userInfo={userInfo} />} />
    //     <Route path='activity/:id' element={<Activity loginStatus={loginStatus} />} />
    //     <Route path='*' element={<ErrorPage />} />
    //   </Routes>
    // </Router >