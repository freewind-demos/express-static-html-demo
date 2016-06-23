var express = require('express');

var app = express();

// or simply: `app.use(express.static('./public'))`
app.use(express.static('./public', {
  dotfiles: 'ignore',
  etag: true,
  extensions: ['html'],
  index: ['index.html'], // or `false`
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}));

var server = app.listen(3000, function () {
  console.log('Server listens on ' + server.address().port);
});