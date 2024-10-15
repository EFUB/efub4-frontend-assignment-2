// 제네릭 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let strA: StringNumberSwitch<number>;

let numB: StringNumberSwitch<string>;


// ex1
type IsStringType<T> = T extends string ? string[] : number[];

type T1 = IsStringType<string>;
type T2 = IsStringType<number>;

const a: T1 = ['str', 'str2', 'str3'];
const b: T2 = [1, 2, 3];

function removeSpaces<T>(text: T): T extends string ? string : undefined {
  if (typeof text === 'string')
    return text.replaceAll(' ', '') as any;
  return undefined as any;
} // any 단언 -> 당연히 좋지 않음, 함수 오버로딩 사용

// 오버로드 시그니처 사용
function upgradeRemoveSpaces<T>(text: T): T extends string ? string : undefined;

function upgradeRemoveSpaces(text: any) {
  if (typeof text === 'string')
    return text.replaceAll(' ', '');
  return undefined;
}

let c: StringNumberSwitch<number | string>;
// 유니온이 적용되어 결과는 string | number

// Exclude 조건부 타입 구현

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>
/*
* exclude <number, string>
* exclude <string, string>
* exclude <boolean, string>
*/

// infer: 조건부 타입 내에서 특정 타입을 추론, 해당하는 형태의 리턴값을 타입으로 추론. 추론이 불가능하다면 거짓으로 판단
type ReturnType<T> = T extends () => infer R ? R : never;

type FuncA = () => string;
type FuncB = () => number;

type tA = ReturnType<FuncA>; // string
type tB = ReturnType<FuncB>; // number