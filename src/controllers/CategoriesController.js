import categoriesService from '../services/CategoriesService.js';

const get = function (req, res) {
  res.send(categoriesService.get(req.params.id));
};

const getAll = function (req, res) {
  res.send(categoriesService.getAll());
};

export default {
  get,
  getAll,
};
