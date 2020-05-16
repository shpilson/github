'use strict';

var utils = require('../utils/writer.js');
var Access = require('../service/AccessService');

module.exports.getAccessToken = function getAccessToken (req, res, next, grant_type, client_id, client_secret) {
  Access.getAccessToken(grant_type, client_id, client_secret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
