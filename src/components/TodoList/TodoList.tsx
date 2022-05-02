import React, { useEffect, useState } from 'react';
import {
  Box, List, Paper,
} from '@mui/material';
import { Todo } from '../../store/reducers/todoReducer';
import { UseTypedSelector } from '../../hooks/UseTypesSelector';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import './TodoList.scss';
import { Filter } from '../Filter/Filter';
import { Tags } from '../Tags/Tags';
import { AddTodo } from '../AddTodo/AddTodo';
import { DEFAULT_SET_TIMEOUT } from '../../constants';

interface Tag {
    id: string;
    tagDescription: string;
}

export const TodoList: React.FC = () => {
  const todosState = UseTypedSelector((state) => state.todo.todos);
  const [selectedOption, setSelectedOption] = useState<string>('all');

  const [selectedTag, setSelectedTag] = useState<string>('');
  const [isTagSelected, setIsTagSelected] = useState(false);

  const [todoByTag, setTodoByTag] = useState<Todo[]>([]);
  const [todoByFilter, setTodoByFilter] = useState<Todo[]>([]);

  const onClickFilter = (filter: string): void => {
    setSelectedOption(filter);
    setIsTagSelected(false);
  };

  const onClickTag = (tag: Tag): void => {
    setSelectedTag(tag.id);
    setIsTagSelected(true);
  };

  const onAdd = (value: boolean): void => {
    setIsTagSelected(value);
  };

  useEffect(() => {
    const filtered = () => new Promise<Todo[]>((resolve, reject) => {
      setTimeout(() => resolve(
        todosState.filter((todo) => {
          switch (selectedOption) {
            case 'active':
              return !todo.isCompleted;
            case 'completed':
              return todo.isCompleted;
            case 'all':
            default:
              return todo;
          }
        }),
      ), Math.random() * DEFAULT_SET_TIMEOUT);
    });

    filtered().then((data) => {
      setTodoByFilter(data);
    });

    const findTag = () => new Promise<Todo[]>((resolve) => {
      setTimeout(() => resolve(
        todosState.filter((todo) => todo.tagsId.includes(selectedTag as any)),
      ), Math.random() * DEFAULT_SET_TIMEOUT);
    });

    findTag().then((data) => {
      setTodoByTag(data);
    });
  }, [todosState, selectedOption, selectedTag]);

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      margin: ' 0 50px 100px 150px',
    }}
    >
      <Tags handleTag={onClickTag} />
      <AddTodo handleAdd={onAdd} />
      <Filter
        handleClick={onClickFilter}
        todosState={todosState}
        selectedOption={selectedOption}
      />
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
            padding: '10px',
          }}
        >
          {isTagSelected ? todoByTag.map((todo: Todo) => (
            <TodoListItem
              key={todo.id}
              todoValue={todo}
            />
          ))
            : todoByFilter.map((todo: Todo) => (
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
