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
    // appData.expenses = appData.sum;
    // (appData.sum = 0), appData.question, appData.expenses1, appData.expenses2;
    //let sum1, sum2;
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.expenses1 = prompt(
          'Введите обязательную статью расходов?',
          'Транспорт и квартплата'
        );
      } else {
        appData.expenses2 = prompt(
          'Введите обязательную статью расходов?',
          'Расходы на питание'
        );
      }
      do {
        appData.question = prompt('Во сколько это обойдется?', '10000');
      } while (
        isNaN(appData.question) ||
        appData.question === '' ||
        appData.question === 0 ||
        appData.question === null
      );
      appData.sum += +appData.question;
    }
    return appData.sum;
  }
};
console.log('EXPENSES', appData['expenses']);
//4) Функции getExpensesMonth, getAccumulatedMonth, getTargetMonth, getStatusIncome - сделать методами объекта AppData
//let expenses1, expenses2;

//////////////////////////////////////////////

appData.getExpensesMonth = function() {
  let sum = 0,
    question,
    expenses1,
    expenses2;
  //let sum1, sum2;
  //for (let i = 0; i < 2; i++) {
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
  //}
  return sum;
};

let expensesMonth = appData.getExpensesMonth(); //Тут- результ. вызова Ф.
console.log('Расходы за месяц: ' + expensesMonth);

//Накопления за месяц (Доходы минус расходы)
appData.getAccumulatedMonth = function() {
  return money - expensesMonth;
};

//За какой период будет достигнута цель
appData.getTargetMonth = function() {
  return appData.mission / appData.getAccumulatedMonth();
};

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
appData.getStatusIncome = function() {
  if (budgetDay >= 800) {
    return '“Высокий уровень дохода”';
  } else if (budgetDay >= 300 && budgetDay < 800) {
    return '“Средний уровень дохода”';
  } else if (budgetDay > 0 && budgetDay < 300) {
    return '“Низкий уровень дохода”';
  } else {
    return '“Что-то пошло не так”';
  }
};
console.log(appData.getStatusIncome());
