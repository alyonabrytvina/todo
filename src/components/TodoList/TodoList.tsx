import React from 'react';
import { List, Paper } from '@mui/material';
import TodoListItem from '../TodoListItem/TodoListItem';
import { Todo } from '../../store/reducers/todoReducer';
import { UseTypedSelector } from '../../hooks/UseTypesSelector';

export const TodoList: React.FC = () => {
  const todosState = UseTypedSelector((state) => state.todo.todos);

  return (
    <List sx={{
      width: '80%',
      height: '600px',
      overflow: 'scroll',
      position: 'relative',
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
