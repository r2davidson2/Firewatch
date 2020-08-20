const express = require('express');
const router = express.Router();
const Fires = require('../models/fires.js');

router.get('/', (req, res) => {
   Fires.find({}, (error, foundFires) => {
      res.json(foundFires);
   });
});

router.delete('/:id', (req, res) => {
   Fires.findByIdAndRemove(req.params.id, (error, deletedFire) => {
      res.json(deletedFire);
   });
});

router.put('/:id', (req, res) => {
   Fires.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedFire) => {
      res.json(updatedFire);
   });
});

router.post('/', (req, res) => {
   Fires.create(req.body, (error, createdFire) => {
      res.json(createdFire);
   });
});

module.exports = router;
