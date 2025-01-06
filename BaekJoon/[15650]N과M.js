function dfs(N, M, arr) {
  if (arr.length === M) return arr.join(" ");
  const results = [];
  for (let i = 1; i <= N; i++) {
    if (arr.includes(i)) continue;
    if (arr.length && i < arr.at(-1)) continue;
    const res = dfs(N, M, [...arr, i]);
    if (res.length === 0) continue;
    results.push(res);
  }
  return results.join("\n");
}

const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const result = dfs(N, M, []);

console.log(result.trim());
