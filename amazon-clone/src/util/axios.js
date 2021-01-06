import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-719b6.cloudfunctions.net/api'
        //'http://localhost:5001/challenge-719b6/us-central1/api' //API (cloud function) test url
});

export default instance;