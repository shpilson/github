'use strict';

var utils = require('../utils/writer.js');
var Autoteka = require('../service/AutotekaService');

module.exports.getActivePackage = function getActivePackage (req, res, next, authorization) {
  Autoteka.getActivePackage(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPreview = function getPreview (req, res, next, authorization, previewId) {
  Autoteka.getPreview(authorization, previewId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReport = function getReport (req, res, next, authorization, report_id) {
  Autoteka.getReport(authorization, report_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postPreviewByItemId = function postPreviewByItemId (req, res, next, body, authorization) {
  Autoteka.postPreviewByItemId(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postPreviewByRegNumber = function postPreviewByRegNumber (req, res, next, body, authorization) {
  Autoteka.postPreviewByRegNumber(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postPreviewByVin = function postPreviewByVin (req, res, next, body, authorization) {
  Autoteka.postPreviewByVin(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postReport = function postReport (req, res, next, body, authorization) {
  Autoteka.postReport(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putReport = function putReport (req, res, next, authorization, report_id) {
  Autoteka.putReport(authorization, report_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
