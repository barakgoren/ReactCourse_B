import React, { useContext } from 'react'
import TodoEditPopup from '../components/TodoEditPopup'
import TodosForm from '../components/TodosForm'
import TodosList from '../components/TodosList'
import { AppContext } from '../context/Context';

export default function TodoPage() {
    const { showEdit } = useContext(AppContext);
    return (
        <div className='container'>
            {showEdit &&
                <TodoEditPopup />
            }
            <TodosForm />
            <TodosList />
        </div>
    )
}
