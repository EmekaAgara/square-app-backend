const { ObjectId } = require('mongodb');
const getDB = require('./db');

const getAllRecommendedproductsProducts = async () => {
  return await getDB().recommendedproducts.find().toArray();
};

const getRecommendedProduct = async (id) => {
  return await getDB().recommendedproducts.findOne({ _id: new ObjectId(id) });
};

module.exports = {
  getAllRecommendedproductsProducts,
  getRecommendedProduct,
};