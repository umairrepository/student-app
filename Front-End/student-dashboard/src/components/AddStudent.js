import React, { useState } from 'react';
import { createStudent } from '../services/api'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom'; // For routing to login
import './AddStudent.css'; // Import the CSS file

const AddStudent = ({ onViewClick }) => {
    const [studentName, setStudentName] = useState('');
    const [universityName, setUniversityName] = useState('');
    const [universityCourse, setUniversityCourse] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleAddStudent = async () => {
        try {
            await createStudent({ studentName, universityName, universityCourse });
            setStudentName('');
            setUniversityName('');
            setUniversityCourse('');
            setError('');
        } catch (error) {
            setError('Failed to add student');
        }
    };

    const handleLogout = () => {
        
        navigate('/login'); 
    };

    const handleView = () => {
        if (onViewClick) {
            onViewClick();
        }
        navigate('/view-students'); 
    };

    return (
        <div className="add-student-container">
            <div className="add-student-form">
                <h2>Add Student</h2>
                {error && <p className="error">{error}</p>}
                <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Student Name"
                />
                <input
                    type="text"
                    value={universityName}
                    onChange={(e) => setUniversityName(e.target.value)}
                    placeholder="University Name"
                />
                <input
                    type="text"
                    value={universityCourse}
                    onChange={(e) => setUniversityCourse(e.target.value)}
                    placeholder="University Course"
                />
                <button onClick={handleAddStudent}>Add Student</button>
                <div className="buttons">
                    <button onClick={handleView}>View Students</button>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;
