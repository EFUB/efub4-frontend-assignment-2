// 인덱스드 액세스 타입

interface Post {
  title: string;
  content: string;
  author: {
    id: number,
    name: string,
    age: number;
  };
}

function printAuthorInfo(author: Post['author']) { // 인자로 Post의 author 프로퍼티를 모두 받아오는 것
  console.log(`${author.name}(${author.age})`);
}

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  }
}[];

const posts: PostList[number] = {
  title: 'title',
  content: 'content',
  author: {
    id: 1,
    name: 'name',
    age: 25,
  },
};

// 맵드 타입
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  // [key in 'id' | 'name' | 'age']?: User[key];
  [key in keyof User]?: User[key];
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};


// 템플릿 리터럴 타입

type Color = 'red' | 'black' | 'green';
type Animal = 'dog' | 'cat';

type ColorAnimal = `${Color} - ${Animal}`;
