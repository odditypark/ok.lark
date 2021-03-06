import axios from 'axios';

const login = params => axios.post('/api/user/login', params);
const register = params => axios.post('/api/user/register', params);

export default {
  login,
  register
}
