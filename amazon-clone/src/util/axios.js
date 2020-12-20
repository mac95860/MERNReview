import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-719b6/us-central1/api' //API (cloud function)
});

export default instance;