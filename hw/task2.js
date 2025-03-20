// Напишите функцию forEachAsync, которая принимает массив и колбэк-функцию. Функция должна вызывать переданный колбэк для каждого элемента массива асинхронно.

async function forEachAsync(array, callback) {
    for (let item of array) {
        await callback(item);
    }
}

const items = [1, 2, 3];

console.log('start');

forEachAsync(items, (item) => {
    console.log(item);
});

console.log('end');