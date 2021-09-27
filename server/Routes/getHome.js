const express = require('express');
const app = express();
var router = express.Router();

router.get('/home', function(req, res) {
    res.send('hello world');
  });