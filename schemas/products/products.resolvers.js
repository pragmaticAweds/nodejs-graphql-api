const {
  getAllProducts,
  getProductByPrice,
  getProductById,
} = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return getAllProducts();
    },

    productByPrice: (_, arg) => {
      return getProductByPrice(arg.min, arg.max);
    },

    productById: (_, arg) => {
      return getProductById(arg.id);
    },
  },
};
