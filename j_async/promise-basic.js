// https://jsonplaceholder.typicode.com/users
// zipcode만 추출하기

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            console.log(user.address.zipcode);
        });
    });

// https://jsonplaceholder.typicode.com/users
// zipcode만 추출하기

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            const { zipcode } = user.address; // 추출한 zipcode 값을 새로운 변수 zipcode에 할당합니다
            test(zipcode);
        });
    });

function test(zipcode) {
    console.log(zipcode);
}
// https://jsonplaceholder.typicode.com/users
// zipcode만 추출하기

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            console.log(user.address.zipcode);
        });
    });

// https://jsonplaceholder.typicode.com/users
// zipcode만 추출하기

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            const { zipcode } = user.address; // 추출한 zipcode 값을 새로운 변수 zipcode에 할당합니다
            test(zipcode);
        });
    });

function test(zipcode) {
    console.log(zipcode);
}
