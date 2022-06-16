import './index.css'
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <>
        
        <nav >
            <div className="logo">
             <Link className="link1 "to='/'>NeliaDev</Link>
             </div>
             <div className="manu-icon">
            <i className="fa fa-bars"></i>
             </div>
             <div className="nav-links"> 
             <Link className="link" to='/projects'>Projects</Link>
             <Link  className="link" to='/contact'>Contact</Link>
             <Link  className="link" to='/resume'>Resume</Link>
             </div>
             </nav>
        
        
        
        </>

    )
}

export default NavBar