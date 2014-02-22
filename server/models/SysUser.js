/**
 * Created by walter on 2/21/14.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sysUserSchema = new Schema({
    username: String,
    password: String,
    lastLogin: Date,
    firstname: String,
    lastname: String
});

module.exports = mongoose.model('SysUser',sysUserSchema);