'use strict';
var models = require('../models');
var path = require('path');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

module.exports = function(app) {

    app.post('/api/authenticate', function(req, res) {

        models.user.findOne({
            where: {
                userId: req.body.userId
            }
        }).then(function(user) {
            if (user) {
                var validPwd = bcrypt.compare(req.body.password, user.password);
                if(validPwd) {
                    var jwt_token = jwt.sign({
                        password: user.password,
                        userId: user.id
                    }, process.env.JWT_SECRET, {
                        expiresIn: '1h'
                    });
                    res.json({
                        success: true,
                        message: 'Successfully Logged In',
                        token: jwt_token
                    });
                } else {
                    res.json({
                        success: false,
                        message: 'Invalid Password'
                    });
                }
            } else {
                res.json({
                    success: false,
                    message: 'Invalid User Id'
                });   
            }
        });
    });

};