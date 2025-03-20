// Задание 1. Проверить доступность нескольких ресурсов

// Описание: Есть список URL-адресов ресурсов, нужно проверить их доступность, отправив HEAD-запрос на каждый из них. Используйте Promise.all, чтобы выполнить все HEAD-запросы параллельно и получить результаты.


const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
];

const checkResourcesAvailability = async () => {
    try {
        const responses = await Promise.all(urls.map(url => fetch(url, { method: 'HEAD' })));
        const availableResources = responses.map((response, index) => ({
            url: urls[index],
            status: response.status,
        }));
        return availableResources;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

checkResourcesAvailability()
    .then(result => console.log(result))
    .catch(error => console.error(error));