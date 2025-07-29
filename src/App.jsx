import { useEffect, useState } from 'react'
import Nav from './components/headers/Nav'
import HeroMainPage from './components/hero/HeroMainPage'
import InfiniteScrollBoxes from './components/hero/InfinteScrollBoxes'
import Table from './components/between/Table'


import {Link, Routes, Route, useNavigate, useLocation} from "react-router-dom";
import Footer from './components/footers/Footer'
import Login from './components/login/Login'
import Signup from './components/login/Signup'
import Dashboard from './components/dashboard/Dashboard'
import Profile from './components/dashboard/profileManager/profile/Profile'
import PasswordManager from './components/dashboard/passwordManager/passwordManager'
import TenderManager from './components/dashboard/tenderManager/TenderManager'
import Testtt from './components/TESTT/Testtt'
import PrivateRoute from './Redux/auth/PrivateRoute'
import { useSelector } from 'react-redux'
import About from './components/about/ABout'

function App() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const location = useLocation(); // Get current URL path

  // Redirect immediately if authenticated and at "/"
  useEffect(() => {
    if (auth.isAuthenticated && location.pathname === '/') {
      navigate('/dashboard', { replace: true }); // `replace` prevents back navigation to "/"
    }
  }, [auth.isAuthenticated, location.pathname, navigate]);

  // Prevent flashing "/" component
  if (auth.isAuthenticated && location.pathname === '/') {
    return null; // don't render anything while redirecting
  }




  {/* <Route path='/service' element={<Service></Service>}></Route>*/}
  return (

    <>
    <Nav></Nav>
    <Routes>
      {/* HOME  */}
  <Route path='/' element={
    <>
    <div>
      <HeroMainPage>
        <Login></Login>
      </HeroMainPage>
    </div>
      <div className="mainWrapper max-w-[2500px] px-[5px] lg:px-[90px] mx-auto">
      <Table></Table>
    {/* <InfiniteScrollBoxes></InfiniteScrollBoxes> */}
    </div>
    </>
  }></Route>
      {/* HOME END */}
      {/* ABout  */}
  <Route path='/about' element={
<><About></About></>
  }></Route>
      {/* ABout END */}

{/* Signup  */}
  <Route path='/signup' element={
    <>
    <div>
      <HeroMainPage>
    <Signup></Signup>
      </HeroMainPage>
    </div>
      <div className="mainWrapper max-w-[2500px] px-[5px] lg:px-[90px] mx-auto">
      <Table></Table>
    <InfiniteScrollBoxes></InfiniteScrollBoxes>
    </div>
    </>
  }></Route> 
  {/* signup end  */}
{/* dashboiiard */}
  <Route path='/dashboard' element={
     <PrivateRoute>
    <div className="mainWrapper max-w-[2500px] px-[5px] lg:px-[90px] mx-auto">
 <Dashboard></Dashboard>
  </div>
  </PrivateRoute>
  }></Route>
{/* dashboard end  */}

{/* PROFILE  */}
  <Route path='/profile-manager' element={
        <PrivateRoute>
    <div className="mainWrapper min-h-screen max-w-[2500px] mt-[100px] px-[5px] lg:px-[90px] mx-auto">
<Profile></Profile>
  </div>
  </PrivateRoute>
  }></Route>
  {/* Password manager  */}
  <Route path='/password-manager' element={
     <PrivateRoute>
    <div className="mainWrapper min-h-screen max-w-[2500px] mt-[100px] px-[5px] lg:px-[90px] mx-auto">
<PasswordManager></PasswordManager>
  </div>
   </PrivateRoute>
  }></Route>
  {/* Password manager end */}
  <Route path='/tender-manager' element={
      <PrivateRoute>
    <div className="mainWrapper min-h-screen max-w-[2500px] mt-[100px] px-[5px] lg:px-[90px] mx-auto">
<TenderManager></TenderManager>
  </div>
  </PrivateRoute>
  }></Route>
  {/* TEST  */}
  <Route path='/testt' element={
    <div className="mainWrapper min-h-screen max-w-[2500px] mt-[100px] px-[5px] lg:px-[90px] mx-auto">
<Testtt></Testtt>
  </div>
  }></Route>

{/* PROFILE END */}
</Routes>




<Footer></Footer>


    </>
  )
}

export default App
