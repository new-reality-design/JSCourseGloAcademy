'use strict';

//1 - £1200
let question = prompt('Ваш месячный доход? Укажите сумму в цифрах.');
let money = parseFloat(question);

function isNumeric(money) {
  return !isNaN(parseFloat(money)) && Number.isFinite(money);
}
if (isNumeric(money) === true) {
} else {
  alert('Убедитесь что вы используете цифры и попробуйте снова');
  prompt('Ваш месячный доход? Пожалуйста, используйте цифры.');
  //?как в случае ввода символов возвращать пользователя на первое окно ввода?
}

//2
let addExpenses = prompt(
  'Перечислите возможные расходы за рассчитываемый период через запятую. (Бытовые расходы, Транспорт, Банковский депозит)'
);
console.log(addExpenses.split(', '));

//3
let deposit = confirm('Есть ли у вас депозит в банке?');

//4
let income = 'зарплата, помощь соседям, присмотр за животными';

console.log('money: ', typeof money);
console.log('income: ', typeof income);
console.log('deposit: ', typeof deposit);

//5
let monthlyExpenses1 = prompt(
  'Какие обязательные ежемесячные расходы у вас есть?'
  //Бытовые расходы - 600
);
console.log('monthlyExpenses1: ', monthlyExpenses1);
let totalExpenses1 = prompt('Во сколько это обойдется?');
console.log('totalExpenses1: ', totalExpenses1);
let totalExpensesNum1 = parseFloat(totalExpenses1);
console.log('totalExpensesNum1: ', totalExpensesNum1);

let monthlyExpenses2 = prompt(
  'Какие другие обязательные ежемесячные расходы у вас есть?'
  //Банковский депозит - 200
);
console.log('monthlyExpenses2: ', monthlyExpenses2);
let totalExpenses2 = prompt('Во сколько это обойдется?');
console.log('totalExpenses2: ', totalExpenses2);
let totalExpensesNum2 = parseFloat(totalExpenses2);
console.log('totalExpensesNum2: ', totalExpensesNum2);

//6
let budgetMonth = money - (totalExpensesNum1 + totalExpensesNum2);
console.log('доход за месяц: ', budgetMonth);

//7
let mission = 5000; //Сумма к накоплению

let finishMission = mission / budgetMonth;
console.log('finishMission: ', Math.ceil(finishMission));

//8
let budgetDay = budgetMonth / 30;
let budgetDayRound = Math.floor(budgetDay);
console.log('budgetDay: ', budgetDayRound);

//9  (от 50 до 0 фунтов в день.)
if (budgetDayRound >= 50) {
  console.log('“Высокий уровень дохода”');
} else if (budgetDayRound >= 25 && budgetDayRound < 50) {
  console.log('“Средний уровень дохода”');
} else if (budgetDayRound > 0 && budgetDayRound < 25) {
  console.log('“Низкий уровень дохода”');
} else if (budgetDayRound <= 0) {
  console.log('“Что-то пошло не так”');
}
/*
Написать конструкцию условий	
Если budgetDay больше 800, то “Высокий уровень дохода”
Если budgetDay больше 300 и меньше 800, то сообщение “Средний уровень дохода”
Если budgetDay больше 0 и меньше 300 то в консоль вывести сообщение “Низкий уровень дохода”
Если отрицательное значение то вывести “Что то пошло не так”
учесть варианты 0, 300 и 800
*/
/*
*
*
*
*
*
*
*
*
let money = 1200; //Доход за месяц
let income = 'Овертайм, помощь соседям, присмотр за животными';
let period = 12; //Период в месяцах *.

console.log('"addExpenses" в нижнем регистре-');
console.log(addExpenses.toLowerCase());
console.log('"addExpenses" в виде массива-');
console.log(addExpenses.split(', '));

let budgetDay = money / 30;
*/
