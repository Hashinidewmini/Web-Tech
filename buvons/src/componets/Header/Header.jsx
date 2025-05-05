import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <p className='buvons'><Link className='home' to="/">Buvons</Link></p>
      <nav className='navbar'>
        <h4 className='links'><Link className='link' to="/menu">Menu</Link></h4>
        <h4 className='links'><Link className='link' to="/shops">Find a Shop</Link></h4>
        <h4 className='links'><Link className='link' to="/gift">Gift Card</Link></h4>
      </nav>
    </div>
  )
}
