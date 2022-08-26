export default {
  Accounts: [
    {
      _id: '0',
      name: {
        first: 'Deidre',
        last: 'Hayes',
      },
      email: 'deidre.hayes@undefined.me',
      phone: '+1 (839) 577-3100',
      address: '507 Church Avenue, Heil, Wyoming, 1754',
    },
    {
      _id: '1',
      name: {
        first: 'Maldonado',
        last: 'Sellers',
      },
      email: 'maldonado.sellers@undefined.biz',
      phone: '+1 (834) 573-2841',
      address: '286 Hewes Street, Abiquiu, Maine, 2447',
    },
    {
      _id: '2',
      name: {
        first: 'Elvia',
        last: 'Aguilar',
      },
      email: 'elvia.aguilar@undefined.io',
      phone: '+1 (826) 486-2932',
      address: '457 Buffalo Avenue, Caberfae, Connecticut, 2648',
    },
  ],
  Cars: [
    {
      _id: 0,
      Name: 'chevrolet chevelle malibu',
      Miles_per_Gallon: 118,
    },
    {
      _id: 1,
      Name: 'buick skylark 320',
      Miles_per_Gallon: 15,
    },
    {
      _id: 2,
      Name: 'plymouth satellite111',
      Miles_per_Gallon: 181,
    },
  ],
  Accounts_Cars: [
    {
      _id: 0,
      Account_id: 0,
      Car_id: 0,
    },
    {
      _id: 1,
      Account_id: 0,
      Car_id: 1,
    },
    {
      _id: 2,
      Account_id: 1,
      Car_id: 2,
    },
  ],
};
