import React from 'react';    // library import 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home'          // component import 
import Contact from './Contact'
import About from './About'
import ErrorPage from './ErrorPage'
import Navbar from './Components/Navbar'

import './App.css';               // css files import 

function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<ErrorPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
