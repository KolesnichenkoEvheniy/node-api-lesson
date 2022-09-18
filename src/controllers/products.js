const productsList = function (req, res) {
    res.json({
        test: 'test'
    })
};

const addNew = function (req, res) {
    res.json({
        test: 'add new'
    })
};

export default {
    productsList,
    addNew
}