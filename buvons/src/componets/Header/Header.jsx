import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <>
      <p className='buvons'>Buvons</p>
      <nav className='navbar'>
        <h4 className='links'>Menu</h4>
        <h4 className='links'>Find a Shop</h4>
        <h4 className='links'>Gift Cards</h4>
      </nav>
    </>
  )
}
