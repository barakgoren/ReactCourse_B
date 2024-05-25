import React from 'react'
import { Link } from 'react-router-dom'

export default function Header1() {
  return (
    <header className='container-fluid bg-info'>
      <div className='container p-2'>
        <div className='row align-items-center'>
          <div className='logo col-auto'>
            <h2>University</h2>
          </div>
          <nav className='col-auto'>
            <ul>
              <li><Link to="/">All Students</Link></li>
              <li><Link to="/studentform">Add Student</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
