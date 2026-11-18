let books = document.querySelectorAll(".books");
let book = document.querySelectorAll(".book");
let body = document.querySelector("body");
let adv = document.querySelector(".adv");
let headingBook3 = book[4].querySelector("a");

let chaptersBook2 = book[0].querySelectorAll("li");
let chaptersBook5 = book[5].querySelectorAll("li");
let chaptersBook6 = book[2].querySelectorAll("li");

adv.remove();

book[0].before(book[1]);
book[3].before(book[4]);
book[5].after(book[2]);

body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";
headingBook3.textContent = "Книга 3. this и Прототипы Объектов";

chaptersBook2[3].after(chaptersBook2[6], chaptersBook2[8]);
chaptersBook2[10].before(chaptersBook2[2]);

chaptersBook5[1].after(chaptersBook5[9]);
chaptersBook5[6].before(chaptersBook5[2]);
chaptersBook5[8].before(chaptersBook5[5]);

chaptersBook6[9].before("Глава 8: За пределами ES6");
