import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import {AiOutlineDown,AiOutlineMenu} from 'react-icons/ai';
import { useState } from 'react';
import {Drawer} from '@mui/material'



const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [open,setOpen]=useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleClose=()=>{
    setOpen(false);
  }
  const handleOpen=()=>{
    setOpen(true);

  }
  
  return (
   
    <nav className="nav">
      <div className="navbar__left ms-4">
        <a href="/">About us</a>
        <a href="/">Services</a>
        <a href="/">Works</a>
      </div>
      <div className="navbar__center">
        <img src='https://alkatefitsolutions.com/wp-content/uploads/2023/03/Logo-Al-Katef-iT-Solution-200x57.png.webp' alt="nm"></img>
      </div>
      <div className="navbar__right  me-4">
        <a href="/">Blog</a>
        <a href="/">Contact Us</a>
        <a href="/" onClick={toggleDropdown}>
          Pages
          <AiOutlineDown />
        </a>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <a href="/">Page 1</a>
            <a href="/">Page 2</a>
            <a href="/">Page 3</a>
          </div>
        )}
      </div>

      <div>
        <button className='menuButton'  onClick={handleOpen}>
        <AiOutlineMenu className=''/>
        </button>
        <Drawer open={open} onClose={handleClose} className=''>
        <ul className='bg-dark '>
         <li><a className='text-decoration-none text-white' href="/">About us</a></li>
        <li><a className='text-decoration-none text-white' href="/">Services</a></li>
        <li><a className='text-decoration-none text-white' href="/">Works</a></li>
        <li><a className='text-decoration-none  text-white' href="/">Blog</a></li>
        <li><a className='text-decoration-none text-white' href="/">Contact Us</a></li>
        <a className='text-decoration-none text-white' href="/" onClick={toggleDropdown}>
          Pages
          <AiOutlineDown />
        </a>
        </ul>
        </Drawer>
      </div>
    </nav>
 
  )
};

export default Navbar