import React from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Menu from './Components/Menu';

import Services from './Components/Services';
import './index.css';
import './Menu.css';

export default function Apps() {
  return (
    <>
   
    <Menu/>
    <BrowserRouter>
    <Routes>

    <Route  exact path='/' element={<Home/>} />
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/services' element={<Services/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}
