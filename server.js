const express = require('express');
const app = express();
const db = require('./db');

app.get('/', (req, res) => {
  res.send('Welcome to this Weather Application');
})

app.get('/ahmedabad', (req, res) => {
    var abd = {
        "city": "Ahmedabad",
        "minTemprature": 34,
        "maxTemprature": 42,
        "humidity": "85%",
    };
    res.send(abd);
})

app.get('/hyderabad', (req, res) => {
    var hyd = {
        "city": "Hyderabad",
        "minTemprature": 23,
        "maxTemprature": 32,
        "humidity": "24%",
    };
    res.send(hyd);
})

app.post('/mumbai', (req, res) => {
    res.send("Data stored");
})

app.listen(3000, () => {
    console.log('Listening to port 3000');
})