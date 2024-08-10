import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import FetchData from './components/FetchData';
import Task from './components/Task'; // Import the Task component

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/fetch-data' element={<FetchData />} />
        <Route path='/task' element={<Task />} /> {/* Add route for Task */}
      </Routes>
    </Router>
  );
}

export default App;
