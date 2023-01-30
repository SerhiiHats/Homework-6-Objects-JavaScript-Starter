/**
 * Задание 2
 * В сценарии с помощью литерала создайте объект с двумя свойствами firstName и age.
 * Добавьте в этот объект метод sayHello, который выведет на экран сообщение «Привет, меня зовут X, мне Y лет.». 
 * Используя значения свойств вместо X и Y.
 **/

let simpleUser = {
    firstName: "Olga",
    age: 25,
}

simpleUser.sayHello = function(){
    alert(`Привет, меня зовут ${this.firstName}, мне ${this.age} лет.`);
    console.log(`Привет, меня зовут ${this.firstName}, мне ${this.age} лет.`);
}

simpleUser.sayHello();