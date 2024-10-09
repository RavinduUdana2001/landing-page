import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard'; // Ensure this is the correct path to your Dashboard component
import GacSystem from './Components/GacSystem/GacSystem'; // Replace with your actual GAC System component path
import McLarensSystem from './Components/McLarensSystem/McLarensSystem'; // Replace with your actual McLarens System component path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/gac-system" element={<GacSystem />} />
        <Route path="/mclarens-system" element={<McLarensSystem />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
