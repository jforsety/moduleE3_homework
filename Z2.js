/*Написать функцию, которая принимает на входе любое число (но не больше 1 000),
определяет, является ли оно простым, и выводит простое число или нет.
Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.*/

function definition_number(number) {
    if ((number < 2) || (number > 1000)) {
        return "Данные неверны!";
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                console.log("Не является простым!")
                return false;
            }
        }
        console.log("Является простым!")
        return true;

    }
}
// Генерация случайного числа и вызов функции с ним.
let max_number = 1500;
let example_number = Math.floor(Math.random( ) * (max_number+1));
console.log(definition_number(example_number))
