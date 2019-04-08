const router = require('express').Router();

const Items = require('../items/items-model.js');

router.get('/', (req, res) => {
  Items.find()
    .then(items => {
      res.json({ items });
    })
    .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
  Items.findById(req.params.id)
    .then(item => {
      res.json({ items });
    })
    .catch(err => res.send(err));
});

module.exports = router;