import React, { useEffect, useState } from 'react';
import {
  Box, List, Paper, Typography,
} from '@mui/material';
import { Todo } from '../../store/reducers/todoReducer';
import { UseTypedSelector } from '../../hooks/UseTypedSelector';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import './TodoList.scss';
import { Filter } from '../Filter/Filter';
import { Tags } from '../Tags/Tags';
import { AddTodo } from '../AddTodo/AddTodo';
import { DeleteButtons } from '../DeleteButtons/DeleteButtons';
import { selector } from '../../selectors/selectors';

enum SET_TIMEOUT { DEFAULT = 100}

export const TodoList: React.FC = () => {
  const filteredTodos = UseTypedSelector(selector);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setTodos(filteredTodos), SET_TIMEOUT.DEFAULT);
    return () => clearTimeout(timer);
  }, [filteredTodos]);

  return (
    <Box m="0 50px 10px 150px">
      <Tags />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt={10}
        width="100%"
        padding="20px 10px"
      >
        <AddTodo />
        <Filter />
      </Box>
      <Paper
        elevation={10}
        id="paper"
        sx={{
          height: '400px',
        }}
      >
        <List
          className="list"
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
          }}
        >
          {!!todos.length ? todos.map((todo: Todo) => (
            <TodoListItem
              key={todo.id}
              todoValue={todo}
            />
          )) : (
            <Typography
              sx={{
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              You haven&apos;t had tasks yet.
            </Typography>
          )}
        </List>
      </Paper>
      <DeleteButtons />
    </Box>
  );
};
