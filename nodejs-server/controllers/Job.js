'use strict';

var utils = require('../utils/writer.js');
var Job = require('../service/JobService');

module.exports.getResume = function getResume (req, res, next, authorization, resume_id, fields) {
  Job.getResume(authorization, resume_id, fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getResumeContacts = function getResumeContacts (req, res, next, authorization, resume_id) {
  Job.getResumeContacts(authorization, resume_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getResumes = function getResumes (req, res, next, authorization, per_page, page, cursor, fields, query, location, specialization, schedule, business_trip_readiness, relocation_readiness, gender, age_min, age_max, education_level, experience_min, experience_max, salary_min, salary_max, updated_than) {
  Job.getResumes(authorization, per_page, page, cursor, fields, query, location, specialization, schedule, business_trip_readiness, relocation_readiness, gender, age_min, age_max, education_level, experience_min, experience_max, salary_min, salary_max, updated_than)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
