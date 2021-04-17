import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Nt2Gk8mNCo0I5iP0-kkxOdEu4k7G-yILTRKpvWBP2fU',
  },
});
