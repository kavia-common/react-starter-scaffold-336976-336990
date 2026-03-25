import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MoviesShowsPage from './pages/MoviesShowsPage';
import ShowsOpenPage from './pages/ShowsOpenPage';
import './App.css';

// PUBLIC_INTERFACE
/**
 * Main App component with routing and layout.
 * Routes:
 *   /                 -> HomePage (Home Page - Laptop)
 *   /movies-shows     -> MoviesShowsPage (Movies & Shows Page - Laptop)
 *   /shows/:id        -> ShowsOpenPage (Shows Page Open - Laptop)
 *   /support          -> HomePage (placeholder)
 *   /subscriptions    -> HomePage (placeholder)
 */
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies-shows" element={<MoviesShowsPage />} />
            <Route path="/shows/:id" element={<ShowsOpenPage />} />
            <Route path="/shows" element={<ShowsOpenPage />} />
            <Route path="/support" element={<HomePage />} />
            <Route path="/subscriptions" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
