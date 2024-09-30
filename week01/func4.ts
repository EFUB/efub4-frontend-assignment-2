const isDeveloper = (target: Developer | Person): target is Developer => {
  return (target as Developer).skill !== undefined;
};

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
if (!isDeveloper(kim)) {
  console.log(kim.age);
} else {
  console.log(kim.skill);
}
