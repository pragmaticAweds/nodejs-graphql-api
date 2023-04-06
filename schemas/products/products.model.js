const products = [
  { id: "pinkyBrain", description: "Pinky Brain", price: 42.12 },
  { id: "blueJean", description: "Blue Jean", price: 32.4 },
];

const getAllProducts = () => {
  return products;
};

module.exports = { getAllProducts };
