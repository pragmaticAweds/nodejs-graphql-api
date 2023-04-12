const products = [
  { id: "pinkyBrain", description: "Pinky Brain", price: 42.12, reviews: [] },
  { id: "blueJean", description: "Blue Jean", price: 32.4, reviews: [] },
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

const addProduct = (product) => {
  const { id, price, description } = product;

  const newProduct = { id, price, description, reviews: [] };

  products.push(newProduct);

  return newProduct;
};

module.exports = {
  getAllProducts,
  getProductByPrice,
  getProductById,
  addProduct,
};
