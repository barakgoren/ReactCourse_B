import React, { useContext, useRef } from 'react'
import { AppContext } from '../context/Context';
export default function TodoEditPopup() {
    const {toggleEdit, currentTodoEdit, updateTodo} = useContext(AppContext);

    const nameRef = useRef();
    const timeRef = useRef();

    const onSub = (e) => {
        e.preventDefault();
        const editItem ={
            name: nameRef.current.value,
            time: timeRef.current.value,
            id: currentTodoEdit.id
        }
        updateTodo(editItem, currentTodoEdit.id);
        toggleEdit();
    }

    return (
        <div className='dark_edit'>
            <div className='dark_box_edit'>
                <h2 className='text-center'>Edit form</h2>
                <form onSubmit={onSub}>
                    <label>Name:</label>
                    <input defaultValue={currentTodoEdit.name} ref={nameRef} type="text" className='form-control' />
                    <label>Time:</label>
                    <input defaultValue={currentTodoEdit.time} ref={timeRef} type="time" className='form-control' />
                    <button className='btn w-50 btn-success mt-3'>Update</button>
                    <button onClick={toggleEdit} className='btn w-50 btn-secondary mt-3'>Cancel</button>
                </form>
            </div>
        </div>
    )
}