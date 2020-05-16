'use strict';


/**
 * Получение access token
 * Получения временного ключа для авторизации запроса от лица пользователя
 *
 * grant_type String Тип OAuth flow. Строка authorization_code
 * client_id String 
 * client_secret String 
 * code String 
 * returns inline_response_200_1
 **/
exports.getAccessTokenAuthorizationCode = function(grant_type,client_id,client_secret,code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "access_token" : "access_token",
    "refresh_token" : "refresh_token",
    "scope" : "scope",
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


/**
 * Обновление access token
 * Обновление временного ключа для авторизации запроса от лица пользователя
 *
 * grant_type String Тип OAuth flow. Строка refresh_token
 * client_id String 
 * client_secret String 
 * refresh_token String 
 * returns inline_response_200_2
 **/
exports.refreshAccessTokenAuthorizationCode = function(grant_type,client_id,client_secret,refresh_token) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "access_token" : "access_token",
    "refresh_token" : "refresh_token",
    "scope" : "scope",
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

