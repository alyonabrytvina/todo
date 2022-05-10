import React, { useEffect, useState } from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { UseTypedSelector } from '../../hooks/UseTypedSelector';
import { Search } from '../Search/Search';
import { actionSearchTodo } from '../../store/actions/todoObjAction';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const todosState = UseTypedSelector((state) => state.todo.todos);
  const [foundValue, setFoundValue] = useState<string>('');

  const handleSearch = (newSearchQuery: string) => {
    setFoundValue(newSearchQuery);
  };

  useEffect(() => {
    todosState.forEach((todo) => {
      const includeSearchedValue = todo.todoDescription?.toLowerCase().includes(foundValue.toLowerCase());
      dispatch(actionSearchTodo({ ...todo, isSearched: !!foundValue.length && includeSearchedValue }));
    });
  }, [foundValue]);

  return (
    <AppBar
      color="primary"
      sx={{
        position: 'fixed',
        width: 'calc(100% - 100px)',
        display: 'flex',
        justifyContent: 'spaceBetween',
        minHeight: '65px',
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
