const router = require('express').Router();
const users = require('./users');

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hello, World!' });
});

router.use('/users', users);

module.exports = router;
