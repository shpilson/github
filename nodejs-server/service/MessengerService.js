'use strict';


/**
 * Прочитать чат
 * После успешного получения списка сообщений необходимо вызвать этот метод для того, чтобы чат стал прочитанным. 
 *
 * authorization String Токен для авторизации
 * user_id Long Идентификатор пользователя (клиента)
 * chat_id String Идентификатор чата (клиента)
 * returns inline_response_200_10
 **/
exports.chatRead = function(authorization,user_id,chat_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ok" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Удаление сообщения
 * Сообщение не пропадает из истории, а меняет свой тип на deleted. Удалять можно только те сообщения которые не старше часа с момента их создания. 
 *
 * authorization String Токен для авторизации
 * user_id Long Идентификатор пользователя (клиента)
 * chat_id String Идентификатор чата (клиента)
 * message_id String Идентификатор сообщения
 * returns Object
 **/
exports.deleteMessage = function(authorization,user_id,chat_id,message_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Получение информации по чату
 * Возвращает данные чата и последнее сообщение в нем 
 *
 * authorization String Токен для авторизации
 * user_id Long Идентификатор пользователя (клиента)
 * chat_id String Идентификатор чата (клиента)
 * returns Chat
 **/
exports.getChatById = function(authorization,user_id,chat_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "created" : 1571412836,
  "context" : {
    "type" : "item",
    "value" : {
      "images" : {
        "count" : 4,
        "main" : {
          "140x105" : "https://01-img-staging-proxy.k.avito.ru/140x105/5815183159.jpg"
        }
      },
      "status_id" : 10,
      "user_id" : 141906442,
      "price_string" : "300 000 ₽",
      "id" : 1768287444,
      "title" : "Mazda 3 2008",
      "url" : "https://avito.ru/moskva/avtomobili/mazda_3_2008_1768287444"
    }
  },
  "last_message" : {
    "created" : 1571654040,
    "id" : "id",
    "author_id" : 94235311,
    "type" : "link",
    "content" : {
      "link" : {
        "text" : "habr.com",
        "url" : "habr.com"
      }
    },
    "direction" : "out"
  },
  "id" : "id",
  "updated" : 1571654040,
  "users" : [ {
    "public_user_profile" : {
      "user_id" : 94235311,
      "item_id" : 1768287444,
      "avatar" : {
        "default" : "https://www.avito.st/stub_avatars/_/14_256x256.png",
        "images" : {
          "48x48" : "https://www.avito.st/stub_avatars/_/14_48x48.png",
          "192x192" : "https://www.avito.st/stub_avatars/_/14_192x192.png",
          "36x36" : "https://www.avito.st/stub_avatars/_/14_36x36.png",
          "24x24" : "https://www.avito.st/stub_avatars/_/14_24x24.png",
          "96x96" : "https://www.avito.st/stub_avatars/_/14_96x96.png",
          "128x128" : "https://www.avito.st/stub_avatars/_/14_128x128.png",
          "256x256" : "https://www.avito.st/stub_avatars/_/14_256x256.png",
          "72x72" : "https://www.avito.st/stub_avatars/_/14_72x72.png",
          "64x64" : "https://www.avito.st/stub_avatars/_/14_64x64.png"
        }
      },
      "url" : "https://avito.ru/user/db65c00c946dc404e11f14755465453b/profile?id=1768287444&src=messenger"
    },
    "name" : "Guldan",
    "id" : 94235311
  }, {
    "public_user_profile" : {
      "user_id" : 94235311,
      "item_id" : 1768287444,
      "avatar" : {
        "default" : "https://www.avito.st/stub_avatars/_/14_256x256.png",
        "images" : {
          "48x48" : "https://www.avito.st/stub_avatars/_/14_48x48.png",
          "192x192" : "https://www.avito.st/stub_avatars/_/14_192x192.png",
          "36x36" : "https://www.avito.st/stub_avatars/_/14_36x36.png",
          "24x24" : "https://www.avito.st/stub_avatars/_/14_24x24.png",
          "96x96" : "https://www.avito.st/stub_avatars/_/14_96x96.png",
          "128x128" : "https://www.avito.st/stub_avatars/_/14_128x128.png",
          "256x256" : "https://www.avito.st/stub_avatars/_/14_256x256.png",
          "72x72" : "https://www.avito.st/stub_avatars/_/14_72x72.png",
          "64x64" : "https://www.avito.st/stub_avatars/_/14_64x64.png"
        }
      },
      "url" : "https://avito.ru/user/db65c00c946dc404e11f14755465453b/profile?id=1768287444&src=messenger"
    },
    "name" : "Guldan",
    "id" : 94235311
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
 * Получение информации по чатам
 * Возвращает список чатов 
 *
 * authorization String Токен для авторизации
 * user_id Long Идентификатор пользователя (клиента)
 * item_ids String  (optional)
 * unread_only Boolean  (optional)
 * limit BigDecimal Количество сообщений на странице (положительное число больше 0 и меньше 100) (optional)
 * offset BigDecimal  (optional)
 * returns Chats
 **/
exports.getChats = function(authorization,user_id,item_ids,unread_only,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "chats" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Получение списка сообщений
 * Получение списка сообщений 
 *
 * authorization String Токен для авторизации
 * user_id Long Идентификатор пользователя (клиента)
 * chat_id String Идентификатор чата (клиента)
 * limit BigDecimal Количество сообщений на странице (положительное число больше 0 и меньше 100) (optional)
 * offset BigDecimal  (optional)
 * returns Messages
 **/
exports.getMessages = function(authorization,user_id,chat_id,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "created" : 1571654040,
  "id" : "id",
  "author_id" : 94235311,
  "type" : "text",
  "content" : {
    "call" : {
      "target_user_id" : 94235311,
      "status" : "missed"
    },
    "image" : {
      "sizes" : {
        "1280x960" : "https://img.k.avito.ru/chat/1280x960/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
        "140x105" : "https://img.k.avito.ru/chat/140x105/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
        "32x32" : "https://img.k.avito.ru/chat/32x32/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
        "640x480" : "https://img.k.avito.ru/chat/640x480/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg"
      }
    },
    "item" : {
      "price_string" : "1 232 323 ₽",
      "image_url" : "https://img.k.avito.ru/140x105/5758559461.jpg",
      "item_url" : "https://avito.ru/item_url",
      "title" : "Объявление"
    },
    "link" : {
      "preview" : {
        "images" : {
          "1280x960" : "https://img.k.avito.ru/chat/1280x960/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
          "140x105" : "https://img.k.avito.ru/chat/140x105/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
          "32x32" : "https://img.k.avito.ru/chat/32x32/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
          "640x480" : "https://img.k.avito.ru/chat/640x480/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg"
        },
        "domain" : "habr.com",
        "description" : "Лучшие публикации за последние 24 часа",
        "title" : "Лучшие публикации за сутки / Хабр",
        "url" : "https://habr.com/ru/"
      },
      "text" : "habr.com",
      "url" : "habr.com"
    },
    "location" : {
      "kind" : "street",
      "lon" : 37.603954,
      "text" : "Москва, Варшавское шоссе",
      "title" : "Москва, Варшавское шоссе",
      "lat" : 55.599799
    },
    "text" : "привет!"
  },
  "direction" : "out"
}, {
  "created" : 1571654040,
  "id" : "id",
  "author_id" : 94235311,
  "type" : "text",
  "content" : {
    "call" : {
      "target_user_id" : 94235311,
      "status" : "missed"
    },
    "image" : {
      "sizes" : {
        "1280x960" : "https://img.k.avito.ru/chat/1280x960/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
        "140x105" : "https://img.k.avito.ru/chat/140x105/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
        "32x32" : "https://img.k.avito.ru/chat/32x32/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
        "640x480" : "https://img.k.avito.ru/chat/640x480/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg"
      }
    },
    "item" : {
      "price_string" : "1 232 323 ₽",
      "image_url" : "https://img.k.avito.ru/140x105/5758559461.jpg",
      "item_url" : "https://avito.ru/item_url",
      "title" : "Объявление"
    },
    "link" : {
      "preview" : {
        "images" : {
          "1280x960" : "https://img.k.avito.ru/chat/1280x960/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
          "140x105" : "https://img.k.avito.ru/chat/140x105/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
          "32x32" : "https://img.k.avito.ru/chat/32x32/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
          "640x480" : "https://img.k.avito.ru/chat/640x480/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg"
        },
        "domain" : "habr.com",
        "description" : "Лучшие публикации за последние 24 часа",
        "title" : "Лучшие публикации за сутки / Хабр",
        "url" : "https://habr.com/ru/"
      },
      "text" : "habr.com",
      "url" : "habr.com"
    },
    "location" : {
      "kind" : "street",
      "lon" : 37.603954,
      "text" : "Москва, Варшавское шоссе",
      "title" : "Москва, Варшавское шоссе",
      "lat" : 55.599799
    },
    "text" : "привет!"
  },
  "direction" : "out"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Получение списка сообщений V2
 * Получение списка сообщений.  **Не помечает чат прочитанным** После успешного списка сообщений необходимо вызвать [метод](https://api.avito.ru/docs/api.html#operation/chatRead), который сделат чат прочитанным. 
 *
 * authorization String Токен для авторизации
 * user_id Long Идентификатор пользователя (клиента)
 * chat_id String Идентификатор чата (клиента)
 * limit BigDecimal Количество сообщений на странице (положительное число больше 0 и меньше 100) (optional)
 * offset BigDecimal  (optional)
 * returns Messages
 **/
exports.getMessagesV2 = function(authorization,user_id,chat_id,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "created" : 1571654040,
  "id" : "id",
  "author_id" : 94235311,
  "type" : "text",
  "content" : {
    "call" : {
      "target_user_id" : 94235311,
      "status" : "missed"
    },
    "image" : {
      "sizes" : {
        "1280x960" : "https://img.k.avito.ru/chat/1280x960/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
        "140x105" : "https://img.k.avito.ru/chat/140x105/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
        "32x32" : "https://img.k.avito.ru/chat/32x32/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
        "640x480" : "https://img.k.avito.ru/chat/640x480/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg"
      }
    },
    "item" : {
      "price_string" : "1 232 323 ₽",
      "image_url" : "https://img.k.avito.ru/140x105/5758559461.jpg",
      "item_url" : "https://avito.ru/item_url",
      "title" : "Объявление"
    },
    "link" : {
      "preview" : {
        "images" : {
          "1280x960" : "https://img.k.avito.ru/chat/1280x960/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
          "140x105" : "https://img.k.avito.ru/chat/140x105/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
          "32x32" : "https://img.k.avito.ru/chat/32x32/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
          "640x480" : "https://img.k.avito.ru/chat/640x480/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg"
        },
        "domain" : "habr.com",
        "description" : "Лучшие публикации за последние 24 часа",
        "title" : "Лучшие публикации за сутки / Хабр",
        "url" : "https://habr.com/ru/"
      },
      "text" : "habr.com",
      "url" : "habr.com"
    },
    "location" : {
      "kind" : "street",
      "lon" : 37.603954,
      "text" : "Москва, Варшавское шоссе",
      "title" : "Москва, Варшавское шоссе",
      "lat" : 55.599799
    },
    "text" : "привет!"
  },
  "direction" : "out"
}, {
  "created" : 1571654040,
  "id" : "id",
  "author_id" : 94235311,
  "type" : "text",
  "content" : {
    "call" : {
      "target_user_id" : 94235311,
      "status" : "missed"
    },
    "image" : {
      "sizes" : {
        "1280x960" : "https://img.k.avito.ru/chat/1280x960/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
        "140x105" : "https://img.k.avito.ru/chat/140x105/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
        "32x32" : "https://img.k.avito.ru/chat/32x32/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
        "640x480" : "https://img.k.avito.ru/chat/640x480/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg"
      }
    },
    "item" : {
      "price_string" : "1 232 323 ₽",
      "image_url" : "https://img.k.avito.ru/140x105/5758559461.jpg",
      "item_url" : "https://avito.ru/item_url",
      "title" : "Объявление"
    },
    "link" : {
      "preview" : {
        "images" : {
          "1280x960" : "https://img.k.avito.ru/chat/1280x960/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
          "140x105" : "https://img.k.avito.ru/chat/140x105/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
          "32x32" : "https://img.k.avito.ru/chat/32x32/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg",
          "640x480" : "https://img.k.avito.ru/chat/640x480/5083651369.3e798a9bf88345ae8fe85ff891266b24.jpg"
        },
        "domain" : "habr.com",
        "description" : "Лучшие публикации за последние 24 часа",
        "title" : "Лучшие публикации за сутки / Хабр",
        "url" : "https://habr.com/ru/"
      },
      "text" : "habr.com",
      "url" : "habr.com"
    },
    "location" : {
      "kind" : "street",
      "lon" : 37.603954,
      "text" : "Москва, Варшавское шоссе",
      "title" : "Москва, Варшавское шоссе",
      "lat" : 55.599799
    },
    "text" : "привет!"
  },
  "direction" : "out"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Добавление пользователя в blacklist
 * Добавление пользователя в blacklist 
 *
 * body List Добавление пользователя в blacklist (optional)
 * user_id Long Идентификатор пользователя (клиента)
 * authorization String Токен для авторизации
 * no response value expected for this operation
 **/
exports.postBlacklist = function(body,user_id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Отправление сообщения
 * На данный момент можно отправить только текстовое сообщение 
 *
 * body SendMessageRequestBody Отправление сообщения (optional)
 * user_id Long Идентификатор пользователя (клиента)
 * chat_id String Идентификатор чата (клиента)
 * authorization String Токен для авторизации
 * returns inline_response_200_11
 **/
exports.postSendMessage = function(body,user_id,chat_id,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "created" : 1563202313,
  "id" : "bdcc5bac2d00345f1cc66fa657813958",
  "type" : "text",
  "content" : {
    "text" : "привет"
  },
  "direction" : "out"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Включение уведомлений (webhooks)
 * Включение уведомлений 
 *
 * body WebhookSubscribeRequestBody Url на который будут отправляться уведомления (optional)
 * authorization String Токен для авторизации
 * returns inline_response_200_10
 **/
exports.postWebhook = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ok" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Отключение уведомлений (webhooks)
 * Отключение уведомлений 
 *
 * body WebhookSubscribeRequestBody Url, на который необходимо перестать слать уведомления (optional)
 * authorization String Токен для авторизации
 * returns inline_response_200_10
 **/
exports.postWebhookUnsubscribe = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ok" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Включение уведомлений V2 (webhooks)
 * Включение **V2** уведомлений. <LINK_TO_V2_WEBHOOKS> 
 *
 * body WebhookSubscribeRequestBody Url на который будут отправляться уведомления (optional)
 * authorization String Токен для авторизации
 * returns inline_response_200_10
 **/
exports.postWebhookV2 = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ok" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

