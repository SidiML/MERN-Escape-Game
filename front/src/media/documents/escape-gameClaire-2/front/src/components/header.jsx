import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/logo-esc.png"


export default function Header() {

  return (
    <div className='nav-bar-container'>
        <nav className='nav-bar' style={{color:'white', textDecoration: 'none' }}>
          <Link to="/" style={{color:'white', textDecoration: 'none' }}><img className="logo-img" src={logo}/></Link>
          <Link to="/historique" style={{color:'white', textDecoration: 'none', padding:'18px' }}>Historique</Link>
          <Link to="/signin" style={{color:'white', textDecoration: 'none', padding:'18px' }}>Connexion</Link>
        </nav>
    </div>
  )
}
