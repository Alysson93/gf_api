const router = require('express').Router();

router.get('/', (req, res) => {
  const users = [{ name: 'John Doe' }];
  res.status(200).json(users);
});

module.exports = router;
