import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Player.css'; // Import the CSS file

function Player() {
  const { movieId } = useParams();
  const [trailerKey, setTrailerKey] = useState('');

  useEffect(() => {
    const fetchTrailerKey = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=87711ded14430a9121ffeab4f15c4923`
        );
        const trailer = response.data.results.find(
          (video) => video.type === 'Trailer' && video.site === 'YouTube'
        );
        setTrailerKey(trailer ? trailer.key : '');
      } catch (error) {
        console.error('Error fetching trailer key:', error);
      }
    };

    fetchTrailerKey();
  }, [movieId]);

  return (
    <div className="player-container">
      {trailerKey ? (
        <iframe
          className="video-player"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="error-message">Trailer not available</p>
      )}
    </div>
  );
}

export default Player;
