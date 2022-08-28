export default {
  Categories: [
    {
      _id: 0,
      name: 'Expensive products',
    },
    {
      _id: 1,
      name: 'Interesting products',
    },
    {
      _id: 2,
      name: 'Boring products',
    },
  ],
  Products: [
    {
      _id: 0,
      Name: 'chevrolet chevelle malibu',
      price: 100500,
    },
    {
      _id: 1,
      Name: 'iPhone',
      price: 1000,
    },
    {
      _id: 2,
      Name: 'Test product',
      price: 50,
    },
  ],
  CategoryProducts: [
    {
      _id: 0,
      CategoryId: 2,
      ProductId: 0,
    },
    {
      _id: 1,
      CategoryId: 2,
      ProductId: 1,
    },
    {
      _id: 2,
      CategoryId: 1,
      ProductId: 2,
    },
  ],
};
