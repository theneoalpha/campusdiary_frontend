import logo from './logo.svg';


import React  from 'react';
import "./components/assets/tailwind.css";

import Navbar2 from './components/Navbar2';
import Home from './components/Home';


import Skill from './components/Skill';
import Contact from './components/Register';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import Notes from './components/Notes';
import Batch2125 from './components/batches/Batch2125';
import View from './components/View';
import Batch2024 from './components/batches/Batch2024';
import Batch1923 from './components/batches/Batch1923';

import Login from './components/Login';
import Profile from "./components/Profile";
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './components/Register';


function App() {
  

 
  return (
    <>
    
    <BrowserRouter>
          <Routes>
           
            <Route path="/" element={<Home/>} />
            <Route path="/view" element={<View/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/notes" element={<Notes/>} />
            <Route path="/view/batch2125" element={<Batch2125/>} />
            <Route path="/view/batch2024" element={<Batch2024/>} />
            <Route path="/view/batch1923" element={<Batch1923/>} />
            <Route path="/view/batch1923" element={<Batch1923/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>
        
          </Routes>
        </BrowserRouter>
    
    
    
    
    
    </>
  );
}

export default App;
