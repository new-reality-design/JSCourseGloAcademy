'use strict';

let money,
  start = function() {
    do {
      money = prompt('Ваш месячный доход? Укажите сумму в цифрах.', '50000');
    } while (isNaN(money) || money === '' || money === null);
  };

start();

let appData = {
  income: {},
  addIncome: [], //Доп.доходы
  expenses: {}, //Доп.расходы
  addExpenses: [], //Возможные расходы
  deposit: false,
  mission: 150000,
  period: 6,
  budget: money,
  budgetDay: 0,
  expensesMonth: 0,
  budgetMonth: 0,
  asking: function() {
    //расспрос пользователя именно тут
    let addExpenses = prompt(
      'Перечислите возможные расходы за рассчитываемый период через запятую.',
      'Бытовые расходы, Транспорт'
    );
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
  }
};
//4) Функции getExpensesMonth, getAccumulatedMonth, getTargetMonth, getStatusIncome - сделать методами объекта AppData
let expenses1, expenses2;
let getExpensesMonth = function() {
  let sum = 0,
    question;
  //let sum1, sum2;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      expenses1 = prompt(
        'Введите обязательную статью расходов?',
        'Транспорт и квартплата'
      );
    } else {
      expenses2 = prompt(
        'Введите обязательную статью расходов?',
        'Расходы на питание'
      );
    }
    do {
      question = prompt('Во сколько это обойдется?', '10000');
    } while (
      isNaN(question) ||
      question === '' ||
      question === 0 ||
      question === null
    );
    sum += +question;
  }
  return sum;
};
// if (i === 1) {

//   do {
//     sum2 = +prompt('Во сколько это обойдется?', '10000');
//   } while (isNaN(sum2) || sum2 === '' || sum2 === 0 || sum2 === null);
// }
//let monthlyExpenses1, monthlyExpenses2;

//Сумма расходов за месяц
/*function getExpensesMonth() {
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
} */

let expensesAmount = getExpensesMonth(); //Тут- результ. вызова Ф.
let budgetMonth = money - appData.expensesAmount;

//Посчитать за сколько месяцев будет достигнута цель mission
let finishMission = appData.mission / budgetMonth,
  budgetDay = budgetMonth / 30,
  budgetDayRound = Math.floor(budgetDay);

//Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth() {
  return money - expensesAmount;
}
getAccumulatedMonth();
let accumulatedMonth = getAccumulatedMonth();

//За какой период будет достигнута цель
function getTargetMonth() {
  let getSum = appData.mission / accumulatedMonth;
  if (getSum <= 0) {
    console.log('“Цель не будет достигнута.”');
  } else {
    getSum = Math.floor(getSum);
    console.log('Cрок достижения цели в месяцах: ' + getSum);
    return getSum;
  }
}
getTargetMonth();

//Накопления за "период" - число месяцев произвольное
appData.period = 4;
console.log('Накопления за период в ' + appData.period + ' месяца/цев:');
console.log(accumulatedMonth * appData.period);

//Вывод-
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
