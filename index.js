console.log('a');
console.log('b');
console.log('c');

// Пример на задержку

// console.log('Начало');

// function delay() {
//     for (let i = 0; i < 10000000000; i++) {}
//     console.log('Середина');
// }

// delay();

// console.log('Конец');
// const timteOutId = setTimeout((name, age) => {
//     console.log(`Привет, меня зовут ${name}. Мне ${age} лет.`);
// });

// // setTimeout(sayHello, 6000, 'Ivan', 30);


// let count = 0;

// const intervalId = setId(() => {
//     console.log(++count);
//     if (count === 5) {
//         clearInterval(intervalId);
//         clearTimeout(timteOutId);
//     }
// }, 1000);

// -------------------------

// function fetchUser(callback) {
//     setTimeout(() => {
//         const user = {
//             name: 'Ivan',
//             age: 30,
//             id: 1,
//         };
//         console.log('Задача 1 выполнилась');

//         callback(user.id);
//     }, 1000)
// }

// function fetchUserPermission(callback, userId) {
//     setTimeout(() => {
//         console.log('Задача 2 выполнилась');
//         console.log(`UserId: ${userId}`);

//         callback();
//     }, 1000)
// }

// function fetchUserBuilding(callback) {
//     setTimeout(() => {
//         console.log('Задача 3 выполнилась');

//         callback();
//     }, 1000)
// }

// fetchUser((userId) => {
//     fetchUserPermission(() => {
//         fetchUserBuilding(() => {
//             console.log('Все задачи выполнены');
//         });
//     }, userId);
// });


// -------------------------

// const foo = () => {
//     console.log('First');
// }

// const bar = () => {
//     setTimeout(() => {
//         console.log('Second');
//     }, 1000);
// }

// const baz = () => {
//     console.log('Third');
// }

// foo();
// bar();
// baz();

// -------------------------
// function fetchUser() {
//     const user = {
//         name: 'Ivan',
//         age: 30,
//         id: 1,
//     };
//     console.log('Задача 1 выполнилась');

//     // callback(user.id);
//     return user;
// }

// const promise = new Promise((resolve, reject) => {
//     const isSuccess = true;

//     if (isSuccess) {
//         // resolve('Выполнено успешно');
//         resolve(fetchUser());
//     } else {
//         reject('Ошибка');
//     }
// });

// // console.log(promise);

// promise.then(
//     (result) => console.log(result),
//     (error) => console.log(error)
// ).catch(
//     (error) => console.log(error)

// ).finally(() => {
//     console.log('finally');
// });

// -------------------------

// function fetchUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const user = {
//                 name: 'Ivan',
//                 age: 30,
//                 id: 1,
//             };

//             resolve(user);

//         }, 1000)
//     })
// }


// function fetchUserPermission(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const permissions = {
//                 admin: true,
//                 operator: false,
//                 manager: true
//             }

//             console.log(`UserId: ${userId}`);
//             resolve(permissions);

//         }, 1000)
//     })
// }

// function fetchUserBuilding() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`Is user admin - ${permissions.admin}`);
//             console.log(`Is user operator - ${permissions.operator}`);
//             console.log(`Is user manager - ${permissions.manager}`);
//             const buildings = [
//                 {id: 1, name: 'Building 1'},
//                 {id: 2, name: 'Building 2'},
//                 {id: 3, name: 'Building 3'}
//             ]

//             resolve(buildings);

//         }, 1000)
//     })
// }

// fetchUser()
//     .then((user) => fetchUserPermission(user.id))
//     .then((permissions) => fetchUserBuilding())
//     .then((buildings) => console.log(buildings))
//     .finally(() => console.log('Цепочка вызовов'));


// -------------------------

// console.log('1');

// setTimeout(() => {
//     console.log('2');
// }, 1000);

// const promise = new Promise((resolve) => {
//     console.log('3');
//     resolve();
// });

// promise.then(() => console.log('4'));

// console.log('5');

// -------------------------
console.log('1');

setTimeout(() => {
    console.log('2');
}, 0);

const promise = new Promise((resolve) => {
    console.log('3');
    resolve();
});

promise.then(() => console.log('4'));
Promise.resolve().then(() => console.log('5'));

console.log('6');

setTimeout(() => {
    console.log('7');
}, 0);

