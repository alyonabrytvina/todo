import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { actionSetSelectedFilter } from '../../store/actions/filterActionCreators';
import { UseTypedSelector } from '../../hooks/UseTypedSelector';
import { FilterState, Options } from '../../store/reducers/filterReducer';

export const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const todosState = UseTypedSelector((state) => state.todo.todos);
  const filterState = UseTypedSelector((state) => state.filter.selectedOption);

  const completedTodos = todosState.filter((todo) => todo.isCompleted);
  const isNotCompletedTodos = todosState.filter((todo) => !todo.isCompleted);

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: theme.spacing(0.5),
      fontWeight: '600',
      border: 0,
      '&.Mui-disabled': {
        border: 0,
      },
      '&:first-of-type': {
        borderRadius: theme.shape.borderRadius,
      },
    },
    '& .Mui-selected': {
      border: 'transparent !important',
      outline: `1.5px solid ${theme.palette.primary.main} !important`,
      borderRadius: '4px !important',
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
  }));

  const onDispatch = (payload: FilterState) => dispatch(actionSetSelectedFilter(payload));

  return (
    <StyledToggleButtonGroup
      size="medium"
      className="buttons-container"
      exclusive
      color="primary"
      value={filterState}
    >
      <ToggleButton
        onClick={() => onDispatch({ selectedOption: Options.All })}
        value="all"
      >
        {`All (${todosState.length})`}
      </ToggleButton>
      <ToggleButton
        onClick={() => onDispatch({ selectedOption: Options.Completed })}
        value="completed"
      >
        {`Completed (${completedTodos.length})`}
      </ToggleButton>
      <ToggleButton
        onClick={() => onDispatch({ selectedOption: Options.Active })}
        value="active"
      >
        {`Active (${isNotCompletedTodos.length})`}
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
};
