const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Hxz9XLEq0ZvTanT65rDOQ9FnHuMQxUS6uwCMT8P2yxoNyJx5n2KaJqfvhwpynVmL7gOlgVfTHf1SAlxHtVSAKgs00WEpB058Q');

const app = express();
app.use(cors({ origin: true }));
//allows you to send data and format into json
app.use(express.json());

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, 
      currency: "usd",
    });
  
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  
exports.api = functions.https.onRequest(app);


