import React, { useContext } from 'react'
import { AppContext } from '../context/Context'


export default function CounterChild() {
  const { count, setCount } = useContext(AppContext)
  return (
    <div>
      <button onClick={() => {setCount(count+1)}}>Add 1</button>
    </div>
  )
}
