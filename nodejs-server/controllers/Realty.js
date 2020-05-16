'use strict';

var utils = require('../utils/writer.js');
var Realty = require('../service/RealtyService');

module.exports.getRealtyBookings = function getRealtyBookings (req, res, next, authorization, user_id, item_id, date_start, date_end) {
  Realty.getRealtyBookings(authorization, user_id, item_id, date_start, date_end)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postRealtyPrices = function postRealtyPrices (req, res, next, body, user_id, item_id, authorization) {
  Realty.postRealtyPrices(body, user_id, item_id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putBookingsInfo = function putBookingsInfo (req, res, next, body, user_id, item_id, authorization) {
  Realty.putBookingsInfo(body, user_id, item_id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
