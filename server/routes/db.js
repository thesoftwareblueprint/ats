/**
 * Created by walter on 2/22/14.
 */
module.exports = function(req,res) {
    var mongoose = require('mongoose');
    mongoose.createConnection('localhost','ats', 27017);
    var msg = 'Successful connection';
    var sysUser = mongoose.model('SysUser',mongoose.sysUserSchema);
    sysUser.username = 'walter';
    sysUser.password = 'password';
    sysUser.firstname = 'Walter';
    sysUser.lastname = 'Ferguson';

    sysUser.create(function (err) {
        msg = ('an error occured ' + err);
    });
    res.send(msg + req.params.action);
}