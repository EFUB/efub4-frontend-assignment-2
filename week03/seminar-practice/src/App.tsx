import React, { useReducer, useRef } from 'react';
import TodoEditor from './components/TodoEditor';
import { Todo } from './types';
import TodoItem from './components/TodoItem';


type Action = | {
  type: 'ADD';
  data: {
    id: number;
    content: string;
  }
} | {
  type: 'DELETE';
  id: number;
}

// 액션 객체: 서로소 유니온 타입으로 정의, ADD or DELETE 제외한 다른 액션이 들어올 경우 error
function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case 'ADD': {
      return [...state, action.data];
    }
    case 'DELETE': {
      return state.filter((todo) => todo.id !== action.id);
    }
  }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null);

export const TodoDispatchContext = React.createContext <{
    onClickAdd: (text: string) => void;
    onClickDelete: (id: number) => void;
  }
  | null>(null);

function App() {

  const [todos, dispatch] = useReducer(reducer, []); // Todo[]: Todo 타입의 배열
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    // 이 안에 들어가는 객체를 줄일 수 있을 것 같은데 ~~
    dispatch(
      {
        type: 'ADD',
        data: {
          id: idRef.current++,
          content: text,
        },
      },
    );
  };


  const onClickDelete = (id: number) => {
    dispatch({ type: 'DELETE', id: id });
  };

  return (
    <>
      <h1>Todo</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{ onClickAdd, onClickDelete }}>
          <TodoEditor>
            <div>할 일을 입력하세요</div>
          </TodoEditor>
          <div>
            {todos.map((todo) => (
              <TodoItem key={todo.id} {...todo} />),
            )}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </>
  );
};

export default App;
