/* Написать функцию, которая принимает число как аргумент и возвращает функцию,
которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.*/

// Задаем функцию, которая принимает первое число как аргумент.
function example_func(number1){
    // возвращаем функцию, которая принимает второе число в качестве аргумента.
    return function(number2){
        // возвращаем сумму двух чисел.
        return number1 + number2;
    };
}

// вывод в консоль суммы двух чисел.
console.log(example_func(5)(4));