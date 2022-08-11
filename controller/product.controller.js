const productModel = require("../model/product.model");
const { v4: uuidv4 } = require("uuid");
const getProduct = async (req, res) => {
  const result = await productModel.getProduct();
  res.status(200).json({ result }).end();
};
const postProduct = (req, res) => {
  const data = {
    _id: uuidv4(),
    title: req.body.title,
    brand: req.body.brand,
    description: req.body.description,
    stock: req.body.stock,
  };
  const result = productModel.postProduct(data);
  res.status(200).json({ result }).end();
};
const deleteProduct = (req, res) => {
  const result = productModel.deleteProduct({ _id: req.params.id });
  res.status(200).json({ result }).end();
};
module.exports = { getProduct, postProduct, deleteProduct };
