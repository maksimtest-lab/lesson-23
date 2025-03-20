// Напиши функцию timeout, которая принимает асинхронную функцию и время ожидания в миллисекундах. Если асинхронная функция не завершится в течение указанного времени, то функция timeout должна прервать выполнение и вернуть ошибку.

function timeout(asyncFunction, timeoutMs) {
    return async (...args) => {
        // Создаем промис для тайм-аута
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Время ожидания истекло')), timeoutMs)
        );

        // Запускаем асинхронную функцию и тайм-аут одновременно
        const resultPromise = asyncFunction(...args);

        // Возвращаем то, что завершится первым: либо результат, либо ошибка тайм-аута
        return Promise.race([resultPromise, timeoutPromise]);
    };
}

// Пример использования
const asyncTask = async () => {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 2000)); // имитация задержки
    return 'Задача выполнена';
};

const wrappedTask = timeout(asyncTask, 1000);

wrappedTask()
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
