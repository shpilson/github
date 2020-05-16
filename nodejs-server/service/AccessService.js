'use strict';


/**
 * Получение access token
 * Получения временного ключа для авторизации
 *
 * grant_type String Тип OAuth flow – строка client_credentials
 * client_id String 
 * client_secret String 
 * returns inline_response_200
 **/
exports.getAccessToken = function(grant_type,client_id,client_secret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "access_token" : "access_token",
    "token_type" : "token_type",
    "expires_in" : 0.8008281904610115
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

