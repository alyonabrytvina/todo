import React, { useMemo, useState } from 'react';
import {
  Box, List, Paper,
} from '@mui/material';
import { Todo } from '../../store/reducers/todoReducer';
import { UseTypedSelector } from '../../hooks/UseTypesSelector';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import './TodoList.scss';
import { Filter } from '../Filter/Filter';

export const TodoList: React.FC = () => {
  const todosState = UseTypedSelector((state) => state.todo.todos);
  const [selectedOption, setSelectedOption] = useState('all');

  const onTags = (filter: string): void => {
    setSelectedOption(filter);
  };

  const filteredTodos = useMemo(() => (
    todosState
      .filter((todo) => {
        switch (selectedOption) {
          case 'active':
            return !todo.completed;
          case 'completed':
            return todo.completed;
          case 'all':
          default:
            return todo;
        }
      })
  ), [todosState, selectedOption]);

  return (
    <Box sx={{
      width: '80%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
    >
      <Filter onTags={onTags} todosState={todosState} selectedOption={selectedOption} />
      <Paper elevation={10} id="paper">
        <List
          className="list"
          sx={{
            position: 'relative',
            // display: 'flex',
            // flexDirection: 'column',
            height: '300px',
            padding: '10px',
          }}
        >
          {Array.isArray(filteredTodos) ? filteredTodos.map((todo: Todo) => (
            <TodoListItem
              key={todo.id}
              todoValue={todo}
            />
          )) : ''}
        </List>
      </Paper>
    </Box>
  );
};
