import data from '../data.js';

const getAll = function () {
  return data.Accounts;
};

const get = function (_id) {
  return getAll().find((account) => account._id === parseInt(_id));
};

export default {
  get,
  getAll,
};
