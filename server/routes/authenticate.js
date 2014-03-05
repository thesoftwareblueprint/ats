/**
 * Created by walter on 3/3/14.
 */
module.exports = function(req,res) {
    var secret =  'this is the secret for ats 1234';
    var jwt = require('jsonwebtoken');
    console.log('authenticating');
    console.log(req.body.username);
    console.log(req.body.password);

    //TODO validate req.body.username and req.body.password
    //if it is invalid, return 401

    if (!(req.body.username === 'walter.ferguson' && req.body.password === 'password')) {
        res.send(401, 'Wrong username or password');
        return;
    }

    var profile = {
        firstname: 'Walter',
        lastname: 'Ferguson',
        email: 'wferguson@gmail.com',
        id: 1234
        };

    var token = jwt.sign(profile, secret, {expiresInMinutes: 60*5});

    res.json({token: token});
};