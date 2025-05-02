import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <>
      <div className='menu'>
        <img className='menu-card' src="./images/Menucard.png" alt="" />
      </div>
      <center>
        <h1><Link className='back' to="/">Back to Homepage</Link></h1>
      </center>
    </>
  )
}
