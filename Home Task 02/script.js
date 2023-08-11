/*
Создать переменные positive и negative, в которые пользователь вводит с 
клавиатуры значения. Нужно попросить пользователя ввести положительное число в 
переменную positive и отрицательное в переменную negative. 
Перед тем, как положить значения в данные переменные необходимо их превратить 
в числа.
После ввода значений, необходимо вывести "Все значения верные.", если 
пользователь действительно ввел корректные значения, которые мы просили его 
ввести.
Если же пользователь где-то ввел неверное значение, то необходимо вывести 
в консоль "Одно или более значений некорректно.".
*/

const positive = Number.parseFloat(prompt("Введите положительное число"));
const negative = Number.parseFloat(prompt("Введите отрицательное число"));

if (positive > 0 && negative < 0) {
  console.log("Все значения верные.");
} else {
  console.log("Одно или более значений некорректно.");
}

/*
Необходимо переписать данный код, используя тернарный оператор.
Если есть какие-либо недочеты в коде, можете их исправить.
-->
<script>
  "use strict";

  let test = confirm("У вас много денег?");
  if (test === true) {
    console.log("Скоро будем у вас ;)");
  } else {
    console.log("До свидания.");
  }
</script>
*/

let test = confirm("У вас много денег?");
test === true
  ? console.log("Скоро будем у вас ;)")
  : console.log("До свидания.");

/*
  Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.*/

const userDay = Number.parseInt(prompt("Введите число между 1 и 32"));
if (userDay <= 10) {
  console.log(`Число ${userDay} попадает в первую декаду месяца.`);
} else if (userDay > 10 && userDay < 32) {
  const decade = Math.trunc(userDay / 10) + 1;
  console.log(`Число ${userDay} попадает в ${decade} декаду месяца.`);
} else {
  console.log(`Неверное значение`);
}
