interface Person {
  name: string;
  age: number;
}
interface Me extends Person {
  phone: string;
}
const me: Me = {
  name: "Jin",
  age: 24,
  phone: "010-1414-1414",
};

console.log(me);
