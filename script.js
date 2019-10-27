'use strict';

let money;

let start = function() {
  do {
    money = prompt('Ваш месячный доход? Укажите сумму в цифрах.', '50000');
  } while (isNaN(money) || money === '' || money === null);
};
start();

let addExpenses = prompt(
  'Перечислите возможные расходы за рассчитываемый период через запятую.',
  'Бытовые расходы, Транспорт'
);

let deposit = confirm('Есть ли у вас депозит в банке?');

let income = 'Фриланс, парт-тайм';

const showTypeOf = function(data) {
  console.log(data, typeof data);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let monthlyExpenses1, monthlyExpenses2;

//Сумма расходов за месяц
const getExpensesMonth = function() {
  let sum = 0,
    sum1,
    sum2;

  for (let i = 0; i < 2; i++) {
    //Временное условие x 2
    if (i === 0) {
      monthlyExpenses1 = prompt(
        'Введите обязательную статью расходов?',
        'Транспорт и квартплата'
      );
      do {
        sum1 = +prompt('Во сколько это обойдется?', '15000');
      } while (isNaN(sum1) || sum1 === '' || sum1 === 0 || sum1 === null);
    }
    if (i === 1) {
      monthlyExpenses2 = prompt(
        'Введите обязательную статью расходов?',
        'Расходы на питание'
      );
      do {
        sum2 = +prompt('Во сколько это обойдется?', '10000');
      } while (isNaN(sum2) || sum2 === '' || sum2 === 0 || sum2 === null);
    }
  }
  sum += sum1 + sum2;
  return sum;
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
console.log(getStatusIncome());

//Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth() {
  return money - expensesAmount;
}
getAccumulatedMonth();
let accumulatedMonth = getAccumulatedMonth();

//За какой период будет достигнута цель
function getTargetMonth() {
  let getSum = mission / accumulatedMonth;
  if (getSum <= 0) {
    console.log('“Цель не будет достигнута.”');
  } else {
    getSum = Math.floor(getSum);
    console.log('Cрок достижения цели в месяцах:' + getSum);
    return getSum;
  }
}
getTargetMonth(); //mission, accumulatedMonth
// console.log('Cрок достижения цели в месяцах:');
// console.log(getTargetMonth());

//Накопления за "период" - число месяцев произвольное
period = 4;
console.log('Накопления за период в ' + period + ' месяца/цев:');
console.log(accumulatedMonth * period);

//Cрок достижения цели в месяцах (значение округлить в меньшую сторону)
/*switch (true) {
    case mission / accumulatedMonth <= 0:
      console.log('“Цель не будет достигнута.”');
      break;
    case mission / accumulatedMonth > 1:
      return Math.floor(mission / accumulatedMonth);
  }*/

// accumulatedMonth = (mission / accumulatedMonth) <= 0 ?
//console.log('“Что-то пошло не так”') : mission / accumulatedMonth;
