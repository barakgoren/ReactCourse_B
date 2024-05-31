import React, { useContext } from 'react'
import { AppContext } from '../context/Context1'
import TodoItem from './TodoItem';

export default function TodosList() {
  const { todos_ar } = useContext(AppContext);
  console.log(todos_ar);

  return (
    <div>
      <h2>List of todos:</h2>
      <div className='row'>
        {todos_ar.map(item => {
          return (
            <TodoItem key={item.id} item={item} />
          )
        })}
      </div>
    </div>
  )
}
