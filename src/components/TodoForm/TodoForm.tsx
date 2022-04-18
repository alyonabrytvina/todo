import React, { useState } from 'react';
import {
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { actionAddTodo } from '../../store/types/todoTypes';

const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  const addTodo = (): void => {
    setValue('');

    if (value.length) {
      dispatch(actionAddTodo({ todo: value, complete: false, id: uuidv4() }));
    }
  };

  return (
    <Paper
      elevation={10}
      className="paperStyle"
      sx={{
        display: 'flex',
        width: '80%',
        height: '200px',
        marginTop: '20px',
        marginBottom: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h2">
        My todos
      </Typography>
      <FormControl
        variant="standard"
        sx={{
          margin: '20px',
          display: 'flex',
          width: '70%',
          height: '55px',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <TextField
          label="What needs to be done?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
    </Paper>
  );
};

export default AddTodo;
