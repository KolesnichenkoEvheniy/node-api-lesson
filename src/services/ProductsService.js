import data from '../data.js';

/**
 * @return {{price: number, _id: number, Name: string}[]}
 */
const getAll = function () {
  return data.Products;
};

/**
 * @return {{price: number, _id: number, Name: string}}
 * @param {string} id
 */
const get = function (id) {
  return getAll().find((product) => product._id === parseInt(id));
};

export default {
  get,
  getAll,
};
