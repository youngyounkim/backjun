// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 첫째 줄에 A+B를 출력한다.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

const solution = input => {
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    console.log(A+B);
};

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){ //이 안에 솔루션 코드 작성
    solution(input);
    process.exit();
});

