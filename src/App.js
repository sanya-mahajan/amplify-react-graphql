import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
