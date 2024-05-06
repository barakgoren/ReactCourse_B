import React, { useContext } from 'react'
import CounterChild from '../components/CounterChild'
import { AppContext } from '../context/Context'

export default function CounterPage() {
  const { count } = useContext(AppContext)
  return (
    <div className='container'>
      <h2>Counter: {count} </h2>
      <CounterChild />
    </div>
  )
}
