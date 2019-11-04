'use strict';
//1 Восстановить порядок книг.
let collectBook = document.querySelectorAll('.books'),
  bookItems = document.querySelectorAll('.book');
console.log('collectBook: ', collectBook);
console.log('bookItems: ', bookItems);
collectBook[0].insertBefore(bookItems[1], bookItems[0]);
collectBook[0].insertBefore(bookItems[4], bookItems[3]);
collectBook[0].insertBefore(bookItems[2], null);
//2 Заменить картинку заднего фона на другую из папки image
let bgImg = document.getElementsByTagName('body');
bgImg[0].setAttribute(
  'style',
  'background-image: url(./image/you-dont-know-js.jpg)'
);
//console.log('bgImg: ', bgImg);
//3 Исправить заголовок в книге 3
let newLink = bookItems[4].querySelectorAll('h2 a');
newLink[0].textContent = 'Книга 3. this и Прототипы Объектов';
//4 Удалить рекламу со страницы
let advert = document.getElementsByClassName('adv');
console.log('advert: ', advert);
advert[0].remove();
//5 Восстановить порядок глав во второй и пятой книге
console.log(document.children);
let correctChaptUl = document.querySelectorAll('ul'),
  correctChaptLi = document.querySelectorAll('li');
//Book2
correctChaptUl[1].insertBefore(correctChaptLi[8], correctChaptLi[16]);
correctChaptUl[1].insertBefore(correctChaptLi[13], correctChaptLi[15]);
correctChaptUl[1].insertBefore(correctChaptLi[14], correctChaptLi[10]);
correctChaptUl[1].insertBefore(correctChaptLi[12], correctChaptLi[14]);
//Book5
correctChaptUl[4].insertBefore(correctChaptLi[40], correctChaptLi[38]);
correctChaptUl[4].insertBefore(correctChaptLi[39], correctChaptLi[40]);
correctChaptUl[4].insertBefore(correctChaptLi[45], correctChaptLi[39]);
correctChaptUl[4].insertBefore(correctChaptLi[41], correctChaptLi[44]);

console.log('correctChapters: ', correctChaptLi);
console.log('correctChaptersul: ', correctChaptUl);

//6- в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
let newChapterEntry = document.createElement('li');
newChapterEntry.textContent = 'Глава 8: За пределами ES6';
correctChaptUl[5].appendChild(newChapterEntry);
correctChaptUl[5].insertBefore(correctChaptLi[56], null);
