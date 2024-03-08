import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';
import Patients from './components/Patients/Patients';
import Diagnostics from './components/Diagnostics/Diagnostics';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Medication from './components/Medication/Medication';


function App() {
  return (
    <Router>
            <Navigation />

      <div className="App">
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/medication" element={<Medication />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;