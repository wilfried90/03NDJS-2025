const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const userController = require('../controllers/userController');

router.get('/me', authMiddleware, userController.getMe);
router.get('/users', authMiddleware, userController.getAllUsers);
router.delete('/users/:id', authMiddleware, userController.deleteUser);

module.exports = router;
