const express = require('express');
const userRoutes = require('./app/users/user.route');
const bookRoutes = require('./app/books/books.route');

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount book routes at /books
router.use('/books',bookRoutes)

module.exports = router;