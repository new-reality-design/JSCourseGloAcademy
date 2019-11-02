'use strict';

let money,
  start = function() {
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
  percentDeposit: 0,//Проценты на депозит, прибыль от банка
  moneyDeposit: 0,//Сумма, сколько откладывается на депозитные счет
  mission: 100000,
  period: 6,
  budgetDay: 0,
  expensesMonth: 0,
  budgetMonth: 0,
  asking: function() {

      if(confirm('Есть ли у вас дополнительный источник заработка?')){
        let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Парт-тайм');
        let cashIncome = prompt('Сколько получается так заработать в месяц?', 10000);
        appData.income[itemIncome] = cashIncome;
      }

      let addExpenses = prompt(
      'Перечислите возможные расходы за рассчитываемый период через запятую:',
      'Ремонт, лекарства, одежда, огненная вода, волшебные грибы.'
    );
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');    
    for (let i = 0; i < 2; i++) {
      let expensesItems, cashExpenses;
      expensesItems = prompt(
        'Введите обязательную статью расходов?',
        'Карты, деньги, два ствола.'
      );
      do {
        cashExpenses = +prompt('Во сколько это обойдется?', '10000');
      } while (
        isNaN(cashExpenses) ||
        cashExpenses === '' ||
        cashExpenses === 0 ||
        cashExpenses === null
      );
      appData.expenses[expensesItems] = cashExpenses; //Куда.сохраняется[ЧтоСохраняется:Ключ]=ЧтоСохраняется:значение;
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
  getInfoDeposit: function(){
    if(appData.deposit){
      appData.percentDeposit = prompt('Какой процент от суммы вам начисляется за ваш банковский депозит?', '2.5%');
      appData.moneyDeposit = prompt('Какую сумму вы откладываете каждый месяц на депозитный счёт?');
    }
  },
  //Метод для умножения чистого дохода- нa период (в месяцах).
  calculateSavedMoney: function(){
    appData.budgetMonth * appData.period;
  }

};
//Вызов методов appData.asking
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
//
appData.getTargetMonth();
appData.getStatusIncome();
//
console.log('Расходы за месяц: ' + appData.expensesMonth); //Оставить

//Посчитать за сколько месяцев будет достигнута цель накоплений- mission appData.mission / appData.budgetMonth
//if (appData.getTargetMonth() > 0) {
if (appData.mission / appData.budgetMonth > 0) {
  //!!!///
  console.log(
    'Cрок достижения цели в месяцах: ' +
      Math.floor(appData.mission / appData.budgetMonth) //lesson 4
  );
} else {
  console.log('“Цель не будет достигнута.”');
} //Оставить

//Накопления за "любой период" - число месяцев произвольное
// console.log('Накопления за период в ' + appData.period + ' месяца/цев:');
// console.log(appData.budgetMonth * appData.period);//DISABLE

//Результат уровня доходов
console.log(appData.budgetDay); //Оставить ///!!///
//console.log(appData);
//console.log('Наша программа включает в себя данные:');
for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key + ' -со значением: ' + appData[key]);
}
appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calculateSavedMoney());