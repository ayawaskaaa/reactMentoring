import axios from 'axios';

const backendUrl = `http://localhost:4000`;

const instance = axios.create({
    baseURL: backendUrl,
    timeout: 10000,
    withCredentials: false,
});

export default instance;