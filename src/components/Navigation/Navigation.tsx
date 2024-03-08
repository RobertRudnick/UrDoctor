import React, { useEffect, useState } from 'react';
import './Navigation.css'
import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaStethoscope, FaCog, FaPills } from 'react-icons/fa';
import { PiUserList } from "react-icons/pi";

function Navigation  () {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState('');
  useEffect(() => {
     setUrl(location.pathname);
  }, [location]);
  
  return (
  <Navbar className="navbar-wrapper">
      <Nav className='w-100 justify-content-between' >
      <Link className={ url === '/' ? 'navbar-item active' : 'navbar-item'} to="/">
        <FaHome size={24} /> 
      </Link>
      <Link className={ url === '/patients' ? 'navbar-item active' : 'navbar-item'} to="/patients">
        <PiUserList size={30} />
      </Link>
      <Link className={ url === '/diagnostics' ? 'navbar-item active' : 'navbar-item'} to="/diagnostics">
        <FaStethoscope size={24} /> 
      </Link>
      <Link className={ url === '/medication' ? 'navbar-item active' : 'navbar-item'} to="/medication">
        <FaPills size={24} /> 
      </Link>
      <Link className={ url === '/settings' ? 'navbar-item last active' : 'navbar-item last'}  to="/settings">
        <FaCog size={24} /> 
      </Link>
        
      </Nav>
  </Navbar>
);}
export default Navigation;