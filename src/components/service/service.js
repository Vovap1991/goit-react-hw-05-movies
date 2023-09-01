import axios from 'axios';
import toast from 'react-hot-toast';

export const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const API_KEY = '6178ee758ee87dc14bb4d89ae2a9c14c';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchPopularFIlms = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    toast.error(`Sorry! Something went wrong! Please try refreshing the page!`);
  }
};

export const fetchFilmByQuery = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    toast.error(
      `Sorry! We couldn't find any movies according to your request! Please, enter other movie name!`
    );
  }
};

export const fetchFilmById = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    toast.error(
      `Sorry! We couldn't find any information about this film! Please, try again later!`
    );
  }
};

export const fetchCastById = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    toast.error(
      `Sorry! We couldn't find any information about this film! Please, try again later!`
    );
  }
};

export const fetchReviewById = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    toast.error(
      `Sorry! We couldn't find any information about this film! Please, try again later!`
    );
  }
};
