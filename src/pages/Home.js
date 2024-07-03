import React from 'react'
import HomeList from '../components/HomeList'

export default function Home() {
  return (
    <div>
      <img src='strip.jpg' alt='strip' style={{ width: '100%', height: '30vh', objectFit: 'cover' }} />
      <div className='container d-flex flex-column align-items-center'>
        <h2 className='text-center my-3'>Welcome to Workers App</h2>
        <div className='w-25 d-flex'>
          <input type='search' className='form-control' placeholder='Search workers' />
          <button className='btn btn-primary'>Search</button>
        </div>
      </div>
      <HomeList />
    </div>
  )
}
