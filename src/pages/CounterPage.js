import React from 'react'
import CounterChild from '../components/CounterChild'

export default function CounterPage() {
  return (
    <div className='container'>
      <h2>Counter: </h2>
      <CounterChild />
    </div>
  )
}
