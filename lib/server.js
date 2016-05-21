'use strict';

const http = require('http');
const Router = require('./router');

const router = new Router();

let server = module.exports = {};


server.init = function() {
  http.createServer(router.route())
    .listen(3000, () => {
      console.log('Listening on Port 3000');
    })
};
