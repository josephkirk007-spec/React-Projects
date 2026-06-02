import {useState} from 'react';

export default function StudentForm({addStudent}) {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !grade) return;
      addStudent({name, grade});
      setName('');
      setGrade('');
    };

    return (
        <form onSubmit={handleSubmit} className="student-form">
            <input
                type="text"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Student Grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
            />
            <button type="submit">Add Student</button>
        </form>
    );
}
