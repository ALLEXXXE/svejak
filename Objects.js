"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

/* Деструктуризыция. вытягивание свойств из обьекта */
const {border, bg} = options.colors;
console.log(border);



/* console.log(options.name);

delete options.name;   Удаляет свойство из обьекта

console.log(options); */
/* let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]} `);  
            counter++;
        }
    } else {
    console.log(`Свойство ${key} имеет значение ${options[key]} `);
    counter++;
}
}
console.log(counter); */

/* Выбирает все ключи из обьекта */
console.log(Object.keys(options).length);

