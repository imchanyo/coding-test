const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map((item) => Number(item));

let a = input[0];
let b = input[1];

 
while(a % b !== 0){
    let r = a % b;
    
    if(r !== 0){
        a = b;
        b = r;
    }
}

// 최대공약수
console.log(b);

// 최소공배수
// 두 자연수의 곱을 최대공약수로 나누면 최소공배수를 구할 수 있다.
console.log((input[0] * input[1]) / b);