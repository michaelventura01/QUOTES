const routes = require('express').Router();
const { QuotesController } = require('../controllers');
const router = require('./home.routes');

router.get('/quotes',QuotesController.index);
router.get('/quotes/all', QuotesController.get);
router.get('/quotes', QuotesController.add);

module.exports = router;