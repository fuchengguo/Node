var express = require('express');
var router = express.Router();

/* GET home page. */

/*register*/
router.get('/register', (req, res, next) =>{
  res.render('index', { title: 'Express' });
});

/*login*/
router.get('/login', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
