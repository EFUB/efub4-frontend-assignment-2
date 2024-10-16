import { Todo } from '../types';
import { useTodoDispatch } from '../hooks/useTodoDispatch';

interface Props extends Todo {
  // onClickDelete: (id: number) => void;
}

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();
  // const onClickButton = () => {props.onClickDelete(props.id)};
  return <div>
    {props.id + 1}번: {props.content};
    <button onClick={() => dispatch.onClickDelete(props.id)}>삭제</button>
  </div>;
}