import {
  Box,
  Button, InputAdornment, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { actionAddTodo } from '../../store/types/todoTypes';

interface Props {
  handleAdd: (value: boolean) => void,
}

export const AddTodo: React.FC<Props> = ({ handleAdd }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onClickAddTodo();
    }
  };

  const onClickAddTodo = () => {
    setValue('');
    handleAdd(false);

    if (value.length !== 0) {
      dispatch(actionAddTodo({
        todoDescription: value,
        isCompleted: false,
        id: uuidv4(),
        isSearched: false,
        searchedValue: '',
        isAttached: false,
        tagsId: [],
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
        marginTop: '80px',
      }}
    >
      <Typography variant="h5" sx={{ mt: '20px' }}>
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
                onClick={onClickAddTodo}
              >
                +
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
