"use strict";

/* Создаем пототип: */
const soldier = {
    health: 400,
    armor: 100
};


/* Создаем рядового */
const jonh = {
    health: 100
};

/* jonh.__proto__  = soldier; */  /* Устаревший способ обращения к прототипу */

Object.setPrototypeOf(jonh, soldier);  /* Правильный способ */
console.log(jonh.armor);



/* Пишем заново. Правильно. */
const soldier1 = {
    health: 400,
    armor: 100
};

const jonh1 = Object.create(soldier1);

console.log(jonh1.armor);




