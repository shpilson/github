'use strict';


/**
 * Получение списка броней по объявлению 
 * Возвращает информацию о бронированиях объекта за весь период. 
 *
 * authorization String Токен для авторизации
 * user_id Long Номер пользователя в Личном кабинете Авито
 * item_id Long Идентификатор объявления на сайте
 * date_start date Фильтр, ограничивающий выборку по нижней границе дат
 * date_end date Фильтр, ограничивающий выборку по верхней границе дат
 * returns inline_response_200_9
 **/
exports.getRealtyBookings = function(authorization,user_id,item_id,date_start,date_end) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bookings" : [ {
    "check_out" : "2018-08-04T00:00:00.000+0000",
    "safe_deposit" : {
      "owner_amount" : 4500,
      "total_amount" : 5000,
      "tax" : 500
    },
    "avito_booking_id" : 11111,
    "nights" : 3,
    "contact" : {
      "phone" : "9997770000",
      "name" : "Иван",
      "email" : "guest_email@domain.com"
    },
    "check_in" : "2018-08-01T00:00:00.000+0000",
    "base_price" : 8000,
    "guest_count" : 1,
    "status" : "active"
  }, {
    "check_out" : "2018-08-04T00:00:00.000+0000",
    "safe_deposit" : {
      "owner_amount" : 4500,
      "total_amount" : 5000,
      "tax" : 500
    },
    "avito_booking_id" : 11111,
    "nights" : 3,
    "contact" : {
      "phone" : "9997770000",
      "name" : "Иван",
      "email" : "guest_email@domain.com"
    },
    "check_in" : "2018-08-01T00:00:00.000+0000",
    "base_price" : 8000,
    "guest_count" : 1,
    "status" : "active"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Актуализация параметров для выбранных периодов 
 * Обновляет параметры (цена за ночь, доплата за гостя, минимальная продолжительность брони) для каждого из переданных диапазонов дат 
 *
 * body ParamPricesRealty 
 * user_id Long Номер пользователя в Личном кабинете Авито
 * item_id Long Идентификатор объявления на сайте
 * authorization String Токен для авторизации
 * returns inline_response_200_8
 **/
exports.postRealtyPrices = function(body,user_id,item_id,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Заполнение календаря занятости объекта недвижимости
 * Заполнение календаря занятости объекта недвижимости (для краткосрочной аренды) 
 *
 * body PostCalendarData  (optional)
 * user_id Long Номер пользователя в Личном кабинете Авито
 * item_id Long Идентификатор объявления на сайте
 * authorization String Токен для авторизации
 * returns inline_response_200_8
 **/
exports.putBookingsInfo = function(body,user_id,item_id,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

