import React,{useContext} from 'react'
import TodosForm from '../components/TodosForm'
import TodosList from '../components/TodosList'
import TodoEditPopup from '../components/TodoEditPopup'
import { AppContext } from '../context/Context1'

export default function TodoPage() {
  const {showEdit} = useContext(AppContext)
 

  return (
    <div className='container'>
      {showEdit && <TodoEditPopup /> }
      <TodosForm />
      <TodosList />
    </div>
  )
}
