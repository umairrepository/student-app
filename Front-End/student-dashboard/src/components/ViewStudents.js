import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllStudent } from '../services/api'; // Ensure this matches the actual file and function name
import './ViewStudents.css'; // Import the CSS file

const ViewStudents = () => {
    const [students, setStudents] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await getAllStudent();
                setStudents(response.data); // Axios returns the data in response.data
            } catch (error) {
                setError('Failed to fetch students');
            }
        };

        fetchStudents();
    }, []);

    const handleBack = () => {
        navigate('/add-student'); // Navigate to the AddStudent page
    };

    const handleLogout = () => {
        // Perform any necessary logout logic here (e.g., clearing tokens or session)
        navigate('/login'); // Navigate to the login page
    };

    return (
        <div className="view-students-container">
            <div className="view-students-form">
                <h2>Student List</h2>
                {error && <p className="error">{error}</p>}
                {students.length > 0 ? (
                    <table className="student-table">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>University Name</th>
                                <th>Course Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.studentName}</td>
                                    <td>{student.universityName}</td>
                                    <td>{student.universityCourse}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No students available.</p>
                )}
                <div className="buttons">
                    <button onClick={handleBack}>Back to Add Student</button>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default ViewStudents;
