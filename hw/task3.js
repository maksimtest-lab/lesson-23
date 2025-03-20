// Напишите функцию getRandomBoolean, которая возвращает промис, разрешающийся случайным булевым значением (true/false) через заданное количество миллисекунд. Используйте setTimeout для задержки разрешения промиса.

const getRandomBoolean = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.random() > 0.5);
        }, ms);
    });
}

console.log('start');

getRandomBoolean(1000).then((result) => {
    console.log(result);
});

console.log('end');