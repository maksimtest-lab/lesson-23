// Напиши функцию <em>checkPrimeNumber</em>, которая принимает число n возвращает промис, разрешающийся с булевым значением, указывающим, является ли число n простым числом. Используйте цикл и асинхронный await для проверки числа на простоту.

function checkPrimeNumber(n) {
    return new Promise(async (resolve) => {
        isPrime = (await function () {
            let isPrime = true;
            for (let i = 2; i < n; i++) {
                if (n % i === 0) {
                    isPrime = false;
                    break;
                }
            }

            return isPrime;
        })();
        resolve(isPrime);
    });
}

checkPrimeNumber(13)
    .then((isPrime) => console.log(isPrime)) // true
    .catch((error) => console.error(error));

checkPrimeNumber(10)
    .then((isPrime) => console.log(isPrime)) // true
    .catch((error) => console.error(error));