import  React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Navbar.css'

const Navbar=()=>{
    return(
        <div>
          <nav>
                <ul>
                    <NavLink className="lia" to="/">Home</NavLink>
                    <NavLink className="lia" to="/contact">Contact</NavLink>
                    <NavLink className="lia" to="/about">About</NavLink>
                </ul>
            </nav>

            <Outlet/>
        </div>
    )
}

export default Navbar