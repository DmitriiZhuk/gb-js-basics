"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const randNum = (min = 0, max = 9) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const myArr = [...Array(15)].map(() => randNum());
// const myArr = [1, 2, 3, 4, 5, 6, 4, 3, 2, 1, 3];
console.log(myArr);

const arrSum = myArr.reduce((a, b) => a + b, 0);
console.log(arrSum);

const minValue = Math.min(...myArr);
console.log(minValue);

const arrWithIndexesOf3 = [];
for (const [index, elem] of myArr.entries()) {
  if (elem === 3) {
    arrWithIndexesOf3.push(index);
  }
}
console.log(arrWithIndexesOf3);