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

app.post('/payments/create', async (req, res) =>{
    const total = req.query.total;

    console.log('Payment request recieved', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //in sub units of currency
        currency: 'usd'
    })
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);


//http://localhost:5001/challenge-719b6/us-central1/api