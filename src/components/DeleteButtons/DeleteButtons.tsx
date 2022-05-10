import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, ButtonGroup } from '@mui/material';
import { actionDeleteAllTodos, actionDeleteCompletedTodos } from '../../store/actions/todoArrAction';
import { actionDeleteAllTags } from '../../store/actions/tagArrAction';

export const DeleteButtons: React.FC = () => {
  const dispatch = useDispatch();

  const onClickDeleteCompletedTodos = () => {
    dispatch(actionDeleteCompletedTodos());
  };

  const onClickClearAll = () => {
    dispatch(actionDeleteAllTodos());
    dispatch(actionDeleteAllTags());
  };

  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      sx={{
        mt: '10px',
        mb: '100px',
        display: 'flex',
        justifyContent: 'end',
      }}
    >
      <Button onClick={onClickDeleteCompletedTodos}>Remove completed todos</Button>
      <Button onClick={onClickClearAll}>Clear All</Button>
    </ButtonGroup>
  );
};
