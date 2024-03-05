<<<<<<< HEAD
var express = require('express')

var router = express.Router()

const Products = require('../Controller/product.controller')

router.get('/', Products.getallproduct)

router.get('/newcollections', Products.getnewcollections)

router.post('/add', Products.addproduct)

router.post('/remove', Products.removeproduct)

=======
var express = require('express')

var router = express.Router()

const Products = require('../Controller/product.controller')

router.get('/', Products.getallproduct)

router.get('/newcollections', Products.getnewcollections)

router.post('/add', Products.addproduct)

router.post('/remove', Products.removeproduct)

>>>>>>> f646d727d13e795eed3c1210bdbaabb6b895da6c
module.exports = router