import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handlePlay = () => {
    console.log(`Navigating to: /player/${movie.id}`); // This should show in the console when clicked
    navigate(`/player/${movie.id}`); // Navigate to the player page
  };

  return (
    <div className="movie-card" onClick={handlePlay}>
      <img className="movie-poster" src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'default.jpg'} alt={`${movie.title} Poster`} />
      <h3>{movie.title}</h3>
    </div>
  );
}

export default MovieCard;
