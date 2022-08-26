import express from 'express';
import cars from './cars.route.js';
import accounts from './accounts.route.js';

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

export default router;
