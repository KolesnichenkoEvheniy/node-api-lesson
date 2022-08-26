import accountsCarsService from '../services/accountsCars.service.js';

const get = function (req, res) {
  res.send(accountsCarsService.get(req));
};

const getAll = function (req, res) {
  res.send(accountsCarsService.getAll(req));
};

export default {
  get,
  getAll,
};
