const Router = require('express');
const router = Router();
const TypeController = require('../controllers/typeController');
const cheakRole = require('../middleware/cheakRoleMiddleware');

router.post('/', cheakRole('admin'), TypeController.create);
router.get('/',TypeController.getAll);

module.exports = router;