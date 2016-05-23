'use strict';

const http = require('http');
const router = require('./routes');

http.createServer(router.route())
    .listen(3000, () => {
      console.log('Listening on Port 3000');
    });
