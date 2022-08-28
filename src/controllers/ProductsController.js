import productsService from '../services/ProductsService.js';

const get = function (req, res) {
  const product = productsService.get(req.params.id);

  if (!product) {
    throw new Error('Product not Found!');
  }

  res.send(product);
};

const getAll = function (req, res) {
  res.send(productsService.getAll());
};

export default {
  get,
  getAll,
};
