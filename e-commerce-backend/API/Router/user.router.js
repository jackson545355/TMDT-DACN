var express = require('express')

var router = express.Router()

const Users = require('../Controller/user.controller')

router.post('/login', Users.Login)

router.post('/signup', Users.Signup)

module.exports = router