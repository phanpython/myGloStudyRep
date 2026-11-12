"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let rollback = 20;
let fullPrice;
let servicePercentPrice;
let allServicePrices;

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

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
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

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrices();

console.log(fullPrice, showTypeOf(fullPrice));
console.log(adaptive, showTypeOf(adaptive));
console.log(service1, showTypeOf(service1));

console.log("Типы экранов - " + screens);
console.log(getRollbeckMessage(fullPrice));
console.log("Итоговая стоимость без отката " + servicePercentPrice);
