import StudentCard from "./StudentCard";

export default function StudentList({ students, deleteStudent }) {
  return (
    <div className="student-list">
        <h2>Student List</h2>

        {students.length === 0 ? (
            <p>No students added yet.</p>
        ) : (
            students.map((student) => (
                <StudentCard 
                key={student.id} 
                student={student} 
                deleteStudent={deleteStudent}
                />
            ))
        )}
    </div>
  );
}