const express = require('express');
const router = express.Router();
const UserCtrl = require('./user.controller')

router.route('/')
.get(UserCtrl.list);

router.route('/:userId')
.get(UserCtrl.find)

module.exports = router;