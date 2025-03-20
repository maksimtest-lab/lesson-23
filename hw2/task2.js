// Описание: Есть асинхронная операция, и нужно ограничить максимальное время ее выполнения. Используйте Promise.race, чтобы выполнить операцию и отменить её, если она занимает слишком много времени

function withTimeout(promise, timeout) {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Operation timed out')), timeout)
        )
    ]);
}

// Пример использования:
const asyncOperation = new Promise((resolve) =>
    setTimeout(() => resolve('Operation completed'), 3000) // Асинхронная операция (выполняется 3 секунды)
);

const timeout = 2000; // Ограничиваем время выполнения до 2 секунд

withTimeout(asyncOperation, timeout)
    .then((result) => console.log(result))
    .catch((error) => console.error(error.message));