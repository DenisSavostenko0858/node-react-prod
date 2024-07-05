const Router = require('express');
const router = Router();
const brandController = require('../controllers/brandController');
const cheakRole = require('../middleware/cheakRoleMiddleware');

router.post('/', cheakRole('admin'), brandController.create);
router.get('/', brandController.getAll);

module.exports = router;