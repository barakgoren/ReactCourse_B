import React from 'react'
import { Link } from 'react-router-dom'

export default function Header1() {
  return (
    <header className='container-fluid bg-warning'>
      <div className='container p-2'>
        <div className='row align-items-center'>
          <div className='logo col-auto'>
            <h2>Noon</h2>
          </div>
          <nav className='col-auto'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/todo">Todos</Link></li>
              <li><Link to="/form1">Form 1</Link></li>
              <li><Link to="/icons">Icons</Link></li>
              <li><Link to="/map">Map</Link></li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
