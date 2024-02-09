// 두 정수의 덧셈 결과 출력
// const add = (number1, number2) => {
//     console.log(number1 + number2);
// };
// add(1, 3);

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
const multply = (number1, number2, callback) => {
    if (callback) {
        callback(number1 * number2);
    }
    return number1 * number2;
};

const total = multply(2, 5, (result) => {
    console.log(result * 2);
});

// 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력
const fullname = (firstname, lastname, callback) => {
    if (callback) {
        callback(firstname + lastname);
    }
    return firstname + lastname;
};

const welcome = fullname("김", "정륜", (named) => {
    console.log(named + "님");
});

// // 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// // 개수가 5개 이하라면 true 아니면 false
const product_price = (price, allcost, callback) => {
    if (callback) {
        callback(allcost / price);
    }
    return allcost / price;
};

const boolean = product_price(1000, 10000, (count) => {
    console.log(count < 5);
});

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 결제 완료, false일 경우 결제 취소 출력
// 가상의 결제 정보

const product = (price, pdstatus, callback) => {
    if (callback) {
        callback(pdstatus ? `${price}원 결제완료` : `${price}:원 결제취소`);
    }
};

const cash = product(1000, true, (result) => {
    console.log(result);
});

// 두 수를 받고 몫과 나머지
const calc = (num1, num2) => {
    if (num2 === 0) {
        return console.log("0으로 나눌 수 없습니다.");
    }

    var share = num1 / num2;
    var rest = num1 % num2;

    return `몫:${share}, 나머지: ${rest}`;
};

var num1 = 10;
var num2 = 2;
result = calc(num1, num2);
console.log(result);

const quotientAndRemainder = (number1, number2, callback) => {
    const result = {
        quotient: Math.floor(number1 / number2),
        remainder: number1 % number2,
    };

    if (callback) {
        callback(result.quotient, result.remainder);
    }

    return result;
};

const result = quotientAndRemainder(5, 0, (quotient, remainder) => {
    console.log("Quotient:", quotient);
    console.log("Remainder:", remainder);
});
