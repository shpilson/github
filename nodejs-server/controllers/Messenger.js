'use strict';

var utils = require('../utils/writer.js');
var Messenger = require('../service/MessengerService');

module.exports.chatRead = function chatRead (req, res, next, authorization, user_id, chat_id) {
  Messenger.chatRead(authorization, user_id, chat_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteMessage = function deleteMessage (req, res, next, authorization, user_id, chat_id, message_id) {
  Messenger.deleteMessage(authorization, user_id, chat_id, message_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getChatById = function getChatById (req, res, next, authorization, user_id, chat_id) {
  Messenger.getChatById(authorization, user_id, chat_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getChats = function getChats (req, res, next, authorization, user_id, item_ids, unread_only, limit, offset) {
  Messenger.getChats(authorization, user_id, item_ids, unread_only, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMessages = function getMessages (req, res, next, authorization, user_id, chat_id, limit, offset) {
  Messenger.getMessages(authorization, user_id, chat_id, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMessagesV2 = function getMessagesV2 (req, res, next, authorization, user_id, chat_id, limit, offset) {
  Messenger.getMessagesV2(authorization, user_id, chat_id, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postBlacklist = function postBlacklist (req, res, next, body, user_id, authorization) {
  Messenger.postBlacklist(body, user_id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postSendMessage = function postSendMessage (req, res, next, body, user_id, chat_id, authorization) {
  Messenger.postSendMessage(body, user_id, chat_id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postWebhook = function postWebhook (req, res, next, body, authorization) {
  Messenger.postWebhook(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postWebhookUnsubscribe = function postWebhookUnsubscribe (req, res, next, body, authorization) {
  Messenger.postWebhookUnsubscribe(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postWebhookV2 = function postWebhookV2 (req, res, next, body, authorization) {
  Messenger.postWebhookV2(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
