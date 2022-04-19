import React from 'react';
import { List } from '@mui/material';
import { Todo } from '../../store/reducers/todoReducer';
import { UseTypedSelector } from '../../hooks/UseTypesSelector';
import { TodoListItem } from '../TodoListItem/TodoListItem';

export const TodoList: React.FC = () => {
  const todosState = UseTypedSelector((state) => state.todo.todos);

  return (
    <List sx={{
      width: '80%',
      height: '600px',
      overflow: 'scroll',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      {Array.isArray(todosState) ? todosState.map((todo: Todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
        />
      )) : ''}
    </List>
  );
};
