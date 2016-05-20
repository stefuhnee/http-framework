'use strict';

const http = require('http');
const Router = require('router');


module.exports = function() {
  http.createServer(router.routes())
    .listen(3000, () => {
      console.log('Listening on Port 3000');
    })
};
