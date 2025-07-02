const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const {passport} = require('./auth.js');

const PORT = process.env.PORT || 3000;

const personRoutes = require('./routes/personRoutes.js');
const menuRoutes = require('./routes/menuRoute.js');

const bodyParse = require('body-parser');
app.use(bodyParse.json());

//Middleware
const logs = (req, res, next) => {
  console.log( `${new Date().toLocaleString()}: Request made to: ${req.originalUrl} `);
  next();
};

app.use(logs);
app.use(passport.initialize());

const authMiddleware = passport.authenticate('local', {session: false});

app.get('/', authMiddleware, (req, res) => {
  res.send('Welcome to my Restaurant');
});

app.use('/person', authMiddleware, personRoutes);
app.use('/menu', menuRoutes);

app.listen(PORT, () => {
    console.log('Listening to port 3000');
});