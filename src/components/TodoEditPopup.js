import React, { useRef,useContext } from 'react'
import { AppContext } from '../context/Context1';

export default function TodoEditPopup() {
  const {setShowEdit,currentTodoEdit,updateTodo} = useContext(AppContext);
  
  const nameRef = useRef();
  const timeRef = useRef();


  const onSub = (e) => {
    e.preventDefault();
    const editItem = {
      name:nameRef.current.value,
      time:timeRef.current.value,
      id:currentTodoEdit.id
    }
    console.log(editItem);
    updateTodo(editItem,currentTodoEdit.id)
    setShowEdit(false)
  }

  return (
    <div className='dark_edit'>
      <div className='dark_box_edit'>
        <h2>Edit to do</h2>
        <form onSubmit={onSub}>
        <label>Name:</label>
        <input defaultValue={currentTodoEdit.name} ref={nameRef} type="text" className='form-control' />
        <label>Time:</label>
        <input  defaultValue={currentTodoEdit.time} ref={timeRef} type="time" className='form-control' />
        <button className='btn btn-success mt-3'>Update</button>
        <button onClick={() => {
          setShowEdit(false)
        }} className='btn btn-danger mt-3'>Cancel</button>
        </form>
      </div>
    </div>
  )
}
