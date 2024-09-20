console.log("hello typescript!");
const a: number = 1;

// 실습1
function sum(x: number, y: number): number {
  return x + y;
}
console.log(sum(1, 2));

// 실습2
let sumOptional = (a: number, b?: number, c?: number): number => {
  return a + (b ?? 0) + (c ?? 0);
};

console.log(sumOptional(10));
console.log(sumOptional(10, 20));
console.log(sumOptional(10, 20, 30));

// 실습3

let sum3: (a: number, b?: number, c?: number) => number;
sum3 = function (a, b, c) {
  return a + (b ?? 0) + (c ?? 0);
};

// 실습4
interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}
const introduce = (): Developer | Person => {
  return { name: "Kim", age: 20, skill: "React" };
};
let kim = introduce();
/* Kim을 매개변수로 받아 Kim의 타입이 Developer인지 판단하는
사용자 정의 타입 가드 함수 isDeveloper를 작성해주세요. */
function isDeveloper(p: Developer | Person): p is Developer {
  return (p as Developer).skill !== undefined;
}

if (!isDeveloper(kim)) {
  console.log(kim.age);
} else {
  console.log(kim.skill);
}

// 실습 - 인터페이스1

interface Sum {
  (a: number, b: number): number;
}
const sum4: Sum = (a, b) => {
  return a + b;
};

console.log(sum(1, 2));

// 실습 - 인터페이스2
interface Person {
  name: string;
  age: number;
}

interface Me extends Person {
  phone: string;
}
const me: Me = {
  name: "Yoonjin",
  age: 24,
  phone: "010-1234-5678",
};
