'use strict';

var utils = require('../utils/writer.js');
var Autoload = require('../service/AutoloadService');

module.exports.getAutoloadItemInfo = function getAutoloadItemInfo (req, res, next, user_id, ad_id, authorization) {
  Autoload.getAutoloadItemInfo(user_id, ad_id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLastReport = function getLastReport (req, res, next, user_id, authorization) {
  Autoload.getLastReport(user_id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReportById = function getReportById (req, res, next, user_id, reportId, authorization) {
  Autoload.getReportById(user_id, reportId, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReports = function getReports (req, res, next, user_id, authorization, per_page, page) {
  Autoload.getReports(user_id, authorization, per_page, page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
