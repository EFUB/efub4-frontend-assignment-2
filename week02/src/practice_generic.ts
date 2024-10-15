// ex1
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap('1', 2);


// ex2
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

const num = returnFirstValue([1, 2, 3]);
const str = returnFirstValue(['a', 'b', 'c']);


// ex3
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

const ret = returnFirstValue2([1, 'hello', 'here']); // number
const ret2 = returnFirstValue2(['hello', 1, 'here']); // string


// ex4
// T가 length라는 속성을 갖고 있어야 한다는 뜻 i.e, 배열이나 문자열 등
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

const len1 = getLength([1, 2, 3]); // 3
const len2 = getLength('hello'); // 5
const len3 = getLength({ length: 100 }); // 100

// map 함수 구현
function map<T>(arr: T[], callback: (item: T) => T): T[] {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map([1, 2, 3], (it) => it * 2);
// map([1,2,3], (it) => it.toString()); // Error, returnValue type is number[]


// 다른 타입으로 반환 가능하도록 수정
function map2<T, U>(arr: T[], callback: (item: T) => U): U[] {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map2([1, 2, 3], (it) => it.toString()); // string[]


// forEach 함수 구현
function forEach<T>(arr: T[], callback: (item: T) => void): void {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach([1, 2, 3], (it) => console.log(it));


// 인터페이스

interface Map<V> {
  [key: string]: V;
}

const stringMap: Map<string> = {
  key: 'value',
};

const numberMap: Map<number> = {
  key: 123,
};

// User 인터페이스 --> 제네릭 인터페이스로 업그레이드
interface Student {
  type: 'student'; // 엄격한 제한
  school: string;
}

interface Developer {
  type: 'developer';
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // if (user.profile.type !== 'student') {
  //   console.log('You are not a student');
  //   return;
  // }
  const school = user.profile.school;
  console.log(`Go to ${school}`);
}

const studentUser: User<Student> = {
  name: 'JJ',
  profile: {
    type: 'student',
    school: 'Ewha',
  },
};

goToSchool(studentUser);

const developerUser: User<Developer> = {
  name: 'JJ',
  profile: {
    type: 'developer',
    skill: 'React',
  },
};

// goToSchool(developerUser); // Error


// 제네릭 클래스
class List<T> {
  constructor(private list: T[]) {
  }

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List<number>([1, 2, 3]);
const stringList = new List<string>(['a', 'b', 'c']);


