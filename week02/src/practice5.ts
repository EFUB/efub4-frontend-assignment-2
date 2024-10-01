type IsStringType<T> = T extends string ? string[] : number[];

type T1 = IsStringType<string>;
type T2 = IsStringType<number>;

const a: T1 = ['EFUB', '프론트엔드', '짱~'];
const b: T2 = [1, 2, 3];