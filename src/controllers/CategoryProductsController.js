import categoryProductsService from '../services/CategoryProductsService.js';

const get = function (req, res) {
  const categoryId = req.params.CategoryId;
  const productId = req.params.id;

  res.send(categoryProductsService.getProduct(categoryId, productId));
};

const getAll = function (req, res) {
  const categoryId = req.params.CategoryId;

  res.send(categoryProductsService.getAll(categoryId));
};

export default {
  get,
  getAll,
};
