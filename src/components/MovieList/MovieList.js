import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieList.css';

const apiKey = '87711ded14430a9121ffeab4f15c4923'; 

const categoryToGenreId = {
  horror: 27,
  cartoons: 16,
  'sci-fi': 878,
  thrillers: 53,
  drama: 18,
  'high school': 35,
  adventure: 12,
  'translated': 10749,
  'non-translated': 10770,
  musicals: 10402,
  korean: 10752,
};

function MovieList() {
  const { category } = useParams();
  const navigate = useNavigate(); 
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const genreId = categoryToGenreId[category.toLowerCase()];

        if (!genreId) {
          console.error('Invalid category');
          setLoading(false);
          return;
        }

        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
          params: {
            api_key: apiKey,
            with_genres: genreId,
            language: 'en-US',
            page: 1,
          },
        });

        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies: ', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category]);

  const handlePlay = (movieId) => {
    navigate(`/player/${movieId}`);
  };

  return (
    <div className="movie-list">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Movies</h1>
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <div className="movie-cards">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => handlePlay(movie.id)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
