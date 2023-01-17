import axios from 'axios';

export default axios.create({
  baseURL: 'https://comment-api.vercel.app',
  headers: {
    'Content-type': 'application/json',
  },
});
