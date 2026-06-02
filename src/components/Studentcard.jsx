export default function StudentCard({ student, deleteStudent }) {
    return (
        <div className="student-card">
            <div className="student-info">
             <h3>{student.name}</h3>
             <p>Grade: {student.grade}</p>
            </div>
        
         <div className="student-actions">
            <button onClick={() => deleteStudent(student.id)}
                className="delete-btn">
                    Delete </button>
            </div>
        </div>
    );

    
}