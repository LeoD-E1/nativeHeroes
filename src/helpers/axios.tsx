import axios from 'axios';

export const axiosTool = axios.create({
  /* baseURL: process.env.REACT_APP_HERO_BASE_URL, */
  baseURL: 'https://akabab.github.io/superhero-api/api',
  headers: {
    'Content-type': 'application/json',
  },
});
