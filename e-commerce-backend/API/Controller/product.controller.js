const Products = require('../../Model/product')

const getallproduct = async (req, res) => {
  let products = await Products.find({});
  console.log("All Products");
  res.json(products);
};

const getnewcollections = async (req, res) => {
  let products = await Products.find({});
  let arr = products.slice(1).slice(-8);
  console.log("New Collections");
  res.send(arr);
};
// const getpopularinwomen = async (req, res) => {
//   let products = await Products.find({});
//   let arr = products.splice(0, 4);
//   console.log("Popular In Women");
//   res.send(arr);
// };

const addproduct = async (req, res) => {
  let products = await Products.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  }
  else { id = 1; }
  const product = new Products({
    id: id,
    name: req.body.name,
    images: req.body.images,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  await product.save();
  console.log("Saved");
  res.json({ success: true, name: req.body.name })
};

const removeproduct = async (req, res) => {
  const product = await Products.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({ success: true, name: req.body.name })
};

module.exports = {getallproduct, getnewcollections, addproduct, removeproduct};