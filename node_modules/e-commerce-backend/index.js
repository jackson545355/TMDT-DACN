const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());
// Database Connection With MongoDB
mongoose.connect("mongodb+srv://ecommerceproject232:4VnNcNKtLW4brHII@cluster0.uui8ogu.mongodb.net/e-commerce");
// paste your mongoDB Connection string above with password
// password should not contain '@' special character

const ProductAPI = require('./API/Router/product.router')
const UserAPI = require('./API/Router/user.router')
//const CartAPI = require('./API/Router/cart.router')

app.use('/api/Product', ProductAPI)
app.use('/api/User', UserAPI)
//app.use('/api/Cart', CartAPI)
//-------------UPLOAD FILE PICTURE----------------
//Image Storage Engine 
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
      // console.log(file);
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
  const upload = multer({storage: storage})
  app.post("/upload", upload.array('product[]',5), (req, res) => {
    uploadimages=[]
    console.log(req)
    for (let i = 0; i < req.files.length; i++) {
      obj={}
      obj = {
        success: 1,
        image_url: `http://localhost:4000/images/${req.files[i].filename}`
      }
      uploadimages[i] = obj
    }
      res.json(uploadimages)
  })
app.use('/images', express.static('upload/images'));
//-------------UPLOAD FILE PICTURE-------------

//-------------ADD CART-------------
// MiddleWare to fetch user from database
const fetchuser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, "secret_ecom");
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ errors: "Please authenticate using a valid token" });
  }
};

//Create an endpoint for saving the product in cart
app.post('/addtocart', fetchuser, async (req, res) => {
	console.log("Add Cart");
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData});
    res.send("Added")
  })

  //Create an endpoint for saving the product in cart
app.post('/removefromcart', fetchuser, async (req, res) => {
	console.log("Remove Cart");
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]!=0)
    {
      userData.cartData[req.body.itemId] -= 1;
    }
    await Users.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData});
    res.send("Removed");
  })

  //Create an endpoint for saving the product in cart
app.post('/getcart', fetchuser, async (req, res) => {
  console.log("Get Cart");
  let userData = await Users.findOne({_id:req.user.id});
  res.json(userData.cartData);

  })

//-------------ADD CART-------------
app.get("/", (req, res) => {
  res.send("Root");
});

app.listen(port, (error) => {
  if (!error) console.log("Server Running on port " + port);
  else console.log("Error : ", error);
});
