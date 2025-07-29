// api/postApi.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});

export const getCountry = () => {
  return api.get('/all?fields=name,population,region,capital,flags');
};

export const getCountryInd = (name) => {
  return api.get(`/name/${name}?fullText=true&fields=name,popultion,region,subregion,capital,tld,currencies,languages,bprder,flags`);
}