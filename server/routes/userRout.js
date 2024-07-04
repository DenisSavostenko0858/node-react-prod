const Router = require('express');
const router = Router();

const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/auth', authMiddleware, userController.chekUser);

module.exports = router;