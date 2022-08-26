import data from '../data.js';
import carsService from './cars.service.js';

const getAll = function (req) {
  const cars = carsService.getAll();

  const car_ids = data.Accounts_Cars
    .filter(
      (row) => row.Account_id === parseInt(req.params.Account_id),
    ).map(
      (row) => row.Car_id,
    );

  return cars.filter((car) => car_ids.includes(car._id));
};

const get = function (req) {
  return getAll(req).find((car) => car._id === parseInt(req.params._id));
};

export default {
  get,
  getAll,
};
