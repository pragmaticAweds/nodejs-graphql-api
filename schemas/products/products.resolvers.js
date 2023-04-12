const {
  getAllProducts,
  getProductByPrice,
  getProductById,
  addProduct,
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
  Mutation: {
    addNewProduct: (_, arg) => {
      return addProduct(arg);
    },
  },
};
