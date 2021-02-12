const router = require('koa-router')(),
      controller = require('../controllers/Home');

// 加前缀
router.prefix('/api');

router.get('/get_home_data', controller.getHomeData);
router.get('/get_list_data', controller.getListData);

module.exports = router;