import { MOVIES_FETCH, DETAILS_FETCH, TRAILER_FETCH } from './types';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '&api_key=cf73a59652c9a9806c06af8a6295e3a3';
const MOVIE_URL = 'https://api.themoviedb.org/3/movie/';

const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=';
const YOUTUBE_KEY = 'trailer&type=video&key=AIzaSyDOD4l6AUGz6e2Yb2645GgVeK3OiTKfkLc';

export const moviesFetch = (choice, page) => {
  return (dispatch) => {
    return fetch(`${API_URL}discover/movie?${choice}&page=${page}${API_KEY}`)
      .then(response => response.json())
      .then(response => {
        dispatch({ type: MOVIES_FETCH, payload: response.results });
      });
  };
};

export const moviesDetails = (movieID) => {
  return (dispatch) => {
    return fetch(`${MOVIE_URL}${movieID}?${API_KEY}`)
    .then(response => response.json())
    .then(response => {
      dispatch({ type: DETAILS_FETCH, payload: response });
    });
  };
};

export const trailerFetch = (movie) => {
  return (dispatch) => {
    return fetch(`${YOUTUBE_API}${movie}${YOUTUBE_KEY}`)
    .then(response => response.json())
    .then(response => {
      dispatch({ type: TRAILER_FETCH, payload: response.items[0].id.videoId });
    });
  };
};
