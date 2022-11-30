const express = require('express');
const router = express.Router();

const usersRoutes = require('./users');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Demo server working!');
});

/* Test routes. */
router.get('/test', function (req, res, next) {
  res.send('Test route working!');
});

router.use('/users', usersRoutes);

module.exports = router;
