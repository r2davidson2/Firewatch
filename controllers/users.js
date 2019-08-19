const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

router.post('/', (req, res)=>{
   User.findOne({ username: req.body.username }, (err, foundUser)=>{
      if(foundUser === null){
         req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
         User.create(req.body, (err, createdUser)=>{
            res.status(201).json({
               status: 201,
               message: 'user created'
            })
         });
      } else {
         res.json("Username already exists!"); 
      }
   })
});

module.exports = router;
