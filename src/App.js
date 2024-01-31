import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowDetailPage from './pages/ShowDetailPage';
import "./App.css"
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<ShowDetailPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
