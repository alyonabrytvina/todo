import {
  Button, InputAdornment, TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { actionAddTodo } from '../../store/actions/todoObjAction';

export const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  const keyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onClickDispatchTodo();
    }
  };

  const onAdd = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const onClickDispatchTodo = () => {
    setValue('');

    if (!!value) {
      dispatch(actionAddTodo({
        todoDescription: value,
        isCompleted: false,
        id: uuidv4(),
        isSearched: false,
        isAttached: false,
        tagsId: [],
      }));
    }
  };

  return (
    <TextField
      label="What needs to be done?"
      value={value}
      onChange={onAdd}
      onKeyDown={keyDownHandler}
      sx={{
        minWidth: '200px',
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
              onClick={onClickDispatchTodo}
            >
              +
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};
