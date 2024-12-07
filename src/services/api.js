import axios from 'axios';

const API_TOKEN = process.env.REACT_APP_TMDB_TOKEN;

const fetchMovies = async (endpoint) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from TMDb:', error);
  }
};
