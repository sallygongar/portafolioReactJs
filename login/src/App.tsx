import React, { useState } from 'react';
import Login from "./Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (authStatus: boolean) =>{
    console.log("Desde app",authStatus)
    setIsAuthenticated(authStatus);
  }

  return (
   <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
   </Router>
  );
}

export default App;
