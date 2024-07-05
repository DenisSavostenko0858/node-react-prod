const Router = require('express');
const router = Router();
const productController = require('../controllers/productController');
const cheakRole = require('../middleware/cheakRoleMiddleware');

router.post('/', cheakRole('admin'),productController.create);
router.get('/', productController.getAll);
router.get('/:id', productController.getOne);

module.exports = router;