import { createContext, useLayoutEffect, useState } from "react";
export const AppContext = createContext(null);


export default function ContextProvider(props) {
  const [students, setStudents] = useState([
  ]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  }

  useLayoutEffect(() => {
    let data = localStorage.getItem('students');
    if (data) {
      setStudents(JSON.parse(data));
    }
  }, []);

  const removeStudent = (id) => {
    let student = students.find((student) => student.id === id);
    let answer = window.confirm(`Are you sure you want to remove ${student.name} from the list?`);
    if (!answer) return;
    setStudents(students.filter((student) => student.id !== id));
  }

  const globalValue = {
    students, addStudent, removeStudent
  }

  return (
    <AppContext.Provider value={globalValue}>
      {props.children}
    </AppContext.Provider>
  )
} 