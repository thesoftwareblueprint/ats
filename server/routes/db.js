/**
 * Created by walter on 2/22/14.
 */
module.exports = function(req,res) {
    var mongoose = require('mongoose');
    mongoose.connect('localhost','ats');

    var sysUser = mongoose.model('SysUser',mongoose.sysUserSchema);
    sysUser.username = 'walter';
    sysUser.password = 'password';
    sysUser.firstname = 'Walter';
    sysUser.lastname = 'Ferguson';

    sysUser.create(function (err) {
        console.log('an error occured');
    })
    res.send('Got something from the server.'+ req.params.action);
}