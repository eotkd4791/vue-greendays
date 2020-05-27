const express = require('express');
const { User } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const router = express.Router();

// GET /main
router.get('/', function(req, res, next) {
  res.render('main');
});

module.exports = router;
