"use strict";

let rollback = 20;
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let service1;
let service2;
let title;
let screens;
let adaptive;
let screenPrice;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  do {
    title = prompt("Как называется ваш проект?", "Калькулятор вёрстки");
  } while (title == "");

  do {
    screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, сложные",
    );
  } while (screens == "");

  do {
    screenPrice = +prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;
  let price;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt(
        "Какой дополнительный тип услуги нужен?",
        "Анимированные кнопки",
      );
    } else if (i === 1) {
      service2 = prompt(
        "Какой дополнительный тип услуги нужен?",
        "Руководство пользователя",
      );
    }

    do {
      price = +prompt("Сколько это будет стоить?");
    } while (!isNumber(price));
    sum += price;
  }
  return sum;
};

const getRollbeckMessage = function (price) {
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
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getTitle = function () {
  title = title.trimStart();
  return title[0].toUpperCase() + title.slice(1).toLowerCase();
};

const getServicePercentPrices = function () {
  return Math.ceil(fullPrice - fullPrice * (rollback / 100));
};

const showTypeOf = function (variable) {
  return typeof variable;
};
console.log(title);
asking();
console.log(title);
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrices();

console.log("allServicePrices" + allServicePrices);
console.log(fullPrice, showTypeOf(fullPrice));
console.log(adaptive, showTypeOf(adaptive));
console.log(service1, showTypeOf(service1));
console.log("Типы экранов - " + screens);
console.log(getRollbeckMessage(fullPrice));
console.log("Итоговая стоимость без отката " + servicePercentPrice);

// console.log("Цена всех доп сервисов " + allServicePrices);
// console.log("Полная цена " + fullPrice);
// console.log("Название " + title);
