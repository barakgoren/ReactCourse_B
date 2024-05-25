import React, { useContext } from 'react';
import { AppContext } from '../context/Context';

export default function StudentListItem({ student }) {
    const { removeStudent } = useContext(AppContext);
    return (
        <tr>
            <td style={{ width: '20rem' }} className='align-content-center fs-5'>{student.id}</td>
            <td style={{ width: '20rem' }} className='align-content-center fs-5'>
                <span>{student.name}</span>
            </td>
            <td style={{ width: '20rem' }} className='align-content-center fs-5'>
                <span>{student.score}</span>
            </td>
            <td className='d-flex justify-content-center'>
                <button onClick={() => { removeStudent(student.id) }} className='bg-danger mx-1 d-flex'>X</button>
            </td>
        </tr>
    )
}
