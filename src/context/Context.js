import { createContext, useState } from "react";
export const AppContext = createContext(null);


export default function ContextProvider(props) {
  const [students, setStudents] = useState([
  ]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  }

  const removeStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
    console.log("inside removeStudent");
  }

  const editStudent = (id, newName, newScore) => {
    setStudents(students.map((student) => 
      student.id === id ? { ...student, name: newName, score: newScore } : student
    ));
  }

  const globalValue = {
    students, addStudent, removeStudent, editStudent
  }

  return (
    <AppContext.Provider value={globalValue}>
      {props.children}
    </AppContext.Provider>
  )
} 