import catalog from '../catalog.js';

const add = function (req, res) {
    const name = req.body.name ?? 'default name';
    const price = req.body.price ?? 0;

    const added = catalog.add(name, price)

    res.status(201).json(added);
};

const getAll = function (req, res) {
    res.json(catalog.getAll());
};

export default {
    add,
    getAll,
};
