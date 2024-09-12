import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import StudentDashboard from './components/StudentDashboard';
import AddStudent from './components/AddStudent'; // Import AddStudent
import ViewStudents from './components/ViewStudents'; // Import ViewStudents

function App() {
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/dashboard" element={<StudentDashboard />} />
                  <Route path="/add-student" element={<AddStudent />} />
                  <Route path="/view-students" element={<ViewStudents />} /> {/* Add this route */}
                  <Route path="/" element={<Login />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
