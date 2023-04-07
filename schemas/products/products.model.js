const products = [
  { id: "pinkyBrain", description: "Pinky Brain", price: 42.12 },
  { id: "blueJean", description: "Blue Jean", price: 32.4 },
];

const getAllProducts = () => {
  return products;
};

const getProductByPrice = (min, max) => {
  const filterProduct = products.filter(
    ({ price }) => price >= min && price <= max
  );
  return filterProduct;
};

const getProductById = (productId) => {
  const filteredProduct = products.find(({ id }) => id === productId);
  return filteredProduct;
};

module.exports = { getAllProducts, getProductByPrice, getProductById };
