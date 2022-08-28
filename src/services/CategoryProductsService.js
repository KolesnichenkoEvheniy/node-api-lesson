import data from '../data.js';
import productsService from './ProductsService.js';

const getAll = function (categoryId) {
  const products = productsService.getAll();

  const productIds = data.CategoryProducts
    .filter((row) => row.CategoryId === parseInt(categoryId))
    .map((row) => row.ProductId);

  return products.filter((product) => productIds.includes(product._id));
};

const getProduct = function (categoryId, productId) {
  return getAll(categoryId).find((product) => product._id === parseInt(productId));
};

export default {
  getProduct,
  getAll,
};
