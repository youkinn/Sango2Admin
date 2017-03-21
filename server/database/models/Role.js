/**
 * 角色信息表
 */
var mongoose = require('../db.js');
var Schema = mongoose.Schema;

var RoleSchema = new Schema({
  pid: { type: Number, default: 0 }, // 父角色ID
  name: { type: String }, // 角色名字
  desc: { type: String }, // 角色描述
  createTime: { type: Date, default: Date.now() } // 创建时间
}, { versionKey: false });

// 查询的静态方法
RoleSchema.statics = {
  findListByPage: function(pageindex, pageSize, cb) { //查询所有数据
    return this
      .find({}, ['name', 'desc'])
      .limit(pageSize)
      .skip(pageindex * pageSize)
      .exec(cb); //回调
  },
  findById: function(id, cb) { //根据id查询单条数据
    return this
      .findOne({ _id: id })
      .exec(cb);
  }
};

module.exports = mongoose.model('Role', RoleSchema);