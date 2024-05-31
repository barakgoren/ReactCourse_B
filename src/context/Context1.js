import { createContext, useLayoutEffect, useState } from "react";
export const AppContext = createContext(null);


export default function ContextProvider({children}){
  const [todos_ar,setTodosAr] = useState([
    {name:"Go to work",time:"06:50",id:1},
    {name:"Go to eat",time:"12:30",id:2},
    {name:"Go to home",time:"16:50",id:3},
  ]);
  // אם יוצג הפופ אפ או לא
  const [showEdit,setShowEdit] = useState(false);
  // הפריט של המשימה שאני עורך
  const [currentTodoEdit,setCurrentEdit] = useState({})

  useLayoutEffect(() => {
    if(localStorage.getItem("todos_ar")){
      setTodosAr(JSON.parse(localStorage.getItem("todos_ar")))
    }
  },[])

  const addTodo = (newItem) => {
    setTodosAr([...todos_ar,newItem])
    // STRINGFY - מכיוון שלוקאל סטורג' יודע לשמור רק סטרינגים
    // יש להפוך את המערך לסטרינג
    localStorage.setItem("todos_ar",JSON.stringify([...todos_ar,newItem]))
  }

  const resetList = () => {
    if(window.confirm("Delete all?")){
      setTodosAr([])
      localStorage.setItem("todos_ar",JSON.stringify([]))
    }
  }

  const deleteTodo = (_id) => {
    const filter_ar = todos_ar.filter(item => item.id != _id);
    setTodosAr(filter_ar)
    localStorage.setItem("todos_ar",JSON.stringify(filter_ar))
  }

  const updateTodo = (_editItem,_id) => {
    const map_ar = todos_ar.map(item => {
      if(item.id == _id){
        return _editItem
      }
      return item;
    })
    setTodosAr(map_ar)
    localStorage.setItem("todos_ar",JSON.stringify(map_ar))
  }

  const globalVal = {
    todos_ar,addTodo,resetList,deleteTodo,
    showEdit,setShowEdit,currentTodoEdit,setCurrentEdit,updateTodo
  }

  return(
    <AppContext.Provider value={globalVal}>
      {children}
    </AppContext.Provider>
  )
}