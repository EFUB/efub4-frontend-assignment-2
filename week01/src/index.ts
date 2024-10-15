import functionPractice from './practice_function';
import interfacePractice from './practice_interface';

const { sum, add, isDeveloper } = functionPractice;
const { sum2, me } = interfacePractice;

console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6

console.log(add(1)); // 1
console.log(add(1, 2)); // 3
console.log(add(1, 2, 3)); // 6

let jung = me.name;
console.log(jung);
