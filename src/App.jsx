import { useState } from 'react'
import Nav from './components/headers/Nav'
import HeroMainPage from './components/hero/HeroMainPage'
import InfiniteScrollBoxes from './components/hero/InfinteScrollBoxes'
import Table from './components/between/Table'


import {Link, Routes, Route} from "react-router-dom";
import Footer from './components/footers/Footer'
import Login from './components/login/Login'
import Signup from './components/login/Signup'
import Dashboard from './components/dashboard/Dashboard'
import Profile from './components/dashboard/profile/Profile'

function App() {


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
    <InfiniteScrollBoxes></InfiniteScrollBoxes>
    </div>
    </>
  }></Route>
      {/* HOME END */}

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
    <div className="mainWrapper max-w-[2500px] px-[5px] lg:px-[90px] mx-auto">
 <Dashboard></Dashboard>
  </div>
  }></Route>
{/* dashboard end  */}

{/* PROFILE  */}
  <Route path='/profile-manager' element={
    <div className="mainWrapper min-h-screen max-w-[2500px] mt-[100px] px-[5px] lg:px-[90px] mx-auto">
<Profile></Profile>
  </div>
  }></Route>

{/* PROFILE END */}
</Routes>




<Footer></Footer>


    </>
  )
}

export default App
