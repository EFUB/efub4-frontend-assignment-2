interface Sum {
  (a: number, b: number): number;
}

const sum2: Sum = (a, b) => {
  return a + b;
};
console.log(sum2(1, 2)); // 3

interface Person {
  name: string;
  age: number;
}

interface Me extends Person {
  phone: string;
}

const me: Me = {
  name: 'jung',
  age: 24,
  phone: '010-1234-5678',
};
console.log(me);

const interfacePractice = {
  sum2,
  me,
};

export default interfacePractice;
