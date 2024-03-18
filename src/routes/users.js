const router = require('express').Router();

router.get('/', (req, res) => {
  const users = [{ name: 'John Doe' }];
  res.status(200).json(users);
});

router.post('/', (req, res) => {
  res.status(201).json(req.body);
});

module.exports = router;
