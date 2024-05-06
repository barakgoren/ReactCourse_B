import React, { useContext } from 'react'
import { AppContext } from '../context/Context'
import StudentListItem from '../components/StudentListItem';


export default function StudentList() {
    const { students } = useContext(AppContext);
    return (
        <div className='container my-3'>
            <h1>Student List</h1>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th style={{ width: '10rem' }} className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? students.map((student) => {
                        return (
                            <StudentListItem key={student.id} student={student} />
                        )

                    }) : <tr><td colSpan='4' className='text-center fs-5'>No students found</td></tr>}
                </tbody>
            </table>
        </div>
    )
}
