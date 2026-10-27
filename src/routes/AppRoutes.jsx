import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Task26Oct from '../Pages/Task26Oct'
import Footer from '../components/Footer'
import HomePage from '../Pages/HomePage'
import SettingPage from '../Pages/SettingPage'


const AppRoutes = () => {
   
  return (
    <div>
        <h1>Routing Concept</h1>
      
       
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Task26Oct/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/settings' element={<SettingPage/>}/>
        
        </Routes>
        <Footer/>
        </BrowserRouter>
        
    </div>
  )
}

export default AppRoutes
