'use strict';

const http = require('http');
const Router = require('./router');

const router = new Router();


module.exports = function init() {
  http.createServer(router.route())
    .listen(3000, () => {
      console.log('Listening on Port 3000');
    })
};
