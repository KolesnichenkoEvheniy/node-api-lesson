import productsService from '../services/ProductsService.js';

const get = function (req, res) {
  const product = productsService.get(req.params.id);

  if (!product) {
    throw new Error('Product not Found!');
  }

  res.json(product);
};

const getAll = function (req, res) {
  res.json(productsService.getAll());
};

export default {
  get,
  getAll,
};
