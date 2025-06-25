const express = require('express');
const app = express();
const db = require('./db');
const PORT = process.env.PORT || 3000;

const personRoutes = require('./routes/personRoutes.js');
const menuRoutes = require('./routes/menuRoute.js');

const bodyParse = require('body-parser');
app.use(bodyParse.json());

app.get('/', (req, res) => {
  res.send('Welcome to my Restaurant');
});

app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

app.listen(PORT, () => {
    console.log('Listening to port 3000');
});