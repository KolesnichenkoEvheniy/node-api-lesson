import data from '../data.js';

const getAll = function () {
  return data.Cars;
};

const get = function (_id) {
  return getAll().find((car) => car._id === parseInt(_id));
};

export default {
  get,
  getAll,
};
