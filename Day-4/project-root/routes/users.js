const express = require('express');
const { getCurrentUser, getAllUsers, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/me', authMiddleware, getCurrentUser);
router.get('/', authMiddleware, getAllUsers);
router.delete('/:id', authMiddleware, deleteUser);

module.exports = router;
