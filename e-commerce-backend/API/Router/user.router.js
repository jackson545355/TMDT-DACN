<<<<<<< HEAD
var express = require('express')

var router = express.Router()

const Users = require('../Controller/user.controller')

router.post('/login', Users.Login)

router.post('/signup', Users.Signup)

=======
var express = require('express')

var router = express.Router()

const Users = require('../Controller/user.controller')

router.post('/login', Users.Login)

router.post('/signup', Users.Signup)

>>>>>>> f646d727d13e795eed3c1210bdbaabb6b895da6c
module.exports = router