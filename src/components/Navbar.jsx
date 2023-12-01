import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import logo from '../Assets/QuincyVaultLogo.png'


const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><img src={logo} alt="Logo" width={150} /></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos/vinilos">Vinilos</Link></li>
            <li><Link className="menu-link" to="/productos/cds">CDs</Link></li>
            <li><Link className="menu-link" to="/productos/libros">Libros</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar

