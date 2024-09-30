// 1
interface Sum {
    (a: number, b: number): number;
}

const sum: Sum = (a, b) => {
    return a + b;
};

console.log(sum(1, 2)); // 3

// 2
interface Person {
    name: string;
    age: number;
}

interface Me extends Person {
    phone: string;
}

const me: Me = {
    name: "bob",
    age: 24,
    phone: "010-1234-5678"
};

console.log(me);