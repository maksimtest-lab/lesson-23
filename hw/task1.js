// Создайте функцию mapAsync, которая принимает массив и колбэк-функцию, а возвращает промис, который разрешается в новый массив, содержащий результаты асинхронных операций, выполненных с помощью переданного колбэка.

mapAsync = (array, callback) => {
    return new Promise((resolve, reject) => {
        const mappedArray = [];
        let count = 0;

        for (let i = 0; i < array.length; i++) {
            const index = i;
            callback(array[index], (result) => {
                mappedArray[index] = result;
                count++;
                if (count === array.length) {
                    resolve(mappedArray);
                }
            });
        }
    });
}

mapAsync([1, 2, 3], (num, callback) => {
    setTimeout(() => {
        callback(num * 2);
    }, 1000);
}).then((result) => {
    console.log(result); // [2, 4, 6]
});