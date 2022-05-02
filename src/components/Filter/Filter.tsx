import React from 'react';
import {
  Button,
  ButtonGroup,
  Chip, Stack,
} from '@mui/material';
import { Todo } from '../../store/reducers/todoReducer';
import './Filter.scss';

interface Props {
    handleClick: (filter: string) => void,
    todosState: Todo[],
    selectedOption: string,
}

export const Filter: React.FC<Props> = ({ handleClick, todosState, selectedOption }) => {
  const completedTodos = todosState.filter((todo) => todo.isCompleted);
  const isNotCompletedTodos = todosState.filter((todo) => !todo.isCompleted);

  return (
    <ButtonGroup size="medium" variant="contained" className="buttons-container">
      <Button
        className={selectedOption === 'all' ? 'buttons-container__isSelected' : 'buttons-container__isNotSelected'}
        onClick={() => handleClick('all')}
      >
        {`All: ${todosState.length}`}
      </Button>
      <Button
        className={selectedOption === 'completed' ? 'buttons-container__isSelected' : 'buttons-container__isNotSelected'}
        onClick={() => handleClick('completed')}
      >
        {`Completed: ${completedTodos.length}`}
      </Button>
      <Button
        className={selectedOption === 'active' ? 'buttons-container__isSelected' : 'buttons-container__isNotSelected'}
        onClick={() => handleClick('active')}
      >
        {`Active: ${isNotCompletedTodos.length}`}
      </Button>
    </ButtonGroup>
  );
};
