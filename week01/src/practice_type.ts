// number
let num1: number = 1;
let num2: number = 1.1;
let num3: number = 1e1;
let num4: number = NaN;
let num5: number = Infinity;
let num6: number = 0x1;
// string
let str1: string = 'hello';
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `${str1} world`;
// boolean
let bool1: boolean = true;
let bool2: boolean = false;
// any
// 타입 검사 하지 않음, 해당 값에 대한 type checking을 Off

let any1: any = 123;
any1 = 'hello';
any1 = true;
any1 = {};
let list: any[] = [1, true, 'free'];
list[1] = 100;
// unknown
// 타입 검사 함, 모든 타입의 값을 가질 수 있지만 값을 사용하기 이전에 반드시 어떤 타입인지 검사해야함
let value: unknown = 123;
// value++;
// value.toUpperCase();
// value.map(value);
// value.foobar();
let password: unknown = 1234;
if (typeof password === 'string') {
  password.toUpperCase();
}
if (typeof password === 'number') {
  // 조건
}
if (Array.isArray(password)) {
  const result = password.map((val) => {
    return val * 2;
  });
}
// never
// 불가능을 의미하는 타입, any를 포함한 어떤 타입의 값도 never 변수에 할당 불가능
// ex1: 함수에서 절대 반환하지 않는 값의 타입으로 사용
function func(): never {
  while (true) {}
}

// ex2: 조건문에서 철저한 일치를 보장하기 위해 사용 (예외 처리)
type User = 'student' | 'teacher';

function checkUser(user: User) {
  switch (user) {
    case 'student':
      return true;
    case 'teacher':
      return true;
    default:
      const check: never = user;
      throw 'wrong user type';
  }
}

// void
// 함수에서 반환값이 없을 때 사용, undefined 이외의 타입은 할당 불가
function print(): void {
  console.log('hello');
}

// undefined
// 아직 값이 할당되지 않은 상태
let lunch: undefined = undefined;
// lunch = 'pasta'

// null
// 값이 없음을 의도적으로 명시
let nullValue: null = null;

// 리터럴
let numA: 1 = 1; // 1 외에는 저장 불가
let strB: 'hello' = 'hello'; // hello 외에는 저장 불가

// 배열
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ['apple', 'banana', 'cherry'];
let multiArr: (number | string)[] = [1, 'hello', 3];
let doubleArr: number[][] = [[1], [2], [3]];

// 튜플
let x: [string, number];
x = ['hello', 10];

let tuple: [1, number];
tuple = [1, 100];
// tuple = [2, 100]; // Error

// 객체: object 타입
let obj: object = {
  id: 1,
  name: 'hello',
};
// user.id = 2; // Error

// 객체: 객체 리터럴 타입
type Student = {
  id: number;
  name: string;
};
let stu: Student = {
  id: 1,
  name: 'hello',
};

// 일회성
let stu2: { id: number; name: string } = {
  id: 2,
  name: 'world',
};
// Optional property
type Person = {
  name: string;
  age?: number;
};
let person: Person = {
  name: 'hello',
};
// Readonly property
let person2: { readonly id: number; name?: string } = {
  id: 1,
  name: 'hello',
};

// user.id = 3; // Error

// Type Alias
// 스코프가 다르다면 중복된 이름의 여러 타입 별칭 생성 가능

// Index Signature
type userType = {
  [key: string]: string | number | boolean;
};

let usr: userType = {
  name: 'hello',
  age: 10,
  isStudent: true,
};

// Enum
enum Color {
  Red,
  Green,
  Blue,
}

const c: Color = Color.Green;

// upcasting & downcasting
let up: number = 1;
let up2: 1 = 1;

up = up2;
// up2 = up; // Error

// SuperType & SubType
type Animal = {
  name: string;
  age: number;
};

type Dog = {
  name: string;
  age: number;
  breed: string;
};

let animal: Animal = { name: 'Fido', age: 5 };
let dog: Dog = { name: 'Fis', age: 10, breed: 'Shiba Inu' };

animal = dog;
// dog = animal // Error

// 타입 추론
function sayHello1() {
  return 'hello'; // 리턴값 string으로 추론
}

function sayHello2(message = 'hello') {
  return message; // 매개변수 & 리턴값 string으로 추론
}

// 타입 단언
let doggy = {} as Dog;

// 타입 좁히기 (타입 가드)
function checkVal(value: number | string) {
  if (typeof value === 'string') {
    value.toUpperCase();
  } else if (typeof value === 'number') {
    value.toFixed(2);
  }
}
