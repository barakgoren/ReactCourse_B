import React, {useContext} from 'react'
import { AppContext } from '../context/Context'

export default function Home() {
  const {counter} = useContext(AppContext)

  return (
    <div className='container'>
      <h1>Home page</h1>
      <h3>Counter is: {counter} </h3>
    </div>
  )
}
