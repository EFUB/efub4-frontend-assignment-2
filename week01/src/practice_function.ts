// function

const sum = (a: number, b?: number, c?: number): number => {
  return a + (b ?? 0) + (c ?? 0);
};

console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6

let add: (a: number, b?: number, c?: number) => number;

add = (a, b, c) => {
  return a + (b ?? 0) + (c ?? 0);
};

console.log(add(1)); // 1
console.log(add(1, 2)); // 3
console.log(add(1, 2, 3)); // 6

// 사용자 정의 타입 가드

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const introduce = (): Developer | Person => {
  return { name: 'Jung', age: 24, skill: 'JavaScript' };
};

let jung = introduce();

const isDeveloper = (target: Developer | Person): target is Developer => {
  return (target as Developer).skill !== undefined;
};

if (isDeveloper(jung)) {
  console.log(jung.skill);
} else {
  console.log(jung.age);
}

const functionPractice = {
  sum,
  add,
  isDeveloper,
};

export default functionPractice;
