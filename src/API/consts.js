import axios from 'axios';
export const API = axios.create({
  baseURL: 'https://test-api-post.herokuapp.com',
});

if (localStorage.getItem('token')) {
  API.defaults.headers.common['Authorization'] = localStorage.getItem('token');
}
