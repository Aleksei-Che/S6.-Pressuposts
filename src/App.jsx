import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CalculatorPage from './components/CalculatorPage';
import './App.css'

function App() {
  return (

    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/calculator' element={<CalculatorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
