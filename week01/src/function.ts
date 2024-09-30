// 1
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(1, 2)); // 3

// 2
function sum2(a: number, b?: number, c?: number): number {
    return a + (b ?? 0) + (c ?? 0);
}

console.log(sum2(10)); // 10
console.log(sum2(10, 20)); // 30
console.log(sum2(10, 20, 30)); // 60

// 3
let sum3: (a: number, b?: number, c?: number) => number;

sum3 = function (a, b, c) {
    return a + (b ?? 0) + (c ?? 0);
}

console.log(sum2(10)); // 10
console.log(sum2(10, 20)); // 30
console.log(sum2(10, 20, 30)); // 60


// 4
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

const introduce = (): Developer | Person => {
    return { name: "Kim", age: 20, skill: "React"};
}

let kim = introduce();

const isDeveloper = (target: Developer | Person): target is Developer => {
    return (target as Developer).skill !== undefined;
};

if (!isDeveloper(kim)){
    console.log(kim.age);
} else {
    console.log(kim.skill);
}