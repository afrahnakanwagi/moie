import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Categories from './components/Categories/Categories';
import MovieList from './components/MovieList/MovieList';
// import MovieCard from './components/MovieCard/MovieCard';
import Player from './components/Player/Player';
import app from './firebaseConfig';

function App() {
  console.log('firebase initialized', app);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<MovieList />} />
          <Route path="/player/:movieId" element={<Player />} /> {/* Ensure this route is present */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
