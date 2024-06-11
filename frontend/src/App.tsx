import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import  UserRoutes  from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes'

function App() {
  return (
    <Router>
      <Routes>
          
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/*" element={<UserRoutes />} />
        
      </Routes>
    </Router>
  );
}

export default App;