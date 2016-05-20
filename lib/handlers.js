'use strict';
const Router = require('./router');
const router = new Router();

router.get('/', (req, res) => {
  res.write('GET request to homepage received');
  res.end();
});

router.post('/', (req, res) => {
  res.write('POST request to homepage received');
  res.end();
});

router.put('/', (req, res) => {
  res.write('PUT request to homepage received');
  res.end();
});

router.delete('/', (req, res) => {
  res.write('DELETE request to homepage received');
  res.end();
});
