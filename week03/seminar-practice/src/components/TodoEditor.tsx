import React, { useState, useRef, ReactElement, useContext } from 'react';
import { TodoDispatchContext } from '../App';
import { useTodoDispatch } from '../hooks/useTodoDispatch';


interface Props {
  // onClickAdd: (text: string) => void;
  children: ReactElement;
}

const TodoEditor = (props: Props) => {
  const [text, setText] = useState('');
  const dispatch = useTodoDispatch();

  const onClickButton = () => {
    dispatch?.onClickAdd(text); // optional chaining
    setText('');
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      {props.children}
      <input value={text} onChange={(e) => onChangeInput(e)} />
      <button onClick={onClickButton}>추가</button>
    </div>

  );
};

export default TodoEditor;