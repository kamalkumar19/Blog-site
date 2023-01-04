import React from 'react'
import logo from '../image/logo-light.svg'  
import '../styles/Navbar.css'; 
import {MdDarkMode} from 'react-icons/md' 
 

const Navbar =()=>{
    return (
    
    <div className="container">  
<nav className='row-navbar'>  
    <div>
    <img  className="logo" src={logo} alt="logo"/>  
    </div>
   <div className="nav-items"> 
       <div>Home </div>
       <div> Qualification </div>
       <div> Course </div>
       <div><MdDarkMode size={23}/></div>
   </div>
</nav>

    </div>
    
    )
} 
 export default Navbar