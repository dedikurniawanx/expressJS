const express = require("express");
const app = express();
const routerProduct = require("./router/product");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/product", routerProduct);

app.listen(5000, () => {
  console.log("Succes");
});
