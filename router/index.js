const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/authenticated')
const controller = require('../controller/controller')

router.post('/login', controller.login)
router.get('/profile', authenticate, controller.profile)

module.exports = router