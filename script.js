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
    let addExpenses = prompt(
      'Перечислите возможные расходы за рассчитываемый период через запятую.',
      'Бытовые расходы, Транспорт'
    );
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    let expenses1, question;
    for (let i = 0; i < 2; i++) {
      expenses1 = prompt(
        'Введите обязательную статью расходов?',
        'Транспорт и квартплата'
      );
      do {
        question = prompt('Во сколько это обойдется?', '10000');
      } while (
        isNaN(question) ||
        question === '' ||
        question === 0 ||
        question === null
      );
      appData.expenses[expenses1] = question;
    }
  },
  /////
  getExpensesMonth: function() {
    for (let key in appData.expenses) {
      console.log(key);
      appData.expensesMonth += +appData.expenses[key];
    }
  },

  ////////Накопления за месяц (Доходы минус расходы)
  getAccumulatedMonth: function() {
    return money - appData.expensesMonth;
  },
  ////////За какой период будет достигнута цель
  getTargetMonth: function() {
    return appData.mission / appData.getAccumulatedMonth();
  },
  ///////
  getStatusIncome: function() {
    if (budgetDay >= 800) {
      return '“Высокий уровень дохода”';
    } else if (budgetDay >= 300 && budgetDay < 800) {
      return '“Средний уровень дохода”';
    } else if (budgetDay > 0 && budgetDay < 300) {
      return '“Низкий уровень дохода”';
    } else {
      return '“Что-то пошло не так”';
    }
  }
};
appData.asking();
appData.getExpensesMonth();
appData.getTargetMonth();
appData.getStatusIncome();
//4) Функции getExpensesMonth, getAccumulatedMonth, getTargetMonth, getStatusIncome - сделать методами объекта AppData
//let expenses1, expenses2;

//let expensesMonth = appData.getExpensesMonth(); /////!!!!!!!!!!!!!!
console.log('Расходы за месяц: ' + appData.expensesMonth); //Тут- результ. вызова Ф.

//Тут была getAccumulatedMonth

//Тут была getTargetMonth

let budgetDay = appData.getAccumulatedMonth() / 30;

//Посчитать за сколько месяцев будет достигнута цель mission
if (appData.getTargetMonth() > 0) {
  console.log(
    'Cрок достижения цели в месяцах: ' + Math.floor(appData.getTargetMonth()) //lesson 4
  );
} else {
  //getSum = ;
  console.log('“Цель не будет достигнута.”');
}

//Накопления за "период" - число месяцев произвольное
appData.period = 4;
console.log('Накопления за период в ' + appData.period + ' месяца/цев:');
console.log(appData.getAccumulatedMonth() * appData.period);

//Вывод-
//Тут была getStatusIncome
console.log(appData.getStatusIncome());
