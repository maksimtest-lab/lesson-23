// Напишите функцию parallel, которая принимает массив функций-колбэков и вызывает их одновременно. Функция должна возвращать промис, который разрешается в массив результатов асинхронных операций, выполненных с помощью переданных колбэков.

function parallel(callbacks) {
    return new Promise((resolve, reject) => {
        const results = [];
        let count = 0;

        for (let i = 0; i < callbacks.length; i++) {
            const index = i;
            callbacks[index]((result) => {
                results[index] = result;
                count++;
                if (count === callbacks.length) {
                    resolve(results);
                }
            });
        }
    });
}


console.log('start');

// Возвращает через три секунды результат, пока последний не отработает

parallel([
    (callback) => {
        setTimeout(() => {
            callback('First');
        }, 1000);
    },
    (callback) => {
        setTimeout(() => {
            callback('Second');
        }, 2000);
    },
    (callback) => {
        setTimeout(() => {
            callback('Third');
        }, 3000);
    }
]).then((results) => {
    console.log(results);
})


console.log('end');
