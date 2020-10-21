import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApplicationRouter } from './ApplicationRouter';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Router>
      <div className='flex flex-col h-screen justify-between'>
        <Navbar />
        <ApplicationRouter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
