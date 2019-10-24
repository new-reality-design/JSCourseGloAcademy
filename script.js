'use strict';

//1
let question = prompt('Ваш месячный доход? Укажите сумму в цифрах.');
let money = parseFloat(question);

function isNumeric(money) {
  return !isNaN(parseFloat(money)) && Number.isFinite(money);
}
if (isNumeric(money)) {
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
let income = 'помощь соседям, присмотр за животными';

const showTypeOf = function(data) {
  console.log(data, typeof data); //remain
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(income.length);
//5
let monthlyExpenses1 = prompt(
  'Какие обязательные ежемесячные расходы у вас есть?'
);
let totalExpenses1 = prompt('Во сколько это обойдется?');
let totalExpensesNum1 = parseFloat(totalExpenses1);

let monthlyExpenses2 = prompt(
  'Какие другие обязательные ежемесячные расходы у вас есть?'
);
let totalExpenses2 = prompt('Во сколько это обойдется?');
let totalExpensesNum2 = parseFloat(totalExpenses2);

//6
let budgetMonth = money - (totalExpensesNum1 + totalExpensesNum2);
//console.log('доход за месяц: ', budgetMonth);

//7
let mission = 150000; //Сумма к накоплению

//Посчитать за сколько месяцев будет достигнута цель mission
let finishMission = mission / budgetMonth;
console.log('Цель будет достигнута за ', Math.ceil(finishMission), ' месяц/a'); //remain

//7-a
let period = 12; //Период в месяцах

//8
let budgetDay = budgetMonth / 30;
let budgetDayRound = Math.floor(budgetDay);
//console.log('Бюджет на день: ', budgetDayRound);

//9
let getStatusIncome = function() {
  if (budgetDayRound >= 800) {
    return '“Высокий уровень дохода”';
  } else if (budgetDayRound >= 300 && budgetDayRound < 800) {
    return '“Средний уровень дохода”';
  } else if (budgetDayRound > 0 && budgetDayRound < 300) {
    return '“Низкий уровень дохода”';
  } else {
    return '“Что-то пошло не так”';
  }
};
console.log(getStatusIncome()); //remain

// 23-10-19 1)
//Сумма расходов за месяц
function getExpensesMonth(a, b) {
  return totalExpensesNum1 + totalExpensesNum2;
}
getExpensesMonth(totalExpensesNum1, totalExpensesNum2);
// console.log('Тут- функция getExpensesMonth');
// console.log(getExpensesMonth());

//Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth(c, d) {
  return money - getExpensesMonth();
}
getAccumulatedMonth(money, getExpensesMonth());
//console.log('Тут- функция getAccumulatedMonth');
//console.log(getAccumulatedMonth());

const accumulatedMonth = getAccumulatedMonth();
//console.log('accumulatedMonth: ', accumulatedMonth);

function getTargetMonth(e, f) {
  return mission / accumulatedMonth;
}
getTargetMonth(mission, accumulatedMonth);

//Накопления за период
period = 4;

console.log('Накопления за период в ' + period + ' месяца/цев:');
console.log(accumulatedMonth + period);

//Cрок достижения цели в месяцах (значение округлить в меньшую сторону)
console.log('Cрок достижения цели в месяцах:');
console.log('getTargetMonth', Math.floor(getTargetMonth()));
