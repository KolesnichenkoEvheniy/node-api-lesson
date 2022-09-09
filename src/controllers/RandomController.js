const getRandom = function (req, res) {
  const length = req.query.length ?? 6;
  console.log(req.query);

  res.json({
    number: Math.random() * length,
  });
};

export default {
  getRandom,
};
