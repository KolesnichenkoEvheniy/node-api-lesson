const data = require('../data');

const getAll = function () {
  return data.Accounts;
};

const get = function (_id) {
  return getAll().find((account) => account._id === _id);
};

module.exports = {
  get,
  getAll,
};
