let sum: (a: number, b?: number, c?: number) => number;
sum = function (a, b, c) {
  return a + (b ?? 0) + (c ?? 0);
};
console.log(sum(10));
console.log(sum(10, 20));
console.log(sum(10, 20, 30));
