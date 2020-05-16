'use strict';


/**
 * Метод для запроса остатка отчётов в текущем пакете пользователя 
 * Возвращает остаток отчётов в текущем пакете пользователя 
 *
 * authorization String Токен для авторизации
 * returns GetActivePackageResponseBodyAutoteka
 **/
exports.getActivePackage = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "package" : {
      "reportsCnt" : 5000,
      "expireTime" : "2019-08-31 23:59:59",
      "reportsCntRemain" : 1754,
      "createdTime" : "2018-10-23 12:37:09.264301"
    }
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
 * Запрос на получение превью по ID 
 * Возвращает текущий статус сбора информации превью, и краткую инфо по запрашиваемому `VIN` 
 *
 * authorization String Токен для авторизации
 * previewId Integer Идентификатор превью
 * returns GetPreviewResponseBodyAutoteka
 **/
exports.getPreview = function(authorization,previewId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "preview" : {
      "regNumber" : "X777XX777",
      "data" : {
        "year" : 2015,
        "model" : "X5",
        "brand" : "BMW"
      },
      "vin" : "XUUNF487JA0007223",
      "previewId" : 1,
      "status" : "processing"
    }
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
 * Метод для получения отчета по ID 
 * Получение подробного отчета по его идентификатору, полученному из [запроса на создание отчета](#operation/postReport) 
 *
 * authorization String Токен для авторизации
 * report_id Integer Идентификатор отчета.
 * returns GetReportResponseBodyAutoteka
 **/
exports.getReport = function(authorization,report_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "report" : {
      "data" : {
        "crashesHistory" : [ {
          "date" : 1421039400,
          "additional" : [ "additional", "additional" ],
          "damageMap" : [ "damageMap", "damageMap" ],
          "region" : "Нижегородская область",
          "type" : "Столкновение"
        }, {
          "date" : 1421039400,
          "additional" : [ "additional", "additional" ],
          "damageMap" : [ "damageMap", "damageMap" ],
          "region" : "Нижегородская область",
          "type" : "Столкновение"
        } ],
        "other" : [ {
          "text" : "Оригинальный ПТС (Не обнаружены сведения о выдаче дубликата ПТС)",
          "type" : "originalPTS",
          "status" : "ok"
        }, {
          "text" : "Оригинальный ПТС (Не обнаружены сведения о выдаче дубликата ПТС)",
          "type" : "originalPTS",
          "status" : "ok"
        } ],
        "avitoItems" : [ {
          "date" : "05.12.2017",
          "images" : [ {
            "previewUrl" : "https://10.img.avito.st/640x480/4030786210.jpg",
            "originalUrl" : "https://10.img.avito.st/1280x960/4030786210.jpg",
            "thumbnailUrl" : "https://10.img.avito.st/140x105/4030786210.jpg"
          }, {
            "previewUrl" : "https://10.img.avito.st/640x480/4030786210.jpg",
            "originalUrl" : "https://10.img.avito.st/1280x960/4030786210.jpg",
            "thumbnailUrl" : "https://10.img.avito.st/140x105/4030786210.jpg"
          } ],
          "price" : 440000,
          "description" : "Продаю авто в отличном состоянии!<br>Все интересующие вопросы по тел.",
          "title" : "Ford Focus, 2011",
          "mileage" : 100000
        }, {
          "date" : "05.12.2017",
          "images" : [ {
            "previewUrl" : "https://10.img.avito.st/640x480/4030786210.jpg",
            "originalUrl" : "https://10.img.avito.st/1280x960/4030786210.jpg",
            "thumbnailUrl" : "https://10.img.avito.st/140x105/4030786210.jpg"
          }, {
            "previewUrl" : "https://10.img.avito.st/640x480/4030786210.jpg",
            "originalUrl" : "https://10.img.avito.st/1280x960/4030786210.jpg",
            "thumbnailUrl" : "https://10.img.avito.st/140x105/4030786210.jpg"
          } ],
          "price" : 440000,
          "description" : "Продаю авто в отличном состоянии!<br>Все интересующие вопросы по тел.",
          "title" : "Ford Focus, 2011",
          "mileage" : 100000
        } ],
        "insurancePolicies" : {
          "recaps" : [ null, null ],
          "events" : [ {
            "policyIsRestrict" : true,
            "endDate" : 1621089000,
            "companyName" : "ИНГОССТРАХ",
            "startDate" : 1521089000,
            "createDate" : 1521089000
          }, {
            "policyIsRestrict" : true,
            "endDate" : 1621089000,
            "companyName" : "ИНГОССТРАХ",
            "startDate" : 1521089000,
            "createDate" : 1521089000
          } ]
        },
        "eventsOthersHistory" : [ {
          "date" : 1370030400,
          "description" : "Расчет стоимости ремонта: 65 541 RUR <br/> НАДБАВКА ВРЕМЕНИ ОСНОВНЫЕ ОПЕРАЦИИ: <br/>ФАРЫ - ОТРЕГУЛИРОВАТЬ: <br/>БАМПЕР З - ЗАМ  (СНЯТ): <br/>КРЫЛО П ПР1 747 346: Замена<br/>",
          "source" : "Audatex",
          "event" : "Расчет стоимости ремонта",
          "type" : "repair",
          "mileage" : 105125
        }, {
          "date" : 1370030400,
          "description" : "Расчет стоимости ремонта: 65 541 RUR <br/> НАДБАВКА ВРЕМЕНИ ОСНОВНЫЕ ОПЕРАЦИИ: <br/>ФАРЫ - ОТРЕГУЛИРОВАТЬ: <br/>БАМПЕР З - ЗАМ  (СНЯТ): <br/>КРЫЛО П ПР1 747 346: Замена<br/>",
          "source" : "Audatex",
          "event" : "Расчет стоимости ремонта",
          "type" : "repair",
          "mileage" : 105125
        } ],
        "equipment" : {
          "volume" : {
            "description" : "3.0 л",
            "title" : "Объем двигателя",
            "value" : 2996
          },
          "transmission" : {
            "description" : "Механическая",
            "title" : "Трансмиссия",
            "value" : 1
          },
          "color" : {
            "description" : "Синий",
            "title" : "Цвет",
            "value" : "Синий"
          },
          "horsepower" : {
            "description" : "265 л.с.",
            "title" : "Мощность",
            "value" : 265
          },
          "year" : {
            "title" : "Год выпуска",
            "value" : 2008
          },
          "equipment" : {
            "title" : "Комплектация",
            "value" : "Luxure"
          },
          "model" : {
            "title" : "Модель",
            "value" : "Serie 1"
          },
          "body" : {
            "description" : "Хэтчбек",
            "title" : "Кузов",
            "value" : 7
          },
          "drive" : {
            "description" : "Задний",
            "title" : "Привод",
            "value" : 2
          },
          "brand" : {
            "title" : "Бренд",
            "value" : "BMW"
          },
          "modification" : {
            "title" : "Модификация",
            "value" : "Sport"
          },
          "vehicle" : {
            "description" : "Легковой",
            "title" : "Тип ТС",
            "value" : 1
          }
        },
        "restrictions" : {
          "pledge" : {
            "pledgeAdditionalData" : [ {
              "data" : [ {
                "dateTo" : 1521089000
              }, {
                "dateTo" : 1521089000
              } ],
              "source" : "nbki",
              "updatedAt" : 1520889000
            }, {
              "data" : [ {
                "dateTo" : 1521089000
              }, {
                "dateTo" : 1521089000
              } ],
              "source" : "nbki",
              "updatedAt" : 1520889000
            } ],
            "text" : "Не обнаружены сведения о нахождении в залоге",
            "status" : "ok"
          },
          "registration" : {
            "additionalInfo" : [ {
              "data" : "data",
              "source" : "source"
            }, {
              "data" : "data",
              "source" : "source"
            } ],
            "text" : "Не обнаружены ограничения на регистрационные действия",
            "status" : "ok"
          },
          "stealing" : {
            "additionalInfo" : [ null, null ],
            "text" : "Не обнаружены сведения о нахождении в розыске",
            "status" : "ok"
          }
        },
        "serviceInfo" : {
          "reportCompleteStatus" : {
            "unavailableSources" : [ {
              "dataType" : "ownersHistory",
              "source" : "ownersHistory"
            }, {
              "dataType" : "ownersHistory",
              "source" : "ownersHistory"
            } ],
            "status" : "incomplete"
          }
        },
        "ownersHistory" : [ {
          "owner" : "Владелец 1",
          "period" : "Октябрь 2011 - Июнь 2013",
          "region" : "г. Москва",
          "title" : "Юридическое лицо",
          "type" : 2
        }, {
          "owner" : "Владелец 1",
          "period" : "Октябрь 2011 - Июнь 2013",
          "region" : "г. Москва",
          "title" : "Юридическое лицо",
          "type" : 2
        } ],
        "head" : {
          "createdAt" : 1520889000,
          "year" : 2015,
          "model" : "x5",
          "vin" : "XUUNF487JA0007223",
          "brand" : "BMW"
        },
        "priceStat" : {
          "recaps" : [ {
            "description" : "description",
            "label" : "Обнаружено 5 неоплаченных штрафов",
            "type" : "fines",
            "status" : "caution"
          }, {
            "description" : "description",
            "label" : "Обнаружено 5 неоплаченных штрафов",
            "type" : "fines",
            "status" : "caution"
          } ],
          "report" : {
            "averageMileage" : 100000,
            "price" : {
              "average" : 300000,
              "highest" : 490000,
              "lowest" : 249000
            },
            "advertsCount" : 15,
            "averageOwnersCount" : 2.3
          },
          "type" : "priceStat",
          "status" : "ok"
        },
        "carImage" : {
          "previewUrl" : "https://69.img.avito.st/640x480/3897113869.jpg",
          "originalUrl" : "https://69.img.avito.st/1280x960/3897113869.jpg"
        },
        "taxiData" : {
          "recaps" : [ null, null ],
          "events" : [ {
            "permitNumber" : "51021",
            "isActual" : true,
            "regionName" : "Краснодарский край",
            "dateTo" : 1566507600,
            "dateFrom" : 1566507600
          }, {
            "permitNumber" : "51021",
            "isActual" : true,
            "regionName" : "Краснодарский край",
            "dateTo" : 1566507600,
            "dateFrom" : 1566507600
          } ]
        },
        "events" : {
          "lastMileageRecord" : {
            "description" : "Пробег 105 125 км",
            "type" : "warning",
            "value" : 105125
          },
          "avitoOnSale" : {
            "additionalInfo" : {
              "date" : 0,
              "price" : 6,
              "title" : "title",
              "url" : "url"
            },
            "description" : "Авто в продаже",
            "type" : "ok",
            "value" : true
          },
          "pledge" : {
            "description" : "Залоги не обнаружены",
            "type" : "caution",
            "value" : false
          },
          "publicPerson" : {
            "description" : "Регистрация на юрлицо",
            "type" : "ok",
            "value" : true
          },
          "owners" : {
            "description" : "3 владельца",
            "type" : "ok",
            "value" : 3
          },
          "crashes" : {
            "description" : "3 ДТП",
            "type" : "warning",
            "value" : true
          },
          "dealerDataAvailable" : {
            "description" : "Нет данных от дилера",
            "type" : "ok",
            "value" : true
          },
          "bodyRepair" : {
            "description" : "1 кузовной ремонт",
            "type" : "caution",
            "value" : true
          }
        }
      },
      "reportId" : 1,
      "pdfLink" : "https://autoteka.ru/report/pdf/uuid/2b88036a-c371-4d6b-a078-3966dab04957?vin=XTA000FY9H201S000",
      "status" : "processing"
    }
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
 * Запрос на создание превью по ID объявления
 * Возвращает идентификатор `previewId`, по которому асинхронно с помощью [запроса на получение превью по ID](#operation/getPreview) можно получить результат 
 *
 * body RequestPreviewByItemIdAutoteka  (optional)
 * authorization String Токен для авторизации
 * returns RequestPreviewResponseBodyAutoteka
 **/
exports.postPreviewByItemId = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "preview" : {
      "previewId" : 1
    }
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
 * Запрос на создание превью по государственному номеру
 * Возвращает идентификатор `previewId`, по которому асинхронно с помощью [запроса на получение превью по ID](#operation/getPreview) можно получить результат 
 *
 * body RequestPreviewByRegNumberAutoteka  (optional)
 * authorization String Токен для авторизации
 * returns RequestPreviewResponseBodyAutoteka
 **/
exports.postPreviewByRegNumber = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "preview" : {
      "previewId" : 1
    }
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
 * Запрос на создание превью по VIN
 * Возвращает идентификатор `previewId`, по которому асинхронно с помощью [запроса на получение превью по ID](#operation/getPreview) можно получить результат 
 *
 * body RequestPreviewByVinAutoteka  (optional)
 * authorization String Токен для авторизации
 * returns RequestPreviewResponseBodyAutoteka
 **/
exports.postPreviewByVin = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "preview" : {
      "previewId" : 1
    }
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
 * Запрос на создание отчета по превью 
 * Метод для запроса отчета по `previewId`, возвращает идентификатор отчета по которому сформированный отчет можно получить в [методе для получения отчета по его идентификатору](#operation/getReport). При запросе происходит списание доступных отчетов 
 *
 * body RequestReportByPreviewIdAutoteka  (optional)
 * authorization String Токен для авторизации
 * returns CreateReportResponseBodyAutoteka
 **/
exports.postReport = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "report" : {
      "reportId" : 1,
      "status" : "processing"
    }
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
 * Метод для обновление отчета по его идентификатору в случае отсуствия данных 
 * Запрос на перегенерацию отчета по ID, который был получен из [запроса на создание отчета](#operation/postReport) 
 *
 * authorization String Токен для авторизации
 * report_id Integer Идентификатор отчета.
 * returns UpdateReportResponseBodyAutoteka
 **/
exports.putReport = function(authorization,report_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "report" : {
      "reportId" : 1,
      "status" : "processing"
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

