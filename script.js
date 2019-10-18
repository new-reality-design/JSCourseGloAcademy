let money = 1200; //Доход в месяц
let income = 'Овертайм, помощь соседям, присмотр за животными';
let addExpenses = 'Коммунальные услуги. Покупки. Транспорт. Одежда';
let deposit = true;
let mission = 3000; //Сумма к накоплению
let period = 12; //Период в месяцах

//1
console.log('Типы данных в переменных-');
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

//2
console.log('Длина строки "income"-');
console.log(income.length);

//3
console.log('Цель-');
console.log('За период длиной в ' + period + ' месяцев-');
console.log('я хочу накопить ' + mission + ' фунтов.');

//4
console.log('"addExpenses" в нижнем регистре-');
console.log(addExpenses.toLowerCase());
console.log('"addExpenses" в виде массива-');
console.log(addExpenses.split('. '));
//console.log('В одну строку-');
//console.log(addExpenses.toLowerCase(), addExpenses.split('. '));

//5
let budgetDay = money / 30;
console.log('Дневной бюджет и результат-');
console.log(budgetDay);
console.log(money % 30);
