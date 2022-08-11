const { Router } = require("express");
const route = Router();
const routerProduct = require("../controller/product.controller");
route.get("/", (req, res) => {
  routerProduct.getProduct(req, res);
});

route.post("/", (req, res) => {
  routerProduct.postProduct(req, res);
});
route.delete("/:id", (req, res) => {
  routerProduct.deleteProduct(req, res);
});
module.exports = route;
