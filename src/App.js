
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import StudentList from './StudentList';
import FavoriteStudents from './FavoriteStudents';

// Main App component
const App = () => {
  // Initial list of students
  const [students] = useState(['Alice', 'Bob', 'Charlie', 'David']);
  // State for favorite students
  const [favoriteStudents, setFavoriteStudents] = useState([]);
  const handleAddToFavorites = (student) => {
    if (!favoriteStudents.includes(student)) {
      setFavoriteStudents([...favoriteStudents, student]);
    }
  };

 
  const removeFromFavorites = (student) => {
    setFavoriteStudents(favoriteStudents.filter(favStudent => favStudent !== student));
  };

  return (
    
    <Router>
      <nav className="bg-red-300 p-3 text-2xl">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="underline">Students List</Link>
          </li>
          <li>
            <Link to="/favorites" className="underline">Favorite Students</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="p-10">
              <h1 className="p-3 text-2xl text-center">Students List</h1>
              <StudentList students={students}  favoriteStudents={favoriteStudents} addToFavorites={handleAddToFavorites}/>
             
            </div>
          }
        />
        <Route
          path="/favorites"
          element={
            <div className="p-10">
              <h2 className="p-3 text-2xl text-center">Favorite Students</h2>
              <FavoriteStudents favoriteStudents={favoriteStudents} removeFromFavorites={removeFromFavorites} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};




export default App;

