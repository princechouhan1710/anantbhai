import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './layout/Navbar.jsx';
import './App.css'
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Forms/Login.jsx';
import Signin from './Forms/Signin.jsx';
import Dashboard from './Dashboard (2).jsx';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from './layout/Footer.jsx';
import { Route, Router, Routes } from 'react-router-dom';
function App() {
  AOS.init();
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        
        <Route path='/About' element={<About/>}></Route>
        
        <Route path='/Contact' element={<Contact/>}></Route>
        
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signin' element={<Signin/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
