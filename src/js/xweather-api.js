import axios from 'axios';

export async function fetchWeather(query) {
  const API_KEY = 'Qul50OaRp5dAve1t4jrH1';
  const BASE_URL = 'https://somedomain.com';
  const END_POINT = '/places/';
  const url = `${BASE_URL}${END_POINT}`;
  const params = {
    key: API_KEY,
    q: query,
  };

  const res = await axios.get(url, { params });
  return res.data;
}
