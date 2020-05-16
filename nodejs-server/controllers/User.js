'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.getUserBalance = function getUserBalance (req, res, next, authorization, user_id) {
  User.getUserBalance(authorization, user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
