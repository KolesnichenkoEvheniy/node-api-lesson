import categoryProductsService from '../services/CategoryProductsService.js';

const get = function (req, res) {
  const categoryId = req.params.CategoryId;
  const productId = req.params.id;

  res.json(categoryProductsService.getProduct(categoryId, productId));
};

const getAll = function (req, res) {
  const categoryId = req.params.CategoryId;

  res.json(categoryProductsService.getAll(categoryId));
};

export default {
  get,
  getAll,
};
