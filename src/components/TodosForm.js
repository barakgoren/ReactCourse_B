import React, { useContext, useRef } from 'react'
import { AppContext } from '../context/Context';
export default function TodosForm() {
    const { addNewTodo } = useContext(AppContext);
    const nameRef = useRef();
    const dateRef = useRef();

    const onSub = (e) => {
        e.preventDefault();
        const newItem = {
            name: nameRef.current.value,
            time: dateRef.current.value,
            id: Date.now()
        }
        addNewTodo(newItem);
    }

    return (
        <div>
            <h2>Add new todo form</h2>
            <form onSubmit={onSub} className='col-md-6'>
                <label>Name:</label>
                <input ref={nameRef} type="text" className='form-control' />
                <label>Time:</label>
                <input ref={dateRef} type="time" className='form-control' />
                <button type='submit' className='btn btn-success mt-3'>Add new</button>
            </form>
        </div>
    )
}