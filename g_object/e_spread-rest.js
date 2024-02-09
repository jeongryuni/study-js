// const user = {
//     id: 1,
//     name: "ryun",
// };

// // 비구조화 할당(구조 분해)
// const { id, name } = user;
// console.log(id, name);

// const { id: number, name, age = 10 } = user;
// console.log(number, name, age);

// 객체 스프레드

// 기존의 사용자 객체
// const user = {
//     id: 1,
//     name: "ryun",
// };

// 전개 연산자(...)를 사용하여 객체를 복제
// let userUpdated = { ...user };

// // 복제된 객체 출력
// console.log(userUpdated);

// 기존의 사용자 객체
// const user = {
//     id: 1,
//     name: "ryun",
// };

// // 전개 연산자를 사용하여 객체를 복제하고 새로운 속성 추가
// let userUpdated = { ...user, age: 20 };

// // 복제된 객체에 새로운 속성이 추가된 것을 출력
// console.log(userUpdated);

// 이미 해당 프로퍼티가 존재하면 수정된다.

// const user = {
//     id: 1,
//     name: "ryun",
// };

// let userUpdated = { ...user, name: "ro" };

// console.log(userUpdated);

// rest
const user = {
    id: 1,
    name: "ryun",
};

const userUpdated = { ...user, age: 20 };

const { age, ...rest } = userUpdated;
console.log(age, rest);
