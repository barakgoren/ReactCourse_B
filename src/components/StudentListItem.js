import React, { useContext, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete, MdDone } from 'react-icons/md'
import { AppContext } from '../context/Context';

export default function StudentListItem({ student }) {
    const [scoreValue, setScoreValue] = useState(student.score);
    const [nameValue, setNameValue] = useState(student.name);
    const [isEditing, setIsEditing] = useState(false);
    const { removeStudent, editStudent } = useContext(AppContext);

    const handleEdit = (e) => {
        if (e.target.type === 'number') {
            setScoreValue(e.target.value);
        } else {
            setNameValue(e.target.value);
        }
    }
    const handleEditSubmit = () => {
        editStudent(student.id, nameValue, scoreValue);
        setIsEditing(!isEditing);
    }
    return (
        <tr>
            <td style={{width:'20rem'}} className='align-content-center fs-5'>{student.id}</td>
            <td style={{width:'20rem'}} className='align-content-center fs-5'>
                {isEditing ? <input type="text" onChange={handleEdit} value={nameValue} className='form-control w-50'></input> : <span>{student.name}</span>}

            </td>
            <td style={{width:'20rem'}} className='align-content-center fs-5'>
                {isEditing ? <input type="number" onChange={handleEdit} value={scoreValue} className='form-control w-50'></input> : <span>{student.score}</span>}
            </td>
            <td className='d-flex align-content-center align-items-center justify-content-center'>
                {isEditing ?
                    (
                        <button onClick={handleEditSubmit} className='bg-success mx-1 d-flex p-2'>
                            <MdDone size={20} />
                        </button>
                    ) :
                    (
                        <button onClick={() => { setIsEditing(!isEditing) }} className='bg-primary mx-1 d-flex p-2'>
                            <FaEdit size={20} />
                        </button>
                    )
                }

                <button onClick={() => { removeStudent(student.id) }} className='bg-danger mx-1 d-flex p-2'><MdDelete size={20} /></button>
            </td>
        </tr>
    )
}
