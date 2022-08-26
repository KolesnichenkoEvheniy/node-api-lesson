const express = require('express');
const cars = require('./cars.route');
const accounts = require('./accounts.route');

const router = express.Router();

router.use('/cars', cars);
router.use('/accounts', accounts);

router.get('/', (req, res) => res.send('Sample Node API Version1'));
router.get('/health', (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;
