import React from 'react'

import Header from '../components/layout/Header'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import Footer from '../components/layout/Footer'
import Home from '../pages/Home/Home'
import Register from '../pages/Register'
import Login from '../components/layout/Login'
import Contact from '../pages/Contact/Contact'
import About from '../pages/About/About'
import Profile from '../pages/Profile'
const UserRoutes = () => {
  return (
    <div>
        <Header />
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path='/profile' element={<Profile/>}/>

        </Routes>
        <Footer/>
    </div>
  )
}


export default UserRoutes;