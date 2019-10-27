'use strict';
// let question = prompt('Ваш месячный доход? Укажите сумму в цифрах.'),
//   money = parseFloat(question);

/*function isNumeric(money) {
  return !isNaN(parseFloat(money)) && Number.isFinite(money);
}
if (isNumeric(money)) {
} else {
  alert('Убедитесь что вы используете цифры и попробуйте снова');
  prompt('Ваш месячный доход? Пожалуйста, используйте цифры.');
} */
//
let money; // = +prompt('Ваш месячный доход? Укажите сумму в цифрах.', '50000');

let start = function() {
  money = prompt('Ваш месячный доход? Укажите сумму в цифрах.', '50000');
  while (isNaN(money) || money === '' || money === null) {
    money = prompt('Ваш месячный доход? Укажите сумму в цифрах.', '50000');
  }
};
start();
//
let addExpenses = prompt(
  'Перечислите возможные расходы за рассчитываемый период через запятую. (Бытовые расходы, Транспорт, Банковский депозит)'
);

let deposit = confirm('Есть ли у вас депозит в банке?');

let income = 'помощь соседям, присмотр за животными';

const showTypeOf = function(data) {
  console.log(data, typeof data); //remain
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let monthlyExpenses1, monthlyExpenses2;

//Сумма расходов за месяц
const getExpensesMonth = function() {
  let sum = 0; //лок.перем. для результ. суммир. обяз.расх, её будем возвр. при выз.Ф
  for (let i = 0; i < 2; i++) {
    //Временное условие x 2
    if (i === 0) {
      monthlyExpenses1 = prompt(
        'Введите обязательную статью расходов?',
        'Транспорт и квартплата'
      );
    }
    if (i === 1) {
      monthlyExpenses2 = prompt(
        'Введите обязательную статью расходов?',
        'Расходы на питание'
      );
    }

    sum += +prompt('Во сколько это обойдется?', '10000');
  }
  return sum; //totalExpensesNum1 + totalExpensesNum2;
};
let expensesAmount = getExpensesMonth(); //Тут- результ. вызова Ф.

let budgetMonth = money - expensesAmount;

let mission = 150000; //Сумма к накоплению

//Посчитать за сколько месяцев будет достигнута цель mission
let finishMission = mission / budgetMonth;

let period = 12; //Период в месяцах

let budgetDay = budgetMonth / 30;
let budgetDayRound = Math.floor(budgetDay);

const getStatusIncome = function() {
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

//Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth() {
  return money - expensesAmount;
}
getAccumulatedMonth();
const accumulatedMonth = getAccumulatedMonth();

//За какой период будет достигнута цель
function getTargetMonth() {
  return mission / accumulatedMonth;
}
getTargetMonth(); //mission, accumulatedMonth

//Накопления за "период" - число месяцев произвольное
period = 4;

console.log('Накопления за период в ' + period + ' месяца/цев:');
console.log(accumulatedMonth * period);

//Cрок достижения цели в месяцах (значение округлить в меньшую сторону)
console.log('Cрок достижения цели в месяцах:');
console.log(Math.floor(getTargetMonth()));
