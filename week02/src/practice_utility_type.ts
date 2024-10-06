interface Post {
  title: string,
  content: string,
  tags: string[];
  thumbnailUrl?: string;
}


// Partial<T> : 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 변환

type Partial<T> = {
  [key in keyof T]?: T[key];
} // T에 할당된 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 변환. 맵드 타입 활용

const draft: Partial<Post> = {
  title: 'title',
  content: 'content',
};


// Required<T> : 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 변환
type Required<T> = {
  [key in keyof T] -?: T[key];
}

const withThumbnailPost: Required<Post> = {
  title: 'title',
  content: 'content',
  tags: ['tag1', 'tag2'],
  thumbnailUrl: 'www.a.com',
};


// Readonly<T> : 특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 변환
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
}

const readonlyPost: Readonly<Post> = {
  title: 'title',
  content: 'content',
  tags: ['tag1', 'tag2'],
};

// readonlyPost.content = 'Error';


// Pick<T,K> : 특정 객체 타입으로부터 프로퍼티만 선택
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
}

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: 'title',
  content: 'content',
}; // title과 content만 프로퍼티로 가질 수 있음


// ex2
interface Todo {
  title: string,
  description: string,
  completed: Boolean,
}

type TodoPick = Pick<Todo, 'title' | 'description'>;

const todo: TodoPick = {
  title: 'title',
  description: 'description',
};


// Omit<T, K> : 특정 객체 타입으로부터 특정 프로퍼티만 제거
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, 'title'> = {
  content: 'content',
  tags: ['tag1', 'tag2'],
};

// Ex3
interface upgradeTodo extends Todo {
  createdAt: number;
}

type TodoOmit = Omit<upgradeTodo, 'description'>

const todoOmit: TodoOmit = {
  title: 'title',
  completed: false,
  createdAt: 0,
};

type TodoInfo = Omit<upgradeTodo, 'completed' | 'createdAt'>

const todoInfo: TodoInfo = {
  title: 'title',
  description: 'description',
};


// Record<K, V>: 모든 키 K가 값타입 V를 가지는 객체, 타입의 프로퍼티를 다른 타입에 매핑시키는데 사용
type Record<K extends keyof any, V> = {
  [key in K]: V;
}


type Thumbnail = {
  large: {
    url: string;
  }
  medium: {
    url: string;
  }
  small: {
    url: string;
  }
}

type upgradeThumbnail = Record<'large' | 'medium' | 'small', { url: string }>


// Exclude<T, U> : T에서 U를 제거하는 타입
type Exclude<T, U> = T extends U ? never : T;

type excA = Exclude<string | boolean, string>; // boolean;

// Extract<T, U> : T에서 U를 추출하는 타입
type Extract<T, U> = T extends U ? T : never;

type extA = Extract<string | boolean, string>; // string;

// ReturnType<T> : T에 할당된 함수의 반환값 타입을 추출하는 타입, T가 함수인 경우 적용
function funcA() {
  return 'hello';
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>; // string
type ReturnB = ReturnType<typeof funcB>; // number

