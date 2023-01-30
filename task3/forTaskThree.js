/**
 * Задание 3
 * Создайте функцию, которая на консоль выводит значение контекста. 
 * Поменяйте настройки проекта таким образом, чтобы значение контекста функции было равно undefined.
 */

function simpleExampleShowUndefined() {
    'use strict'
    console.log(this);
}

simpleExampleShowUndefined();