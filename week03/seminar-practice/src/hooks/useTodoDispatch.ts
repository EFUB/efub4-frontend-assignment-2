import { TodoDispatchContext } from '../App';
import { useContext } from 'react';

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);

  if (!dispatch)
    throw new Error('Cannot find TodoDispatchContext');

  return dispatch;
}