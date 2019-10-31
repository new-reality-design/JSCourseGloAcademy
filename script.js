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
      console.log('KeY', key);
      appData.expensesMonth += +appData.expenses[key];
    }
  },

  ////////ЧИСТЫЕ накопления за месяц (Доходы минус расходы) "getAccumulatedMonth"
  getAccumulatedMonth: function() {
    return money - appData.expensesMonth;
  },
  ////////За сколько месяцев будет достигнута цель? "getTargetMonth"
  getTargetMonth: function() {
    return appData.mission / appData.getAccumulatedMonth();
  },
  ///////Оценка уровня дневного бюджета. "getStatusIncome"
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
///////Вызов методов appData.asking
appData.asking();
appData.getExpensesMonth();
appData.getAccumulatedMonth();
appData.getTargetMonth();
appData.getStatusIncome();

//////////
console.log('Расходы за месяц: ' + appData.expensesMonth);

let budgetDay = appData.getAccumulatedMonth() / 30; //Бюджет на день= Результат
//ЧИСТЫХ накоплений за месяц= поделённый на 30.

//Посчитать за сколько месяцев будет достигнута цель накоплений- mission
if (appData.getTargetMonth() > 0) {
  console.log(
    'Cрок достижения цели в месяцах: ' + Math.floor(appData.getTargetMonth()) //lesson 4
  );
} else {
  console.log('“Цель не будет достигнута.”');
}

//Накопления за "любой период" - число месяцев произвольное
appData.period = 4;
console.log('Накопления за период в ' + appData.period + ' месяца/цев:');
console.log(appData.getAccumulatedMonth() * appData.period);

//Вывод-
//Тут была getStatusIncome
console.log(appData.getStatusIncome());
