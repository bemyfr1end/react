import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://b-m-fb.herokuapp.com/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all', 
    {headers: { 'Content-Type': 'application/x-www-form-urlencoded', 
    'Access-Control-Allow-Origin':'*', 
    'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
  'Access-Control-Allow-Credentials':'true' }});
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
