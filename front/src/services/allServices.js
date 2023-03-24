import axios from 'axios';

const API_URL = 'http://localhost:3090/api';

export function getNodes() {
  return axios.get(`${API_URL}/node`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export function getEdges() {
  return axios.get(`${API_URL}/edge`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
}

