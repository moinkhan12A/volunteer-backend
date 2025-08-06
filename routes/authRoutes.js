const express = require('express');
const { register, login, getAllUsers } = require('../controllers/authController');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', authMiddleware, isAdmin, getAllUsers);

module.exports = router;
