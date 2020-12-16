const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('')

const app = express();
app.use(cors({ origin: true }));
//allows you to send data and format into json
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('hello world')
});

exports.api = functions.https.onRequest(app);


//http://localhost:5001/challenge-719b6/us-central1/api