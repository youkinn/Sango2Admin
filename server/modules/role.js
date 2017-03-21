var Role = require('../database/models/Role.js');

module.exports = function(router) {
  /**
   * 添加角色
   */
  router.post('/addRole', function(req, res) {
    var name = req.body.roleName;
    var desc = req.body.roleDesc;
    var pid = req.body.pid;
    var newRole = new Role({ name, desc, pid });

    var conditions = { name, pid };

    Role.count({ conditions }, (err, result) => {
      if (err) {
        res.json({ 'code': 90001, 'msg': err });
        return;
      }
      if (result) {
        res.json({ 'code': 10001, 'msg': '该角色已存在' });
        return;
      }
      newRole.save(function(err) {
        if (err) {
          res.json({ 'code': 90001, 'msg': err });
          return;
        }
        res.json({ 'code': 10000, 'msg': '添加角色成功' });
        return;
      });
    });
  });

  /**
   * 获取角色列表
   */
  router.post('/getRoleList', function(req, res) {
    var pageIndex = req.body.pageIndex || 0;
    var pageSize = req.body.pageSize || 10;

    Role.findListByPage(parseInt(pageIndex), parseInt(pageSize), function(err, doc) {
      if (err) {
        res.json({ 'code': 90001, 'msg': err });
        return;
      }
      res.json({ code: 10000, result: { data: doc } });
    });
  });
};