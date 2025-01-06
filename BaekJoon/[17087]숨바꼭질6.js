const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function getGCD(a, b) {
  if (b === 0) {
    return a;
  }

  return getGCD(b, a % b);
}

const [N, S] = input[0]
  .trim()
  .split(" ")
  .map((item) => Number(item));

const children = input[1]
  .trim()
  .split(" ")
  .map((item) => Number(item));

let Ds = [];

children.forEach((item) => {
  Ds.push(Math.abs(item - S));
});

Ds.sort((a, b) => b - a);

let ans = Ds[0];

Ds.forEach((item) => {
  ans = getGCD(ans, item);
});

console.log(ans);
