import React, { useEffect, useState } from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { UseTypedSelector } from '../../hooks/UseTypesSelector';
import { Search } from '../Search/Search';
import { actionSearchTodo } from '../../store/types/todoTypes';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const todosState = UseTypedSelector((state) => state.todo.todos);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = (newSearchQuery: string) => {
    setSearchValue(newSearchQuery);
  };

  useEffect(() => {
    todosState.forEach((todo) => {
      if (!!searchValue.length && todo.todo.toLowerCase().includes(searchValue.toLowerCase())) {
        dispatch(actionSearchTodo({ ...todo, search: true, searchedValue: searchValue }));
      } else {
        dispatch(actionSearchTodo({ ...todo, search: false, searchedValue: searchValue }));
      }
    });
  }, [searchValue]);

  return (
    <AppBar
      color="primary"
      sx={{
        position: 'static',
        width: '100%',
        display: 'flex',
        justifyContent: 'spaceBetween',
      }}
    >
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}
      >
        <Typography variant="h5" component="div">
          List of notes
        </Typography>
        <Search handleSearch={handleSearch} />
      </Toolbar>
    </AppBar>
  );
};
