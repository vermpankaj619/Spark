const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
var request = require('request');
const fetch = require('node-fetch');
// Load input validation


// Load User model
const User = require("../../models/User");

router.get('/getdata', function(req, res, next) {
   

                
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/blockchain')
    .then(response => response.json())
    .then(data => {
      res.json(data)
    })
    .catch(err =>  console.log(err))

})
module.exports = router;
