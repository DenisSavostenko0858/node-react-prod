const Router = require('express');
const router = Router();

const userRouter = require('./userRout');
const typeRouter = require('./typeRout');
const brandRouter = require('./brandRout');
const productRouter = require('./productRout');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/product', productRouter);

module.exports = router;