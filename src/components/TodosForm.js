import React, { useRef,useContext } from 'react'
import { AppContext } from '../context/Context1';

export default function TodosForm() {
  const {addTodo,resetList} = useContext(AppContext)
  
  const nameRef = useRef();
  const timeRef = useRef();

  const onSub = (e) => {
    e.preventDefault();
    const newItem = {
      name:nameRef.current.value,
      time:timeRef.current.value,
      id:Date.now()
    }
    console.log(newItem);
    addTodo(newItem)
    // בדיקה לשמירה בלוקאל 
    // localStorage.setItem("test1",nameRef.current.value);
  }

  return (
    <div>
      <h2>Add new todo form</h2>
      <button onClick={resetList} className='btn btn-danger'>Reset all</button>
      <form onSubmit={onSub} className='col-md-6'>
        <label>Name:</label>
        <input ref={nameRef} type="text" className='form-control' />
        <label>Time:</label>
        <input defaultValue={"08:00"} ref={timeRef} type="time" className='form-control' />
        <button className='btn btn-success mt-3'>Add new</button>
      </form>
    </div>
  )
}
