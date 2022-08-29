import data from '../data.js';

/**
 * @returns {[{name: string, _id: number}]}
 */
const getAll = function () {
  return data.Categories;
};

/**
 * @return {{name: string, _id: number}}
 * @param {string} id
 */
const get = function (id) {
  return getAll().find((category) => category._id === parseInt(id));
};

export default {
  get,
  getAll,
};
