import React, { useContext, useRef } from 'react'
import { AppContext } from '../context/Context';
export default function TodoEditPopup() {
    const {toggleEdit, currentTodoEdit} = useContext(AppContext);

    const nameRef = useRef();
    const timeRef = useRef();

    return (
        <div className='dark_edit'>
            <div className='dark_box_edit'>
                <h2 className='text-center'>Edit form</h2>
                <form>
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