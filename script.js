"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let adaptive = prompt("Нужен ли адаптив на сайте?");
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

const getAllServicePrices = function (priceService1, priceService2) {
  return priceService1 + priceService2;
};

function getFullPrice(priceScreen, callback, priceService1, priceService2){
  return priceScreen + callback(priceService1, priceService2);
};

const getTitle = function (titleProject) {
  titleProject = titleProject.trimStart();
  return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
};

const getServicePercentPrices = function (rollback, callback, screenPrice, servicePrice1, servicePrice2) {
  fullPrice = callback(screenPrice, getAllServicePrices, servicePrice1, servicePrice2)
  return Math.ceil(fullPrice - fullPrice * (rollback / 100));
};

const showTypeOf = function(variable) {
  return typeof variable;
};

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, getAllServicePrices, servicePrice1, servicePrice2);
title = getTitle(title);
servicePercentPrice = getServicePercentPrices(rollback, getFullPrice, screenPrice, servicePrice1, servicePrice2)

console.log(fullPrice, showTypeOf(fullPrice));
console.log("Типы экранов - " + screens); 
console.log(getRollbeckMessage(fullPrice));
console.log("Итоговая стоимость без отката " + servicePercentPrice);

// console.log("Цена всех доп сервисов " + allServicePrices);
// console.log("Полная цена " + fullPrice);
// console.log("Название " + title);
