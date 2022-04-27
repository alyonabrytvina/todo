import React from 'react';
import {
  Button,
  ButtonGroup,
  Chip, Stack,
} from '@mui/material';
import { Todo } from '../../store/reducers/todoReducer';
import './Filter.scss';

interface Props {
    onTags: (filter: string) => void,
    todosState: Todo[],
    selectedOption: string,
}

export const Filter: React.FC<Props> = ({ onTags, todosState, selectedOption }) => {
  const completedTodos = todosState.filter((todo) => todo.completed);
  const isNotCompleteTodos = todosState.filter((todo) => !todo.completed);

  return (
    <ButtonGroup size="medium" variant="contained" className="buttons-container">
      <Button
        className={selectedOption === 'all' ? 'buttons-container__isSelected' : 'buttons-container__isNotSelected'}
        onClick={() => onTags('all')}
      >
        {`All: ${todosState.length}`}
      </Button>
      <Button
        className={selectedOption === 'completed' ? 'buttons-container__isSelected' : 'buttons-container__isNotSelected'}
        onClick={() => onTags('completed')}
      >
        {`Completed: ${completedTodos.length}`}
      </Button>
      <Button
        className={selectedOption === 'active' ? 'buttons-container__isSelected' : 'buttons-container__isNotSelected'}
        onClick={() => onTags('active')}
      >
        {`Active: ${isNotCompleteTodos.length}`}
      </Button>
    </ButtonGroup>
  // <Stack direction="row" spacing={1} sx={{ marginBottom: '20px' }}>
  //   <Chip
  //     label={`All:${todosState.length}`}
  //     variant="outlined"
  //     color="success"
  //     className={selectedOption === 'all' ? 'Filter__isSelected' : 'Filter__isNotSelected'}
  //     onClick={() => onTags('all')}
  //   />
  //   <Chip
  //     label={`Completed: ${completedTodos.length}`}
  //     variant="outlined"
  //     color="success"
  //     className={selectedOption === 'completed' ? 'Filter__isSelected' : 'Filter__isNotSelected'}
  //     onClick={() => onTags('completed')}
  //   />
  //   <Chip
  //     label={`Active: ${isNotCompleteTodos.length}`}
  //     variant="outlined"
  //     color="success"
  //     className={selectedOption === 'active' ? 'Filter__isSelected' : 'Filter__isNotSelected'}
  //     onClick={() => onTags('active')}
  //   />
  // </Stack>
  );
};
