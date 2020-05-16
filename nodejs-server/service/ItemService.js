'use strict';


/**
 * Получение информации по объявлению
 * Возвращает данные об объявлении - его статус, список примененных услуг, статистику просмотров 
 *
 * user_id Long Номер пользователя в Личном кабинете Авито
 * item_id Long Идентификатор объявления на сайте
 * authorization String Токен для авторизации
 * returns ItemInfoAvito
 **/
exports.getItemInfo = function(user_id,item_id,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "start_time" : "2000-01-23T04:56:07.000+00:00",
  "stats" : {
    "item_views" : 0.8008281904610115,
    "contact_views" : 6.027456183070403
  },
  "vas" : [ {
    "schedule" : [ "2000-01-23T04:56:07.000+00:00", "2000-01-23T04:56:07.000+00:00" ],
    "vas_id" : "vip",
    "finish_time" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "schedule" : [ "2000-01-23T04:56:07.000+00:00", "2000-01-23T04:56:07.000+00:00" ],
    "vas_id" : "vip",
    "finish_time" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "finish_time" : "2000-01-23T04:56:07.000+00:00",
  "url" : "url",
  "status" : "active"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Получение статистики по объявлениям
 * Получение статистики по списку идентификаторов объявлений на сайте. 
 *
 * body ItemIdsRequestBody Набор идентификаторов объявлений на сайте (optional)
 * user_id Long Номер пользователя в Личном кабинете Авито
 * authorization String Токен для авторизации
 * returns inline_response_200_5
 **/
exports.getItemsStats = function(body,user_id,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "stats" : [ {
    "item_views" : 0.8008281904610115,
    "contact_views" : 6.027456183070403
  }, {
    "item_views" : 0.8008281904610115,
    "contact_views" : 6.027456183070403
  } ],
  "errors" : {
    "invalidate_values" : [ 5, 5 ],
    "not_found" : [ 1, 1 ]
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
 * Получение информации о стоимости пакетов дополнительных услуг
 * Возвращает в ответ объект со следующей структурой: - `packages` – объект, который содержит информацию о стоимости пакетов дополнительных услуг для каждого объявления. Ключами являются идентификаторы объявлений, значениями – объекты с информацией о стоимости пакетов услуг для данного объявления:   - `turbo_sale` - [пакет услуг продвижения \"Турбопродажа\"](https://support.avito.ru/articles/200026838)   - `quick_sale` - [пакет услуг продвижения \"Быстрая продажа\"](https://support.avito.ru/articles/679) - `errors` – идентификаторы объявлений, для которых информация не получена. 
 *
 * body ItemIdsRequestBody Набор идентификаторов объявлений на сайте (optional)
 * user_id Long Номер пользователя в Личном кабинете Авито
 * authorization String Токен для авторизации
 * returns inline_response_200_7
 **/
exports.getVasPackagePrice = function(body,user_id,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "vas" : {
    "x5_7" : 2.3021358869347655,
    "quick_sale" : 0.8008281904610115,
    "x2_7" : 5.962133916683182,
    "x5_1" : 5.637376656633329,
    "turbo_sale" : 6.027456183070403,
    "x2_1" : 1.4658129805029452,
    "x10_1" : 7.061401241503109,
    "x10_7" : 9.301444243932576
  },
  "errors" : [ 3, 3 ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Получение информации о стоимости дополнительных услуг
 * Возвращает в ответ объект со следующей структурой: - `vas` – объект, который содержит информацию о стоимости дополнительных услуг для каждого объявления. Ключами являются идентификаторы объявлений, значениями – объекты с информацией о стоимости услуг для данного объявления:   - `premium` — [услуга продвижения \"Премиум\"](https://support.avito.ru/articles/200026868)   - `vip` — [услуга продвижения \"VIP\"](https://support.avito.ru/articles/200026848)   - `pushup` — [услуга продвижения \"Поднять\"](https://support.avito.ru/articles/200026828)   - `highlight` — [услуга продвижения \"Выделить\"](https://support.avito.ru/articles/200026858)   - `xl` – [услуга продвижения \"XL-объявление\"](https://support.avito.ru/articles/685) - `errors` – идентификаторы объявлений, для которых информация не получена. 
 *
 * body ItemIdsRequestBody Набор идентификаторов объявлений на сайте (optional)
 * user_id Long Номер пользователя в Личном кабинете Авито
 * authorization String Токен для авторизации
 * returns inline_response_200_6
 **/
exports.getVasPrices = function(body,user_id,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "vas" : {
    "pushup" : 1.4658129805029452,
    "highlight" : 5.962133916683182,
    "premium" : 0.8008281904610115,
    "xl" : 5.637376656633329,
    "vip" : 6.027456183070403
  },
  "errors" : [ 2, 2 ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Применение дополнительных услуг
 * Применение дополнительной услуги к объявлению, в ответе возвращает данные о примененной услуге и сумму списания. [Более подробная информация по дополнительным услугам](https://support.avito.ru/sections/200009758) 
 *
 * body VasIdRequestBody  (optional)
 * user_id Long Номер пользователя в Личном кабинете Авито
 * item_id Long Идентификатор объявления на сайте
 * authorization String Токен для авторизации
 * returns VasApplyAvito
 **/
exports.putItemVas = function(body,user_id,item_id,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : 0.8008282,
  "vas" : {
    "schedule" : [ "2000-01-23T04:56:07.000+00:00", "2000-01-23T04:56:07.000+00:00" ],
    "vas_id" : "vip",
    "finish_time" : "2000-01-23T04:56:07.000+00:00"
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
 * Применение пакета дополнительных услуг
 * Применение пакета дополнительных услуг к объявлению, в ответе возвращает данные о примененной услуге и сумму списания 
 *
 * body PackageIdRequestBody  (optional)
 * user_id Long Номер пользователя в Личном кабинете Авито
 * item_id Long Идентификатор объявления на сайте
 * authorization String Токен для авторизации
 * returns VasPackageApplyAvito
 **/
exports.putItemVasPackage = function(body,user_id,item_id,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : 0.8008282,
  "package" : {
    "start_time" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "package_id" : "turbo_sale",
    "finish_time" : "2000-01-23T04:56:07.000+00:00"
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
 * Применение пакета дополнительных услуг
 * Применение пакета дополнительных услуг к объявлению, в ответе возвращает сумму списания 
 *
 * body PackageIdRequestBodyV2  (optional)
 * user_id Long Номер пользователя в Личном кабинете Авито
 * item_id Long Идентификатор объявления на сайте
 * authorization String Токен для авторизации
 * returns VasAmountAvito
 **/
exports.putItemVasPackageV2 = function(body,user_id,item_id,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : 0.8008282
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

