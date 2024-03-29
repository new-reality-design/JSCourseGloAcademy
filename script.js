'use strict';
/**
 * 1) Сделать проверку при получении данных:
   - наименование дополнительного источника заработка
   - сумма дополнительного заработка
   - ввод статьи обязательных расходов
   - годовой процент депозита
   - сумма депозита

Что значит проверка данных: где должен быть текст там только текст, где цифры только цифры! 
Если проверку не прошло, то переспрашивать!

2) Возможные расходы (addExpenses) вывести строкой в консоль каждое слово с большой буквы слова разделены запятой и 
пробелом
 */
let money;
let start = function() {
  do {
    money = +prompt('Ваш месячный доход? Укажите сумму в цифрах.', '50000');
  } while (isNaN(money) || money === ' ' || money === null || money === 0);
};

start();

let appData = {
  budget: money, //0,
  income: {},
  addIncome: [], //Доп.доходы
  expenses: {}, //Доп.расходы
  addExpenses: [], //Возможные расходы
  deposit: false,
  percentDeposit: 0, //Проценты на депозит, прибыль от банка
  moneyDeposit: 0, //Сумма, сколько откладывается на депозитные счет
  mission: 100000,
  period: 6,
  budgetDay: 0,
  expensesMonth: 0,
  budgetMonth: 0,
  asking: function() {
    if (confirm('Есть ли у вас дополнительный источник заработка?')) {
      //Наименование  дополнительного источника заработка
      let itemIncome;
      do {
        itemIncome = prompt(
          'Какой у вас дополнительный заработок?',
          'Парт-тайм'
        );
      } while (
        !isNaN(parseFloat(itemIncome)) === true ||
        itemIncome === '' ||
        itemIncome === null
      );
      //Сумма дополнительного заработка
      let cashIncome;
      do {
        cashIncome = +prompt(
          'Сколько получается так заработать в месяц?',
          '10000'
        );
      } while (
        isNaN(cashIncome) ||
        cashIncome === ' ' ||
        cashIncome === null ||
        cashIncome === 0
      );
      appData.income[itemIncome] = cashIncome;
    }

    let addExpenses = prompt(
      'Перечислите возможные расходы за рассчитываемый период через запятую:',
      'Ремонт, лекарства, одежда, огненная вода, волшебные грибы.'
    );
    //addExpenses.join(',');
    /**
     *  addExpenses = appData.addExpenses;// = addExpenses.toLowerCase().split(','); /////
    for (let i = 0; i < appData.addExpenses.length; i++) {
      appData.addExpenses = appData.addExpenses[i][0].toUpperCase();
      console.log('11111111111addExpenses: ', appData.addExpenses.join(', '));
    }

    appData.addExpenses = addExpenses.toLowerCase().split(', '); /////
     */
    appData.addExpenses = addExpenses.toLowerCase().split(', '); /////
    //console.log('addExpenses2222222: ', addExpenses);
    let separateWords = appData.addExpenses.map(function(item) {
      return ' ' + item[0].toUpperCase() + item.slice(1).toLowerCase();
    });
    /////
    console.log(
      'Все слова с большой буквы, разделены запятой и пробелом: ',
      separateWords.toString() //.split(', ')
    );
    /////
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i = 0; i < 2; i++) {
      let itemExpenses, cashExpenses;
      //Ввод статьи обязательных расходов
      do {
        itemExpenses = prompt(
          'Введите обязательную статью расходов?',
          'Карты, деньги, два ствола.'
        );
      } while (
        !isNaN(parseFloat(itemExpenses)) === true ||
        itemExpenses === '' ||
        itemExpenses === null
      );
      do {
        //Сумма обязательных расходов
        cashExpenses = +prompt('Во сколько это обойдется?', '10000');
      } while (
        isNaN(cashExpenses) ||
        cashExpenses === '' ||
        cashExpenses === 0 ||
        cashExpenses === null
      );
      appData.expenses[itemExpenses] = cashExpenses; //Куда.сохраняется[ЧтоСохраняется:Ключ]=ЧтоСохраняется:значение;
    }
  },
  //
  getExpensesMonth: function() {
    for (let key in appData.expenses) {
      //console.log('Ключ', key);//Проверка имени ключа
      appData.expensesMonth += +appData.expenses[key];
    }
  },

  //ЧИСТЫЕ накопления за месяц (Доходы минус расходы) "getBudget"
  //Бюджет на день=
  //Результат ЧИСТЫХ накоплений за месяц= поделённый на 30.
  getBudget: function() {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  //За сколько месяцев будет достигнута цель? "getTargetMonth"
  getTargetMonth: function() {
    return appData.mission / appData.budgetMonth;
  },
  //”уровень дохода”. Оценка уровня дневного бюджета. "getStatusIncome"
  getStatusIncome: function() {
    if (appData.budgetDay >= 800) {
      return '“Высокий уровень дохода”';
    } else if (appData.budgetDay >= 300 && appData.budgetDay < 800) {
      return '“Средний уровень дохода”';
    } else if (appData.budgetDay > 0 && appData.budgetDay < 300) {
      return '“Низкий уровень дохода”';
    } else {
      return '“Что-то пошло не так”';
    }
  },
  //Метод-функция для получения информации о банковском депозите
  getInfoDeposit: function() {
    if (appData.deposit) {
      //Годовой процент депозита
      do {
        appData.percentDeposit = +prompt(
          'Какой процент от накопленной суммы начисляется за ваш банковский депозит?',
          '3'
        );
      } while (
        isNaN(appData.percentDeposit) ||
        appData.percentDeposit === ' ' ||
        appData.percentDeposit === null ||
        appData.percentDeposit === 0
      );
      //Сумма депозита
      do {
        appData.moneyDeposit = +prompt(
          'Какую сумму вы откладываете каждый месяц на депозитный счёт?',
          '2000'
        );
      } while (
        isNaN(appData.moneyDeposit) ||
        appData.moneyDeposit === ' ' ||
        appData.moneyDeposit === null ||
        appData.moneyDeposit === 0
      );
    }
  },
  //Метод для умножения чистого дохода- нa период (в месяцах).
  calculateSavedMoney: function() {
    return appData.budgetMonth * appData.period;
  }
};
//Вызов методов appData.asking
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
//
//appData.getStatusIncome();
//
console.log('Расходы за месяц: ' + appData.expensesMonth); //Оставить

//Посчитать за сколько месяцев будет достигнута цель накоплений- mission appData.mission / appData.budgetMonth
//if (appData.getTargetMonth() > 0) {
if (appData.mission / appData.budgetMonth > 0) {
  //!!!///
  console.log(
    'Cрок достижения цели в месяцах: ' + Math.floor(appData.getTargetMonth()) //lesson 4
  );
} else {
  console.log('“Цель не будет достигнута.”');
} //Оставить

//Накопления за "любой период" - число месяцев произвольное
// console.log('Накопления за период в ' + appData.period + ' месяца/цев:');
// console.log(appData.budgetMonth * appData.period);//DISABLE

//Результат уровня доходов
console.log(appData.getStatusIncome()); //Оставить ///!!///
//console.log(appData);
//console.log('Наша программа включает в себя данные:');
for (let key in appData) {
  console.log(
    'Наша программа включает в себя данные: ' +
      key +
      ' -со значением: ' +
      appData[key]
  );
}
appData.getInfoDeposit();
