import React, { useState } from 'react';
import {
  Box,
  Button, CssBaseline,
  FormControl, InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { actionAddTodo } from '../../store/types/todoTypes';
import { Header } from '../Header/Header';
import { TodoList } from '../TodoList/TodoList';
import { Tags } from '../Tags/Tags';

export const TodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  const addTodo = () => {
    setValue('');
    if (value.length !== 0) {
      dispatch(actionAddTodo({
        todo: value, completed: false, id: uuidv4(), searched: false, searchedValue: '', tagsId: [],
      }));
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '50px',
      }}
    >
      <Header />
      <Tags />
      <FormControl
        variant="standard"
        sx={{
          margin: '100px 20px',
          display: 'flex',
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h4" sx={{ marginTop: '20px' }}>
          Create note
        </Typography>
        <TextField
          label="What needs to be done?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={keyPressHandler}
          sx={{
            margin: '20px 0',
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  sx={{
                    width: '30px',
                    height: '30px',
                  }}
                  onClick={addTodo}
                >
                  +
                </Button>
              </InputAdornment>
            ),
          }}
        />
        <TodoList />
      </FormControl>
    </Box>
  );
};
