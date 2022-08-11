const { connect } = require("../database/conectdb");
const getProduct = async () => {
  const db = await connect();
  const collection = db.collection("product");
  const findResult = await collection.find({}).toArray();
  return findResult;
};
const postProduct = async (data) => {
  const db = await connect();
  const collection = db.collection("product");
  const insertResult = await collection.insertOne(data);
  return insertResult;
};

const deleteProduct = async (data) => {
  const db = await connect();
  const collection = db.collection("product");
  const deleteResult = await collection.deleteOne(data);

  return deleteResult;
};
module.exports = { getProduct, postProduct, deleteProduct };
