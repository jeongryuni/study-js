// setTimeout은 0초를 설정해도 1ms 후 실행되도록 설계되어 있다.
// setTimeout(() => {
//     console.log("timer");
// }, 0);

// setImmediate(() => {
//     console.log("check");
// });

// const fs = require("fs");
// fs.readFile("test.txt", (result) => {
//     setTimeout(() => {
//         // 1. 타이머 등록
//         console.log("timer");
//     });

//     setImmediate(() => {
//         //  2. 체크 등록
//         console.log("check"); // 3. 폴에서는 setImmediate 실행이 우선
//     });
// });

// tick이 모두 작업된 후 다음 절차로 넘어간다.
// const setTick = () => {
//     process.nextTick(setTick); // setTick이라는 함수 안에서 setTick 호출
// }; // nextTick(setTick)에 들어가는 setTick은 콜백함수 => 무한 루프

// setTick();

// setTimeout(() => {
//     // 순서상 타이머가 가장 먼저 처리가 되어 타이머쪽에 setTimetout 설정
//     console.log("timer"); // setTick이 setTimeout보다 먼저 실행 되기때문에 timer는 실행될 수 없다.
// }); // 실행하면 nextTick으로 계속 무한루프가 돌기 때문에 콘솔에 아무것도 출력되지 않는다.

// 1. 타이머 큐에 등록
// 2. 검사 큐에 등록
// 3. 틱 큐에 등록

// 1. 틱 큐 비우기
// 1-1. 1번 틱 안에 타이머2를 처리하고자 타이머1도 처리된다.
// 1-2. 1번 틱 안에 검사2를 처리하고자 검사1도 처리된다.
// 2. 2번 틱 처리
setTimeout(() => {
    console.log("timer1");
}, 0);
setImmediate(() => {
    console.log("check1");
});
process.nextTick(() => {
    // 1번째 틱
    setTimeout(() => console.log("timer2"), 0);
    setImmediate(() => {
        process.nextTick(() => console.log("tick2")); // 2번째 틱
        console.log("check2");
    });
    console.log("tick1"); // 콜 스택에서 처리하므로 1번째 틱에 들어왔는지 출력
});

// 출력결과
// tick1
// timer1
// timer2
// check1
// check2
// tick2

//tick2가 바로 되지 않은 이유 => tick1이 실행 되어야 tick2가 실행되기 때문에
//=> tick1 안에 setTimeout과 setImmediate가 들어가있음

// timer1, 2가 tick1다음으로 나온 이유 => 등록이 timer1,2가 되고 timer큐 작업이 끝나야 다음 절차로 넘어감
// check1,2는 폴에서 작업되는 것이 아니므로 순서상 타이머가 먼저 처리가 된다.
// 폴에서 통신이나 DB할 것이 있는지 검사 후 없으므로 check로 오고 등록된 check가 실행
// tick1 처리 끝
// tick2 마지막에 실행
// (이벤트 루프 절차)
