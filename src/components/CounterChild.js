import React,{useContext} from 'react'
import { AppContext } from '../context/Context1'

export default function CounterChild() {
  const {counter} = useContext(AppContext)

  return (
    <div>
      <button>Add 1</button>
    </div>
  )
}
