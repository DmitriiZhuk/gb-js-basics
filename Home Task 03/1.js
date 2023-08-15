"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

const inputNum = 6;
const inputPow = 3;

const getPowCube = (num, pow) => Math.pow(num, pow);
console.log(`Число ${inputNum} в степени ${inputPow} = ${getPowCube(inputNum, inputPow)}`);