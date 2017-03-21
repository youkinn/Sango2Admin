/**
 * 用户角色表
 */
var mongoose = require('../db.js');
var Schema = mongoose.Schema;

var UserRoleSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, index: true }, // fk 用户id
  roleID: { type: Schema.Types.ObjectId, index: true } // fk 角色id
}, { autoIndex: false, versionKey: false });

module.exports = mongoose.model('UserRole', UserRoleSchema);