import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <>
        
        <nav >
            <div  id="nav-arrow" className="logo" >
             <Link className="link1 "to='/'>NeliaDev</Link>
             </div>
             <div className="manu-icon">
            <i className="fa fa-bars"></i>
             </div>
             <div className="nav-links"> 
             <a  href="#projects2" className="link">Projects</a>
             <a  href="#contact" className="link">Contact</a>
             <Link  className="link" to='/resume'>Resume</Link>
             </div>
             </nav>
        
        </>

    )
}

export default NavBar