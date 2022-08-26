import carsService from '../services/cars.service.js';

const get = function (req, res) {
  res.send(carsService.get(req.params._id));
};

const getAll = function (req, res) {
  res.send(carsService.getAll());
};

export default {
  get,
  getAll,
};
