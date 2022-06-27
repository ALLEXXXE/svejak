"use strict";

/* Создание поверхностных копий объекта (невозможно изменять значения свойств вложенных обектов в главном обьекте): */
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;  /* Заменяем значение свойства а на 10 */
/* newNumbers.c.x = 10; Заменит на 10 в оригинальном обьекте и копии */

console.log(newNumbers);
console.log(numbers);


/* Объединение объектов: */
const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));

/* Другой вариант объединения, создание копии с изменением одного из свойств объекта */
const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);


/* Создание копии массива c изменением одного из элементов массива */
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdddssw';
console.log(newArray);
console.log(oldArray);


/* Создание копии с использованием оператора разворота. Спред оператор */
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


/* Передача значений массива в функцию */
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);


/* Копия массива при помощи спред оператора ... */
const array = ['a', 'b'];
const newAarray = [...array];
console.log(array);
console.log(newAarray);


/* Копия объекта при помощи спред оператора ... */
const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(q);
console.log(newObj);