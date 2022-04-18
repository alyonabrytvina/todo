import React from 'react';
import {
  Box, Button, ButtonGroup, Typography,
} from '@mui/material';
import { UseTypedSelector } from '../../hooks/UseTypesSelector';

export const Filters: React.FC = () => {
  const stateTodos = UseTypedSelector((state) => state.todo.todos);
  const completedTodos = stateTodos.filter((todo) => todo.complete).length;
  const isNotCompleteTodos = stateTodos.filter((todo) => !todo.complete).length;

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop: '20px',
    }}
    >
      <ButtonGroup>
        <Button>
          Total:
          { stateTodos.length }
        </Button>
        <Button>
          Done:
          { completedTodos }
        </Button>
        <Button>
          Pending:
          {isNotCompleteTodos}
        </Button>
      </ButtonGroup>
    </Box>
  );
};
