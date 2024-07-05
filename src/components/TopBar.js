import React from 'react'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <header style={{backgroundColor:'#4999E8', height:'7vh'}} className='container-fluid d-flex align-items-center'>
      <div className='container p-2'>
        <div className='row align-items-center'>
          <div className='logo col-auto'>
            <h2>Workers App</h2>
          </div>
          <nav className='col-auto'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
