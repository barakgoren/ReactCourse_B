import React, { useState, useContext} from 'react'
import { AppContext } from '../context/Context'

export default function StudentForm() {
    const { addStudent } = useContext(AppContext);
    const [newStudentName, setNewStudentName] = useState('');
    const [newStudentScore, setNewStudentScore] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        const newStudent = {
            id: Date.now(),
            name: newStudentName,
            score: newStudentScore
        }
        addStudent(newStudent);
        alert('Student added successfully');
    }
    return (
        <div className='container my-3'>
            <div className='container w-75 p-3 border border-3 rounded-4 my-3'>
                <h1>Add new student</h1>
                <form onSubmit={onSubmit}>
                    <div className='mb-3'>
                        <label className='form-label'>Name</label>
                        <input onChange={(e) => {setNewStudentName(e.currentTarget.value)}} type='text' className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Score</label>
                        <input max={100} onChange={(e) => {setNewStudentScore(e.currentTarget.value)}} type='number' className='form-control' />
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}
