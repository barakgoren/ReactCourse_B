import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import EmployeeCard from './EmployeeCard'

export default function HomeList() {
    const { workers } = useContext(AppContext);
    return (
        <div className='my-4'>
            <div className='d-flex px-2 justify-content-center flex-wrap'>
                {workers.map((worker, index) => <EmployeeCard key={worker.login.username} worker={worker} />)}
            </div>
        </div>
    )
}
