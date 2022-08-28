import data from '../data.js';

const getAll = function () {
  return data.Categories;
};

const get = function (id) {
  return getAll().find((category) => category._id === parseInt(id));
};

export default {
  get,
  getAll,
};
