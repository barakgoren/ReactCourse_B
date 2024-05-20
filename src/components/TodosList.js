import React, { useContext } from 'react'
import { AppContext } from '../context/Context'

export default function TodosList() {
    const { todos_ar, deleteTodo, resetList, toggleEdit, setCurrentTodoEdit } = useContext(AppContext);

    const sortedTodos = [...todos_ar].sort((a, b) => {
        const [aHours, aMinutes] = a.time.split(':').map(Number);
        const [bHours, bMinutes] = b.time.split(':').map(Number);

        // Compare hours first, then minutes
        return aHours - bHours || aMinutes - bMinutes;
    });

    return (
        <div>
            <h2>List of todos: <span onClick={resetList} className='btn text-primary fs-5'>reset</span></h2>
            <div className='row'>
                {sortedTodos.map((todo) => (
                    <div key={todo.id} className='col-md-7 border p-2 my-1'>
                        <button onClick={() => {
                            toggleEdit();
                            setCurrentTodoEdit(todo);
                        }} className='bg-info float-end'>Edit</button>
                        <button onClick={() => deleteTodo(todo.id)} className='bg-danger float-end'>X</button>
                        <h5>{todo.name} - {todo.time}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}