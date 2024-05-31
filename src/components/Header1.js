import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/Context1'
import { FaReact, FaUserAlt } from "react-icons/fa";

export default function Header1() {
  const { user } = useContext(AppContext);
  return (
    <header className='container-fluid bg-warning'>
      <div className='container p-2'>
        <div className='row align-items-center'>
          <div className='logo col-auto d-flex align-content-center'>
            <FaReact style={{fontSize:'35px', color:'green'}} />
          <h2>Noon</h2>
        </div>
        <nav className='col'>
          <ul className='w-100'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/todo">Todos</Link></li>
            <li><Link to="/form1">Form 1</Link></li>
            <li><Link to="/icons">Icons</Link></li>
            <li><Link to="/map">Map</Link></li>
            <li><Link to="/hw">Homework</Link></li>
            {user.name &&
              <div className='ms-auto d-flex'>
                <li className='mx-2'><FaUserAlt /></li>
                <li>Barak Goren</li>
              </div>
            }
          </ul>
        </nav>
      </div>
    </div>
    </header >
  )
}
