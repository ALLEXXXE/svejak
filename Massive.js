"use strict";

const arr = [1, 2, 3, 6, 8];

/* arr.pop();  */  /* Удаляет последний элемент из массива */
/* arr.push(10); */  /* Добавляет элемент в массив. Тот что в скобках */

/* console.log(arr); */

/* Перебор массива: */
/* for (let i =0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* Перебор массива. способ 2: */
/* for (let value of arr) {
    console.log(value);
}
 */

/* Добавление в массив нового элемента. Значение 0 добавляем на 99 позицию: */
/* arr[99] = 0;
console.log(arr); */

/* Метод гибкого перебора массива forEach: */
/* arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); */

/* Метод Split. Делаем из списка товаров вводимых в строку в браузере, массив с этими товарами в консоли: */
/* const str = prompt('', '');
const products = str.split(', ');
console.log(products); */

/* Обратное. на основании массива формируем строку и выводим на экран пользователю */
/* const str = prompt('', '');
const products = str.split(', ');
console.log(products.join('; ')); */

/* Метод сортировки. строки сортирует в алфавитном порядке: */
/* const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; ')); */

/* Метод сортировки. числа. Для правильной сортировки чисел по возрастанию используем функцию: */
const arr1 = [1, 23, 13, 10, 8];
arr1.sort(compareNum);
console.log(arr1);
 function compareNum(a, b) {
    return a -b;
 }