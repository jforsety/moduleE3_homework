/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.*/


function parity_check(arrayValues){
    let even = 0,
        odd = 0,
        zero = 0;

    for (let i = 0; i < arrayValues.length; i++) {
        if (typeof arrayValues[i] === 'number' && !isNaN(arrayValues[i])) {
            if (arrayValues[i] === 0) {
                zero += 1;
            } else if (arrayValues[i] % 2 === 0) {
                even += 1;
            } else {
                odd += 1;
            }
        }
    }

    console.log('Четных элементов: ', even)
    console.log('Нечетных элементов: ', odd)
    console.log('Нулей: ', zero)
}

//Вызов функции используя случайный массив данных.
parity_check([1,2,3,null,undefined,'1',NaN,0]);
