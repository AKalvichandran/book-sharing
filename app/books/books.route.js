const express = require('express');
const router = express.Router();
const BookCtrl = require('./books.controller')

router.route('/')
.get(BookCtrl.list);

router.route('/:bookId')
.get(BookCtrl.find)

module.exports = router;