import React from 'react';

import {Link } from "react-router-dom";
import Navbar from './Navbar';
import Navbar2 from './Navbar2';

export default function Dashboard() {
   
     
  return (
    <>
    <Navbar/>
    <h1>Dashboard</h1>
    <Link  to="/profile">View Profile</Link>
    
    </>
  )
}
