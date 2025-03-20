// Реализуйте функцию eventEmitter, которая представляет собой простую реализацию паттерна "Издатель-Подписчик" (Publisher-Subscriber). Функция должна иметь методы subscribe, unsubscribe и publish. Подписчики должны быть оповещены о каждом событии, которое было опубликовано.

// Подробнее о паттерне попробуйте найти самостоятельно (уметь гуглить хороший навык😉)
function eventEmitter() {
    const subscribers = {}; // объект для хранения подписчиков на события

    return {
        // Метод подписки
        subscribe(event, callback) {
            if (!subscribers[event]) {
                subscribers[event] = []; // создаем массив для нового события
            }
            subscribers[event].push(callback); // добавляем подписчика
            return () => this.unsubscribe(event, callback); // возвращаем функцию отписки
        },

        // Метод отписки
        unsubscribe(event, callback) {
            if (!subscribers[event]) return;
            subscribers[event] = subscribers[event].filter(cb => cb !== callback); // удаляем подписчика
        },

        // Метод публикации событий
        publish(event, data) {
            if (!subscribers[event]) return;
            subscribers[event].forEach(callback => callback(data)); // оповещаем всех подписчиков
        }
    };
}

// Пример использования
const emitter = eventEmitter();

const unsubscribe = emitter.subscribe('message', (data) => {
    console.log(`Подписчик 1 получил: ${data}`);
});

emitter.subscribe('message', (data) => {
    console.log(`Подписчик 2 получил: ${data}`);
});

emitter.publish('message', 'Привет, мир!'); // Оба подписчика получат уведомление

unsubscribe(); // Отписываем первого подписчика

emitter.publish('message', 'Привет снова!'); // Только второй подписчик получит уведомление
