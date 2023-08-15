"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

// Мы это не проходили, но мне показалось что, исходя из DRY  - так будет короче, чем описывать каждый раз заново по сути 4 раза одно и то же
class myMaths {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  getAddition() {
    return this.num1 + this.num2;
  }

  getDifference() {
    return Math.max(this.num1, this.num2) - Math.min(this.num1, this.num2);
  }

  getMultiplication() {
    return this.num1 * this.num2;
  }

  getDivision() {
    return this.num1 / this.num2;
  }
}

const myNums = new myMaths(12, 4);
myNums.getAddition();
myNums.getDifference();
myNums.getMultiplication();
myNums.getDivision();

// написал и подумал - что меньше кушает памяти, потому ниже задание в виде функций, без инициализации new instance

function getAddition(num1, num2) {
  console.log(`Результат сложения = ${num1 + num2}`);
}

function getDifference(num1, num2) {
  console.log(
    `Результат вычитания = ${Math.max(num1, num2) - Math.min(num1, num2)}`
  );
}

function getMultiplication(num1, num2) {
  console.log(`Результат умножения = ${num1 * num2}`);
}

function getDivision(num1, num2) {
  console.log(`Результат деления = ${num1 / num2}`);
}
