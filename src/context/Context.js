import { createContext, useLayoutEffect, useState } from 'react'
export const AppContext = createContext(null);

export default function ContextProvider({ children }) {
    const [todos_ar, setTodosAr] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [currentTodoEdit, setCurrentTodoEdit] = useState({});

    useLayoutEffect(() => {
        const todosFromLocalStorage = localStorage.getItem('todos_ar');
        if (todosFromLocalStorage) {
            setTodosAr(JSON.parse(todosFromLocalStorage))
        }
    }, [])

    const toggleEdit = () => {
        setShowEdit(!showEdit)
    }

    const addNewTodo = (newTodo) => {
        setTodosAr([...todos_ar, newTodo])
        localStorage.setItem('todos_ar', JSON.stringify([...todos_ar, newTodo]))
    }

    const deleteTodo = (id) => {
        const newTodos = todos_ar.filter((todo) => todo.id !== id)
        setTodosAr(newTodos)
        localStorage.setItem('todos_ar', JSON.stringify(newTodos))
    }

    const resetList = () => {
        if (window.confirm('Are you sure to reset the list?')) {
            setTodosAr([])
            localStorage.setItem('todos_ar', JSON.stringify([]))
        }
    }

    const contextValue = {
        todos_ar, showEdit, currentTodoEdit, setCurrentTodoEdit, addNewTodo, deleteTodo, resetList, toggleEdit
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}
