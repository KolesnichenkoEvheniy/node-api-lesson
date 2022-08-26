const data = require('../data');

const getAll = function () {
  return data.Cars;
};

const get = function (_id) {
  return getAll().find((car) => car._id === _id);
};

module.exports = {
  get,
  getAll,
};
