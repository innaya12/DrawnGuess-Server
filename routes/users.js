var express = require('express');
var router = express.Router();

const users = {
  existingPlayer: false,
  currentPlayer: '',
  player1: {name: '', score: 0},
  player2: {name: '', score: 0},
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.send(users);
});

module.exports = router;