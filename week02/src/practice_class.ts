class Developer {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생상자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  sayHi() {
    console.log(`Hi, I'm ${this.name}`, this.age, this.position);
  }
}

class Developer2 {
  constructor(public name: string, protected age: number, private position: string) {
  }

  sayHi() {
    console.log(`Hi, I'm ${this.name}`, this.age, this.position);
  }
}

class FrontEndDeveloper extends Developer {
  protected react: boolean;

  constructor(name: string, age: number, position: string, react: boolean) {
    super(name, age, position);
    this.react = react;
  }

  sayHi() {
    super.sayHi();
    if (this.react) {
      console.log('I can use React');
    }
  }
}

export { FrontEndDeveloper };