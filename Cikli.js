"use strict";

 let num = 50;

 while (num <= 55) {
    console.log(num);
    num++;
 }


 let number = 50;

 do {
    console.log(number);
    number++;
 }
 while (number <= 55);


 let number1 = 50;

 for (let i = 1; i < 8; i++) {
    console.log(number1);
    number1++;
 }


 for (let i = 1; i < 8; i++) {
    if (i ===6) {
        /* break; */
        continue;
    }

    console.log(i);
 }
