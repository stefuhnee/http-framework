'use strict';
const Router = require('../lib/router');
const router = new Router();

router.get('/', (req, res) => {
  res.write('{"Message":"GET request to homepage received"}');
  res.end();
});

router.post('/', (req, res) => {
  res.write('{"Message":"POST request to homepage received"}');
  res.end();
});

router.put('/', (req, res) => {
  res.write('{"Message":"PUT request to homepage received"}');
  res.end();
});

router.delete('/', (req, res) => {
  res.write('{"Message":"DELETE request to homepage received"}');
  res.end();
});

router.patch('/', (req, res) => {
  res.write('{"Message":"PATCH request to homepage received"}');
  res.end();
});

module.exports = router;
