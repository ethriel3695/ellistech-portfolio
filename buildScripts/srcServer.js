import express from'express';
import path from'path';
import open from'open';
import webpack from 'webpack';
import config from '../webpack.config.babel';

/* eslint-disable no-console */

const port = process.env.PORT || 3002;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  // Convert this to a real database
  res.json([
    {'id': 1, 'firstName': 'Bob', 'lastName': 'Smith', 'email': 'bob@gmail.com'},
    {'id': 2, 'firstName': 'Tammy', 'lastName': 'Norton', 'email': 'tnorton@yahoo.com'},
    {'id': 3, 'firstName': 'Tina', 'lastName': 'Lee', 'email': 'tina@hotmail.com'}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port, 'firefox');
  }
});