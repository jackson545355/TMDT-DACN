var express = require('express')

var router = express.Router()

const Products = require('../Controller/product.controller')

router.get('/', Products.getallproduct)

router.get('/newcollections', Products.getnewcollections)

router.post('/add', Products.addproduct)

router.post('/remove', Products.removeproduct)

module.exports = router