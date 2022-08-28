import data from '../data.js';

const getAll = function () {
  return data.Products;
};

const get = function (id) {
  return getAll().find((product) => product._id === parseInt(id));
};

export default {
  get,
  getAll,
};
