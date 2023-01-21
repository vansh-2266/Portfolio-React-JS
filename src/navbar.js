import React from 'react';
import "./navbar.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav>
            <NavLink to="/"><a>Home</a></NavLink>
            <NavLink to="/about"><a>About</a></NavLink>
            <NavLink to="/projects"><a>Projects</a></NavLink>
            <NavLink to="/work-experience"><a className='exp'>Experience</a></NavLink>
            <NavLink to="/contact"><a>Contact</a></NavLink>
        <div class="animation start-home"></div>
        </nav>
    </div>
  )
}

export default Navbar;