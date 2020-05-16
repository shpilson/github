'use strict';


/**
 * Получение баланса кошелька пользователя
 * Возвращает сумму реальных денежных средств в кошельке, а также сумму бонусных средств 
 *
 * authorization String Токен для авторизации
 * user_id Long Идентификатор пользователя (клиента)
 * returns Balance
 **/
exports.getUserBalance = function(authorization,user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bonus" : 6.0274563,
  "real" : 0.8008282
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

