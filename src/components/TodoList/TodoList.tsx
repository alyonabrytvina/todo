import React, { useEffect, useState } from 'react';
import {
  Box, List, Paper,
} from '@mui/material';
import { createSelector } from 'reselect';
import { Todo } from '../../store/reducers/todoReducer';
import { UseTypedSelector } from '../../hooks/UseTypesSelector';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import './TodoList.scss';
import { Filter } from '../Filter/Filter';
import { Tags } from '../Tags/Tags';
import { AddTodo } from '../AddTodo/AddTodo';
import { RootState } from '../../store/store';

enum SET_TIMEOUT { DEFAULT = 500}

enum Options {
    Active ='active',
    Completed = 'completed',
    All = 'all'
}

const selector = createSelector(
  (state: RootState) => state.filter.selectedOption,
  (state: RootState) => state.tag.tags,
  (state: RootState) => state.todo.todos,
  (selectedOption, tags, todos) => todos.filter((todo) => {
    if (selectedOption === Options.Active) {
      return !todo.isCompleted;
    } if (selectedOption === Options.Completed) {
      return todo.isCompleted;
    } if (selectedOption === Options.All) {
      return todo;
    }
  }).filter((todo) => {
    const selectedTags = tags.filter((tag) => tag.isSelected).map((tag) => tag.id);
    if (selectedTags.length) {
      return selectedTags.find((id) => todo.tagsId.includes(id));
    }
    return todo;
  }),
);

export const TodoList: React.FC = () => {
  const todosState = UseTypedSelector(selector);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setTodos(todosState), SET_TIMEOUT.DEFAULT);
    return () => clearTimeout(timer);
  }, [todosState]);

  // function delay() {
  //   const filtered = () => new Promise<Todo[]>((resolve, reject) => {
  //     setTimeout(() => resolve(todosState), SET_TIMEOUT.DEFAULT);
  //   });
  //   filtered().then((data) => setTodos(data));
  // }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      margin: ' 0 50px 100px 150px',
    }}
    >
      <Tags />
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '100px',
        width: '100%',
        padding: '20px 10px',
      }}
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
          {todos.map((todo: Todo) => (
            <TodoListItem
              key={todo.id}
              todoValue={todo}
            />
          ))}
        </List>
      </Paper>
    </Box>
  );
};
