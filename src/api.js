import axios from "axios";

const API_KEY = "52b17cdad5c0a08dc790519e5d3fe716";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = { api_key: API_KEY };

export const getMovies = async (option, query) => {
    const resp = await axios.get(`${option}?query=${query}`);
    return resp.data;
}

export const getMovieById = async movieId => {
    const resp = await axios.get(`/movie/${movieId}?`);
    return resp.data;
}

export const getCastById = async movieId => {
    const resp = await axios.get(`/movie/${movieId}/credits?`);
    return resp.data;
}

export const getReviewsById = async movieId => {
    const resp = await axios.get(`/movie/${movieId}/reviews?`);
    return resp.data;
}