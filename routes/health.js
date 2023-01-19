var express = require('express');
var router = express.Router();

router.get('/',  function(req, res, next) {
    const data = {
        uptime: process.uptime(),
        message: 'Ok',
        date: new Date()
    }
  res.status(200).send(data);
});
  
module.exports = router;
