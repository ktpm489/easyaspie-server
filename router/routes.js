const Router = require('koa-router');
const placesController = require('../controllers/controller-places');
const linksController = require('../controllers/controller-links');

const router = new Router();

router.get('/api/v1/places/:place_id', placesController);
router.get('/api/v1/places/', linksController);
router.get('/', linksController);

module.exports = router;
