import {useState} from 'react'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import './App.css'

export default function App() {
  const [students, setStudents] = useState([])

  const addStudent = (student) => {
    setStudents([...students, {id: Date.now(), ...student}])
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id))
  };

  return (
    <div className="app">
      <h1>Student Management System</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} deleteStudent={deleteStudent} />
    </div>
  );
}