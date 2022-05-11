const express = require('express');
const mongoose = require('mongoose');

const apiRoutes = require('./routes/routes');

mongoose
  .connect(
    'mongodb://celenao:6KzXSEqmYbeoxrOB@cluster0-shard-00-00.cbxkz.mongodb.net:27017,' +
      'cluster0-shard-00-01.cbxkz.mongodb.net:27017,cluster0-shard-00-02.cbxkz.mongodb.net:27017/' +
      'education?ssl=true&replicaSet=atlas-tcaju3-shard-0&authSource=admin&retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Connected'))
  .catch((error) => console.log(error));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use('/api', apiRoutes);

module.exports = app;
