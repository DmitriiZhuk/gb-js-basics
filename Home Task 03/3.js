"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const userNumber1 = Number.parseInt(prompt("Введите число #1"));
const userNumber2 = Number.parseInt(prompt("Введите число #2"));
const userNumber3 = Number.parseInt(prompt("Введите число #3"));

const getMaxMin = (num1, num2, num3) => Math.max(num1, num2, num3);

console.log(
  `Максимальное значение среди чисел ${userNumber1}, ${userNumber2}, ${userNumber3} равно ${getMaxMin(
    userNumber1,
    userNumber2,
    userNumber3
  )}`
);
