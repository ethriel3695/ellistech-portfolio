import express from'express';
import path from'path';
import open from'open';
import webpack from 'webpack';
import config from '../webpack.config.babel.js';

/* eslint-disable no-console */

const port = process.env.PORT || 3030;
const app = express();
const compiler = webpack(config);

const githubDevPreviewHeader = {
  'Content-type': 'application/vnd.github.mercy-preview+json'
};

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// Adding CORS support
app.all('*', function (req, res, next) {
  // Set CORS headers: allow all origins, methods, and headers:
  // you may want to lock this down in a production environment
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
  res.header('Access-Control-Allow-Headers', req.header('access-control-request-headers'));
  res.header('Access-Control-Allow-Headers', githubDevPreviewHeader);

  if (req.method === 'OPTIONS') {
    // CORS Preflight
    res.send();
  } else {
    next();
  }
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
