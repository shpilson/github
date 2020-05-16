'use strict';


/**
 * Просмотр резюме 
 *
 * authorization String Токен для авторизации
 * resume_id Long Идентификатор резюме
 * fields String Поля ответа (можно указать несколько значений через запятую) (optional)
 * returns Resume
 **/
exports.getResume = function(authorization,resume_id,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "education" : [ {
    "end_at" : 0,
    "name" : "name",
    "title" : "title"
  }, {
    "end_at" : 0,
    "name" : "name",
    "title" : "title"
  } ],
  "gender" : "male",
  "created" : "2000-01-23T04:56:07.000+00:00",
  "citizenship" : {
    "id" : 15973,
    "title" : "Россия"
  },
  "business_trip_readiness" : "ready",
  "description" : "description",
  "language" : [ {
    "level" : "basic",
    "language" : {
      "id" : 20125,
      "title" : "Английский"
    }
  }, {
    "level" : "basic",
    "language" : {
      "id" : 20125,
      "title" : "Английский"
    }
  } ],
  "title" : "Оператор Call-центра",
  "experience" : [ {
    "end_at" : "2000-01-23",
    "company_name" : "company_name",
    "description" : "description",
    "title" : "title",
    "start_at" : "2000-01-23"
  }, {
    "end_at" : "2000-01-23",
    "company_name" : "company_name",
    "description" : "description",
    "title" : "title",
    "start_at" : "2000-01-23"
  } ],
  "salary" : 20000,
  "photos" : [ {
    "url" : "url"
  }, {
    "url" : "url"
  } ],
  "relocation_readiness" : "possible",
  "url" : "url",
  "schedule" : "remote",
  "total_experience" : 0,
  "specialization" : {
    "id" : 10186,
    "title" : "Консультирование"
  },
  "location" : {
    "id" : 637640,
    "title" : "Москва"
  },
  "education_level" : "unfinished-higher",
  "id" : 2385934235,
  "updated" : "2000-01-23T04:56:07.000+00:00",
  "age" : 19,
  "is_purchased" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Доступ к контактным данным соискателя 
 * Для получения контактов пользователя необходимо приобрести пакет просмотров контактных данных в [личном кабинете](https://www.avito.ru/account/cv_packages). 
 *
 * authorization String Токен для авторизации
 * resume_id Long Идентификатор резюме
 * returns ResumeContacts
 **/
exports.getResumeContacts = function(authorization,resume_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Иванов Иван",
  "contacts" : [ {
    "type" : "e-mail",
    "value" : "candidate@example.com"
  }, {
    "type" : "e-mail",
    "value" : "candidate@example.com"
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
 * Поиск резюме 
 *
 * authorization String Токен для авторизации
 * per_page BigDecimal Количество записей на странице (положительное число больше 0 и меньше 100) (optional)
 * page BigDecimal Номер страницы (положительное число больше 0) (optional)
 * cursor BigDecimal Курсор поиска (если не указан, будет начат новый поиск и его курсор будет возвращен в ответе) (optional)
 * fields String Поля ответа (можно указать несколько значений через запятую) (optional)
 * query String Поисковая фраза (optional)
 * location BigDecimal Идентификатор региона поиска (можно указать несколько значений через запятую) <br> Метод принимает идентификаторы сущностей Region и City из [справочника](http://autoload.avito.ru/format/Locations.xml).  (optional)
 * specialization BigDecimal Идентификатор сферы деятельности (можно указать несколько значений через запятую) <br> Возможные значения: - 10166 - IT, интернет, телеком - 10167 - Медицина, фармацевтика - 10168 - Продажи - 10169 - Страхование - 10170 - Транспорт, логистика - 10171 - Образование, наука - 10172 - Строительство - 10173 - Туризм, рестораны - 10174 - Фитнес, салоны красоты - 10175 - Без опыта, студенты - 10180 - Автомобильный бизнес - 10181 - Бухгалтерия, финансы - 10182 - Высший менеджмент - 10183 - Госслужба, НКО - 10184 - ЖКХ, эксплуатация - 10185 - Искусство, развлечения - 10186 - Консультирование - 10187 - Маркетинг, реклама, PR - 10188 - Охрана, безопасность - 10189 - Управление персоналом - 10190 - Юриспруденция - 10191 - Административная работа - 10192 - Банки, инвестиции - 10193 - Производство, сырьё, с/х - 16844 - Домашний персонал  (optional)
 * schedule String График работы (можно указать несколько значений через запятую) <br> Возможные значения: - partial-day - Неполный рабочий день - full-day - Полный рабочий день - fly-in-fly-out - Вахтовый метод - flexible - Гибкий график - shift - Сменный график - remote - Удаленная работа  (optional)
 * business_trip_readiness String Готовность к командировкам (можно указать несколько значений через запятую) <br> Возможные значения: - ready - Готов - never - Не готов - sometimes - Иногда  (optional)
 * relocation_readiness String Готовность к переезду (можно указать несколько значений через запятую) <br> Возможные значения: - possible - Возможен - never - Невозможен  (optional)
 * gender String Пол (можно указать несколько значений через запятую) <br> Возможные значения: - female - Женщина - male - Мужчина  (optional)
 * age_min BigDecimal Минимальный возраст (включительно, положительное число от 18 до 99) (optional)
 * age_max BigDecimal Максимальный возраст (включительно, положительное число от 18 до 99) (optional)
 * education_level String Уровень образования (можно указать несколько значений через запятую) <br> Возможные значения: - higher - Высшее - unfinished-higher - Неоконченное высшее - secondary - Среднее - special-secondary - Среднее специальное  (optional)
 * experience_min BigDecimal Минимальный стаж работы (включительно, положительное число от 0 до 50) (optional)
 * experience_max BigDecimal Максимальный стаж работы (включительно, положительное число от 0 до 50) (optional)
 * salary_min BigDecimal Минимальный размер заработной платы (включительно, положительное число) (optional)
 * salary_max BigDecimal Максимальный размер заработной платы (включительно, положительное число) (optional)
 * updated_than Date Дата последнего обновления (optional)
 * returns   
 **/
exports.getResumes = function(authorization,per_page,page,cursor,fields,query,location,specialization,schedule,business_trip_readiness,relocation_readiness,gender,age_min,age_max,education_level,experience_min,experience_max,salary_min,salary_max,updated_than) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "meta" : {
    "cursor" : 1538480436,
    "per_page" : 25,
    "pages" : 6,
    "page" : 1
  },
  "resumes" : [ {
    "total_experience" : 0,
    "gender" : "male",
    "created" : "2000-01-23T04:56:07.000+00:00",
    "specialization" : {
      "id" : 10186,
      "title" : "Консультирование"
    },
    "location" : {
      "id" : 637640,
      "title" : "Москва"
    },
    "education_level" : "unfinished-higher",
    "id" : 2385934235,
    "title" : "Оператор Call-центра",
    "salary" : 20000,
    "updated" : "2000-01-23T04:56:07.000+00:00",
    "age" : 19,
    "is_purchased" : false
  }, {
    "total_experience" : 0,
    "gender" : "male",
    "created" : "2000-01-23T04:56:07.000+00:00",
    "specialization" : {
      "id" : 10186,
      "title" : "Консультирование"
    },
    "location" : {
      "id" : 637640,
      "title" : "Москва"
    },
    "education_level" : "unfinished-higher",
    "id" : 2385934235,
    "title" : "Оператор Call-центра",
    "salary" : 20000,
    "updated" : "2000-01-23T04:56:07.000+00:00",
    "age" : 19,
    "is_purchased" : false
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

