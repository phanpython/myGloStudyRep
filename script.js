"use strict";

const appData = {
  rollback: 20,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  service1: "",
  service2: "",
  title: "",
  screens: "",
  adaptive: true,
  screenPrice: 0,

  asking: function () {
    appData.title = checkText(
      appData.title,
      "Как называется ваш проект?",
      "Калькулятор вёрстки",
    );
    appData.screens = checkText(
      appData.screens,
      "Какие типы экранов нужно разработать?",
      "Простые, сложные",
    );

    do {
      appData.screenPrice = +prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(appData.screenPrice));
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  getAllServicePrices: function () {
    let sum = 0;
    let price = 0;

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = checkText(
          appData.service1,
          "Какой дополнительный тип услуги нужен?",
          "Анимированные кнопки",
        );
      } else if (i === 1) {
        appData.service2 = checkText(
          appData.service2,
          "Какой дополнительный тип услуги нужен?",
          "Руководство пользователя",
        );
      }

      do {
        price = prompt("Сколько это будет стоить?");
      } while (!isNumber(price));
      sum += +price;
    }
    return sum;
  },

  getServicePercentPrices: function () {
    return Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100),
    );
  },

  getRollbeckMessage: function (price) {
    switch (true) {
      case price >= 30000:
        return "Даем скидку в 10%";
      case price >= 15000 && price < 30000:
        return "Даем скидку в 5%";
      case price < 15000 && price >= 0:
        return "Скидка не предусмотрена";
      default:
        return "Что то пошло не так";
    }
  },

  getFullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function () {
    appData.title = appData.title.trimStart();
    return (
      appData.title[0].toUpperCase() + appData.title.slice(1).toLowerCase()
    );
  },

  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.title = appData.getTitle();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    this.logger();
  },

  logger: function () {
    for (let key in this) {
      console.log(key + ": " + this[key]);
    }
  },
};

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && num != 0;
};

const checkText = function (nameText, text, suggestText) {
  do {
    nameText = prompt(text, suggestText);
  } while (nameText == "" || typeof nameText == "object");
  return nameText;
};

appData.start();
