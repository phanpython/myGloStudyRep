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
