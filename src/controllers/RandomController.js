import categoriesService from '../services/CategoriesService.js';

const getRandom = function (req, res) {
  const length = 6
  res.json({
    'number': Math.random() * length
  });
};

export default {
  getRandom,
};
