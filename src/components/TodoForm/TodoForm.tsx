import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { actionAddTodo } from '../../store/types/todoTypes';
import TodoList from '../TodoList/TodoList';
import { Filters } from '../Filters/Filters';
import { Header } from '../Header/Header';

export const TodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setValue('');
      if (value.length !== 0) {
        dispatch(actionAddTodo({ todo: value, complete: false, id: uuidv4() }));
      }
    }
  };

  const addTodo = (): void => {
    setValue('');

    if (value.length !== 0) {
      dispatch(actionAddTodo({ todo: value, complete: false, id: uuidv4() }));
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'start',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '50px',
      }}
    >
      <Header />
      <Filters />
      <Typography variant="h4" sx={{ marginTop: '20px' }}>
        Create note
      </Typography>
      <FormControl
        variant="standard"
        sx={{
          margin: '20px',
          display: 'flex',
          width: '70%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <TextField
          label="What needs to be done?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={keyPressHandler}
        />
        <Button
          variant="contained"
          sx={{
            height: '55px',
          }}
          onClick={addTodo}
        >
          +
        </Button>
      </FormControl>
      <TodoList />
    </Box>
  );
};
