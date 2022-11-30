const express = require('express');
const router = express.Router();

const users = ['Jerry', 'Patience', 'Tersoo', 'Washu'];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(users);
});

module.exports = router;
