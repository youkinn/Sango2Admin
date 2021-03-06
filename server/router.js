var router = require('express').Router();
var four0four = require('./utils/404')();

var demo = require('./modules/demo');
var account = require('./modules/account');
var news = require('./modules/news');
var game = require('./modules/game');
var role = require('./modules/role');

router.use('/', function(req, res, next) {
  if (req.session.user) {
    console.log(req.session.cookie._expires.toString());
  }
  next();
});

// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
router.use('/auth/', function(req, res, next) {
  if (!req.session.user) {
    res.json({
      'code': 20001,
      'msg': '请先登录'
    });
    return;
  } else {
    next();
  }
});

demo(router);
account(router);
news(router);
game(router);
role(router);

// 没有匹配的路由匹配 404
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;