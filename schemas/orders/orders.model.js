const orders = [
  {
    date: "2005-05-05",
    subtotal: 64.8,
    items: [
      {
        product: {
          id: "blueJean",
          description: "Old BLue Jean",
          price: 32.4,
        },
        quantity: 2,
      },
    ],
  },
];

const getAllOrders = () => {
  return orders;
};

module.exports = { getAllOrders };
