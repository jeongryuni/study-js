// arrow expression(function)
// 함수 표현식
// const printName = function (name) {
//     console.log(name);
// };

// // 화살표 함수 표현식
// const printNameArrow = (name) => {
//     console.log(name);
// };

// // 함수 호출
// printName("John"); // 함수 표현식 호출
// printNameArrow("Jane"); // 화살표 함수 표현식 호출

// 두 정수의 덧셈 결과 출력

const add = (number1, number2, callback) => {
    if (callback) {
        callback(number1 + number2);
    }
    return number1 + number2;
};

add(1, 4, (result) => {
    console.log(result);
});

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력

// const multply = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 * number2);
//     }

//     return number1 * number2;
// };

// const result = multply(3, 5, (result) => {
//     console.log(result * 2);
// });

// 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력

const fullname = (first_name, last_name, callback) => {
    if (callback) {
        callback(first_name + last_name);
    }

    return first_name + last_name;
};

// const result = fullname("1", "23", (result) => {
//     console.log(result + "님");
// });

// // 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// // 개수가 5개 이하라면 true 아니면 false
const price = (product_price, total, callback) => {
    if (callback) {
        callback(total / product_price);
    }
    return (count = total / product_price);
};

const boolean = price(1000, 5000, (boolean) => {
    console.log(boolean <= 5);
});

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 결제 완료, false일 경우 결제 취소 출력
// 가상의 결제 정보

const setstatus = (price, status, callback) => {
    if (callback) {
        callback(status ? `${price}원 결제 완료` : `${price}원 결제 취소`);
    }
};

setStatus(3000, false, (message) => {
    console.log(message);
});
