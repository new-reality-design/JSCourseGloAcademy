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
}

//2
let addExpenses = prompt(
  'Перечислите возможные расходы за рассчитываемый период через запятую. (Бытовые расходы, Транспорт, Банковский депозит)'
);
console.log(addExpenses.toLowerCase().split(', '));

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
let totalExpenses1 = prompt('Во сколько это обойдется?');
let totalExpensesNum1 = parseFloat(totalExpenses1);

let monthlyExpenses2 = prompt(
  'Какие другие обязательные ежемесячные расходы у вас есть?'
  //Банковский депозит - 200
);
let totalExpenses2 = prompt('Во сколько это обойдется?');
let totalExpensesNum2 = parseFloat(totalExpenses2);

//6
let budgetMonth = money - (totalExpensesNum1 + totalExpensesNum2);
console.log('доход за месяц: ', budgetMonth);

//7
let mission = 5000; //Сумма к накоплению

//Посчитать за сколько месяцев будет достигнута цель mission
let finishMission = mission / budgetMonth;
console.log('finishMission: ', Math.ceil(finishMission));

//8
let budgetDay = budgetMonth / 30;
let budgetDayRound = Math.floor(budgetDay);
console.log('budgetDay: ', budgetDayRound);

//9  (Остаток- от 50 до 0 фунтов в день.)
if (budgetDayRound >= 800) {
  console.log('“Высокий уровень дохода”');
} else if (budgetDayRound >= 300 && budgetDayRound < 800) {
  console.log('“Средний уровень дохода”');
} else if (budgetDayRound > 0 && budgetDayRound < 300) {
  console.log('“Низкий уровень дохода”');
} else if (budgetDayRound <= 0) {
  console.log('“Что-то пошло не так”');
}
