import accountsService from '../services/accounts.service.js';

const get = function (req, res) {
  res.send(accountsService.get(req.params._id));
};

const getAll = function (req, res) {
  res.send(accountsService.getAll());
};

export default {
  get,
  getAll,
};
