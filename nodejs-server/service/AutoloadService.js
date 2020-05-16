'use strict';


/**
 * Получение информации о выгрузке объявления
 * Возвращает данные отчета о выгрузке объявления на сайт **avito.ru** 
 *
 * user_id Long Номер пользователя в Личном кабинете Авито
 * ad_id String Идентификатор объявления из XML
 * authorization String Токен для авторизации
 * returns ItemInfoAutoload
 **/
exports.getAutoloadItemInfo = function(user_id,ad_id,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "processing_time" : "2000-01-23T04:56:07.000+00:00",
  "fee_info" : {
    "amount" : 5.962134,
    "package_id" : 1.4658129805029452,
    "type" : "single"
  },
  "warnings" : [ {
    "code" : 6.027456183070403,
    "description" : "description",
    "title" : "title",
    "manual" : "manual"
  }, {
    "code" : 6.027456183070403,
    "description" : "description",
    "title" : "title",
    "manual" : "manual"
  } ],
  "alarm" : [ null, null ],
  "applied_vas" : [ "vip", "vip" ],
  "url" : "url",
  "errors" : [ null, null ],
  "event_time" : "2000-01-23T04:56:07.000+00:00",
  "avito_id" : 0.8008281904610115,
  "status" : "success",
  "status_detail" : "success_added"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Получение данных последнего актуального отчета
 * Возвращает данные отчета о последнем завершенном цикле автозагрузки 
 *
 * user_id Long Номер пользователя в Личном кабинете Авито
 * authorization String Токен для авторизации
 * returns inline_response_200_4
 **/
exports.getLastReport = function(user_id,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "meta" : {
    "per_page" : 1.4894159098541704,
    "pages" : 7.457744773683766,
    "page" : 6.84685269835264
  },
  "report" : {
    "ads" : [ {
      "ad_id" : "ad_id",
      "avito_date_end" : "2000-01-23T04:56:07.000+00:00",
      "statuses" : {
        "avito" : {
          "help" : "help",
          "value" : "value"
        },
        "general" : {
          "help" : "help",
          "value" : "value"
        },
        "processing" : {
          "help" : "help",
          "value" : "value"
        }
      },
      "messages" : {
        "help_url" : "help_url",
        "code" : 0,
        "description" : "description",
        "type" : "type",
        "element_name" : "element_name"
      },
      "url" : "url",
      "avito_id" : "avito_id"
    }, {
      "ad_id" : "ad_id",
      "avito_date_end" : "2000-01-23T04:56:07.000+00:00",
      "statuses" : {
        "avito" : {
          "help" : "help",
          "value" : "value"
        },
        "general" : {
          "help" : "help",
          "value" : "value"
        },
        "processing" : {
          "help" : "help",
          "value" : "value"
        }
      },
      "messages" : {
        "help_url" : "help_url",
        "code" : 0,
        "description" : "description",
        "type" : "type",
        "element_name" : "element_name"
      },
      "url" : "url",
      "avito_id" : "avito_id"
    } ],
    "finished_at" : "2000-01-23T04:56:07.000+00:00",
    "fee_packages" : [ {
      "is_active" : true,
      "count" : 6,
      "description" : "description",
      "fee_package_id" : "fee_package_id",
      "used" : 5,
      "count_left" : 1,
      "finish_time" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "is_active" : true,
      "count" : 6,
      "description" : "description",
      "fee_package_id" : "fee_package_id",
      "used" : 5,
      "count_left" : 1,
      "finish_time" : "2000-01-23T04:56:07.000+00:00"
    } ],
    "generated_at" : "2000-01-23T04:56:07.000+00:00",
    "started_at" : "2000-01-23T04:56:07.000+00:00",
    "vas" : [ {
      "name" : "name",
      "active" : 7,
      "error" : 2,
      "type" : "service",
      "activated" : 5
    }, {
      "name" : "name",
      "active" : 7,
      "error" : 2,
      "type" : "service",
      "activated" : 5
    } ],
    "customer_name" : "customer_name",
    "version" : "version",
    "status" : "status"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Получение данных отчета по ID
 * Возвращает данные одного отчета об автозагрузке по ID отчета 
 *
 * user_id Long Номер пользователя в Личном кабинете Авито
 * reportId Integer Идентификатор отчета
 * authorization String Токен для авторизации
 * returns inline_response_200_4
 **/
exports.getReportById = function(user_id,reportId,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "meta" : {
    "per_page" : 1.4894159098541704,
    "pages" : 7.457744773683766,
    "page" : 6.84685269835264
  },
  "report" : {
    "ads" : [ {
      "ad_id" : "ad_id",
      "avito_date_end" : "2000-01-23T04:56:07.000+00:00",
      "statuses" : {
        "avito" : {
          "help" : "help",
          "value" : "value"
        },
        "general" : {
          "help" : "help",
          "value" : "value"
        },
        "processing" : {
          "help" : "help",
          "value" : "value"
        }
      },
      "messages" : {
        "help_url" : "help_url",
        "code" : 0,
        "description" : "description",
        "type" : "type",
        "element_name" : "element_name"
      },
      "url" : "url",
      "avito_id" : "avito_id"
    }, {
      "ad_id" : "ad_id",
      "avito_date_end" : "2000-01-23T04:56:07.000+00:00",
      "statuses" : {
        "avito" : {
          "help" : "help",
          "value" : "value"
        },
        "general" : {
          "help" : "help",
          "value" : "value"
        },
        "processing" : {
          "help" : "help",
          "value" : "value"
        }
      },
      "messages" : {
        "help_url" : "help_url",
        "code" : 0,
        "description" : "description",
        "type" : "type",
        "element_name" : "element_name"
      },
      "url" : "url",
      "avito_id" : "avito_id"
    } ],
    "finished_at" : "2000-01-23T04:56:07.000+00:00",
    "fee_packages" : [ {
      "is_active" : true,
      "count" : 6,
      "description" : "description",
      "fee_package_id" : "fee_package_id",
      "used" : 5,
      "count_left" : 1,
      "finish_time" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "is_active" : true,
      "count" : 6,
      "description" : "description",
      "fee_package_id" : "fee_package_id",
      "used" : 5,
      "count_left" : 1,
      "finish_time" : "2000-01-23T04:56:07.000+00:00"
    } ],
    "generated_at" : "2000-01-23T04:56:07.000+00:00",
    "started_at" : "2000-01-23T04:56:07.000+00:00",
    "vas" : [ {
      "name" : "name",
      "active" : 7,
      "error" : 2,
      "type" : "service",
      "activated" : 5
    }, {
      "name" : "name",
      "active" : 7,
      "error" : 2,
      "type" : "service",
      "activated" : 5
    } ],
    "customer_name" : "customer_name",
    "version" : "version",
    "status" : "status"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Список отчетов об автозагрузке
 * Отчеты отсортированы в порядке убывания даты загрузки, т.е. самый свежий отчет будет в самом начале списка 
 *
 * user_id Long Номер пользователя в Личном кабинете Авито
 * authorization String Токен для авторизации
 * per_page BigDecimal Количество ресурсов на страницу (optional)
 * page BigDecimal Номер страницы (optional)
 * returns inline_response_200_3
 **/
exports.getReports = function(user_id,authorization,per_page,page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "reports" : [ {
    "export_success" : true,
    "stat" : {
      "stopped" : 7,
      "fees" : 3,
      "error_fee" : 5,
      "vas" : 6,
      "published" : 9,
      "duplicate" : 1,
      "error" : 5,
      "unknown" : 2,
      "total" : 2,
      "problem" : 4,
      "publish_later" : 1,
      "success" : 1,
      "problem_obsolete" : 7
    },
    "finished_at" : "2000-01-23T04:56:07.000+00:00",
    "import_success" : true,
    "started_at" : "2000-01-23T04:56:07.000+00:00",
    "report_status" : "report_status",
    "id" : 0,
    "status" : "status"
  }, {
    "export_success" : true,
    "stat" : {
      "stopped" : 7,
      "fees" : 3,
      "error_fee" : 5,
      "vas" : 6,
      "published" : 9,
      "duplicate" : 1,
      "error" : 5,
      "unknown" : 2,
      "total" : 2,
      "problem" : 4,
      "publish_later" : 1,
      "success" : 1,
      "problem_obsolete" : 7
    },
    "finished_at" : "2000-01-23T04:56:07.000+00:00",
    "import_success" : true,
    "started_at" : "2000-01-23T04:56:07.000+00:00",
    "report_status" : "report_status",
    "id" : 0,
    "status" : "status"
  } ],
  "meta" : {
    "per_page" : 1.4894159098541704,
    "pages" : 7.457744773683766,
    "page" : 6.84685269835264
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

