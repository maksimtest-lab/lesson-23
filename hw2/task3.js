// Описание: Необходимо загрузить несколько изображений с разных источников и получить информацию о статусе каждой загрузки (успешно или с ошибкой). Используйте Promise.allSettled для выполнения всех загрузок и получения результатов.

const images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Remains_of_night_club_in_Kochani_after_the_fire_VOA-full.jpg/1280px-Remains_of_night_club_in_Kochani_after_the_fire_VOA-full.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Farrukh_Beg._Sultan_Ibrahim_Adil_Shah_II_Khan_hawking._Page_from_St._Petersburg_Album._Bijapur_ca.1590-95_%2828%2C7x15%2C6cm%29_Institute_of_Oriental_Studies_St._Petersburg.jpg/800px-thumbnail.jpg',
    'https://via.placeholder.com/150/f66b97',
]

async function fetchImage(url) {
    try {
        // Симуляция загрузки изображения
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch image from ${url}`);
        }
        return `Image from ${url} loaded successfully`;
    } catch (error) {
        throw new Error(`Error loading image from ${url}: ${error.message}`);
    }
}

Promise.allSettled(images.map(url => fetchImage(url)))
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Image ${index + 1}: ${result.value}`);
            } else {
                console.log(`Image ${index + 1}: ${result.reason}`);
            }
        });
    });
