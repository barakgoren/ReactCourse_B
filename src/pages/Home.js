import React, { useContext } from 'react'
import { AppContext } from '../context/Context'

export default function Home() {
  const { count } = useContext(AppContext)
  return (
    <div className='container'>
      <h1>Welcome to Home Page</h1>
      <h3>Counter: {count}</h3>
    </div>
  )
}
