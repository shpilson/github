'use strict';

var utils = require('../utils/writer.js');
var ApplicationAccess = require('../service/ApplicationAccessService');

module.exports.getAccessTokenAuthorizationCode = function getAccessTokenAuthorizationCode (req, res, next, grant_type, client_id, client_secret, code) {
  ApplicationAccess.getAccessTokenAuthorizationCode(grant_type, client_id, client_secret, code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.refreshAccessTokenAuthorizationCode = function refreshAccessTokenAuthorizationCode (req, res, next, grant_type, client_id, client_secret, refresh_token) {
  ApplicationAccess.refreshAccessTokenAuthorizationCode(grant_type, client_id, client_secret, refresh_token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
