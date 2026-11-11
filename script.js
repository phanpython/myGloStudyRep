// Второе задание

let title = "lesson02";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 1100;
let rollback = 20;
let fullPrice = 4500;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(
  "Стоимость верстки экранов " +
    screenPrice +
    " рублей / " +
    Math.round(screenPrice * 0.012) +
    " долларов / " +
    screenPrice * 0.55 +
    " гривен / " +
    screenPrice * 0.08 +
    " юаней",
);

console.log(
  "Стоимость верстки экранов " +
    fullPrice +
    " рублей / " +
    Math.round(fullPrice * 0.012) +
    " долларов / " +
    fullPrice * 0.55 +
    " гривен / " +
    fullPrice * 0.08 +
    " юаней",
);

console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));

// Третье задание

title = prompt("Как называется ваш проект?");
screens = prompt("Какие типы экранов нужно разработать?");
screenPrice = prompt("Сколько будет стоить данная работа?");
adaptive = prompt("Нужен ли адаптив на сайте?");
console.log(adaptive);

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = prompt("Сколько это будет стоить?");

fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);

console.log("итоговую стоимость " + fullPrice);

let servicePercentPrice = Math.ceil(fullPrice - rollback);

console.log(
  "итоговая стоимость за вычетом отката посреднику " + servicePercentPrice,
);

switch (true) {
  case fullPrice >= 30000:
    console.log("Даем скидку в 10%");
    break;
  case fullPrice >= 15000 && fullPrice < 30000:
    console.log("Даем скидку в 5%");
    break;
  case fullPrice < 15000 && fullPrice >= 0:
    console.log("Скидка не предусмотрена");
    break;
  default:
    console.log("Что то пошло не так");
    break;
}
