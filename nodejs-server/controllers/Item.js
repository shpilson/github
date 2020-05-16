'use strict';

var utils = require('../utils/writer.js');
var Item = require('../service/ItemService');

module.exports.getItemInfo = function getItemInfo (req, res, next, user_id, item_id, authorization) {
  Item.getItemInfo(user_id, item_id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getItemsStats = function getItemsStats (req, res, next, body, user_id, authorization) {
  Item.getItemsStats(body, user_id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVasPackagePrice = function getVasPackagePrice (req, res, next, body, user_id, authorization) {
  Item.getVasPackagePrice(body, user_id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVasPrices = function getVasPrices (req, res, next, body, user_id, authorization) {
  Item.getVasPrices(body, user_id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putItemVas = function putItemVas (req, res, next, body, user_id, item_id, authorization) {
  Item.putItemVas(body, user_id, item_id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putItemVasPackage = function putItemVasPackage (req, res, next, body, user_id, item_id, authorization) {
  Item.putItemVasPackage(body, user_id, item_id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putItemVasPackageV2 = function putItemVasPackageV2 (req, res, next, body, user_id, item_id, authorization) {
  Item.putItemVasPackageV2(body, user_id, item_id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
