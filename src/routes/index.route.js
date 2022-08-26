import express from 'express';
import cars from './cars.route.js';
import accounts from './accounts.route.js';

const router = express.Router();

router.use('/cars', cars);
router.use('/accounts', accounts);

router.get('/', (req, res) => res.send('Sample Node API Version'));

export default router;
