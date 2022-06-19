"use strict";

/* FUNCTION DECLARATION */
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}

showFirstMessage('Hello world');
console.log(num);



function calc(a, b, c) {
    return ((a + b * c));
}

console.log(calc(4, 5, 2));
console.log(calc(4, 5, 3));


function ret() {
    let num = 50
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


/* FUNCTION EXPRESSION */
const logger = function() {
    console.log('Hello');
};

logger();


/* Стрелочная функция */
const calc = (a, b) => a + b ;

/* ИЛИ */
const calc = (a, b) => { return a + b };


const calc1 = (a, b) => { 
    return a + b; 
};
console.log(calc1(2, 3));