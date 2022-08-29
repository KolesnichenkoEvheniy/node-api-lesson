import categoriesService from '../services/CategoriesService.js';

const get = function (req, res) {
  res.json(categoriesService.get(req.params.id));
};

const getAll = function (req, res) {
  res.json(categoriesService.getAll());
};

export default {
  get,
  getAll,
};
