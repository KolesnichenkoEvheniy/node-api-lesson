import express from 'express';
import accountsController from '../controllers/accounts.controller.js';
import accountsCarsRoute from './accountsCars.route.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(accountsController.getAll);

router.route('/:_id').get(accountsController.get);

router.use('/:Account_id', accountsCarsRoute);

export default router;
