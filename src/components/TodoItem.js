import React,{useContext} from 'react'
import { AppContext } from '../context/Context1'


export default function TodoItem({item}) {

  const {deleteTodo,setShowEdit,setCurrentEdit} = useContext(AppContext)

  return (
    <div className='col-md-7 border p-2 my-2'>
      <button onClick={() => {
        setShowEdit(true)
        setCurrentEdit(item)
        // deleteTodo(item.id)
      }} className='bg-info float-end'>Edit</button>
      <button onClick={() => {
        deleteTodo(item.id)
      }} className='bg-danger float-end'>X</button>
      <h5>{item.name} - {item.time}</h5>
    </div>
  )
}
